import { appendFile, mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const contactFilePath = join(process.cwd(), "data", "contact-leads.csv");
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const contactEmailTo = process.env.CONTACT_EMAIL_TO ?? "perficientdesignstidios@gmail.com";
const contactEmailFrom = process.env.CONTACT_EMAIL_FROM ?? "Perficient Design Studio <onboarding@resend.dev>";

async function appendToGoogleSheet(values: string[]) {
  const sheetId = process.env.GOOGLE_SHEET_ID ?? "1OfZRU8p_cdmSBu3QvwurEOzLnQgaxZhsaVWX7HknvqU";
  const serviceAccountJsonEnv = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const serviceAccountPath = process.env.GOOGLE_SERVICE_ACCOUNT_PATH;

  let serviceAccountJson: string | undefined = serviceAccountJsonEnv;
  if (!serviceAccountJson && serviceAccountPath) {
    try {
      serviceAccountJson = await readFile(serviceAccountPath, "utf8");
    } catch (err) {
      console.error("Failed to read service account file", err);
    }
  }

  if (!sheetId || !serviceAccountJson) {
    return false;
  }

  const credentials = JSON.parse(serviceAccountJson);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "A:G",
      valueInputOption: "RAW",
      requestBody: {
        values: [values],
      },
    });
    console.log("Google Sheets append response:", res.status, res.statusText);
  } catch (err) {
    console.error("Failed to append to Google Sheet:", err);
    throw err;
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const submittedAt = new Date().toISOString();
    const row = [
      body.name ?? "",
      body.brandName ?? "",
      body.phone ?? "",
      body.email ?? "",
      body.projectType ?? "",
      (body.message ?? "").replace(/\n/g, " "),
      submittedAt,
    ];

    await mkdir(join(process.cwd(), "data"), { recursive: true });
    await appendFile(contactFilePath, `${row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")}\n`, "utf8");

    await appendToGoogleSheet(row);

    if (resend) {
      await resend.emails.send({
        from: contactEmailFrom,
        to: [contactEmailTo],
        subject: `New Contact Form Submission from ${body.name ?? "Website Visitor"}`,
        html: `
          <h2>New project inquiry received</h2>
          <p><strong>Name:</strong> ${body.name ?? "—"}</p>
          <p><strong>Brand / Company:</strong> ${body.brandName ?? "—"}</p>
          <p><strong>Phone:</strong> ${body.phone ?? "—"}</p>
          <p><strong>Email:</strong> ${body.email ?? "—"}</p>
          <p><strong>Project Type:</strong> ${body.projectType ?? "—"}</p>
          <p><strong>Submitted At:</strong> ${submittedAt}</p>
          <p><strong>Message:</strong><br />${(body.message ?? "—").replace(/\n/g, "<br />")}</p>
        `,
      });
    }

    return NextResponse.json({ message: "Contact request received." });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json({ message: "Unable to process contact request. Please try again." }, { status: 500 });
  }
}
