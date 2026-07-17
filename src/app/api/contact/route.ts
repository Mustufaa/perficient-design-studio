import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // TODO: replace this stub with Resend or another email service integration.
  console.log("Contact form payload:", body);

  return NextResponse.json({ message: "Contact request received." });
}
