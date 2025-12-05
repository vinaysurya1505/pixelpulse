import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const formAction = process.env.GOOGLE_FORM_ACTION;
const formNameEntry = process.env.GOOGLE_FORM_NAME_ENTRY;
const formEmailEntry = process.env.GOOGLE_FORM_EMAIL_ENTRY;
const formMessageEntry = process.env.GOOGLE_FORM_MESSAGE_ENTRY;
const formSourceEntry = process.env.GOOGLE_FORM_SOURCE_ENTRY;

const isConfigured =
  Boolean(formAction && formNameEntry && formEmailEntry && formMessageEntry);

export async function POST(request: Request) {
  if (!isConfigured) {
    return NextResponse.json(
      {
        message:
          "Email service is not configured. Please add Google Form settings to the environment.",
      },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }

  const { name, email, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const normalizedMessage = message.replaceAll("\r\n", "\n");
  const params = new URLSearchParams();
  params.set(formNameEntry!, name);
  params.set(formEmailEntry!, email);
  params.set(formMessageEntry!, normalizedMessage);

  if (formSourceEntry) {
    params.set(formSourceEntry, "portfolio-contact");
  }

  try {
    const response = await fetch(formAction!, {
      method: "POST",
      body: params.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok && response.status !== 302 && response.status !== 303) {
      return NextResponse.json(
        { message: "Unable to send message right now. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error submitting Google Form", error);
    return NextResponse.json(
      { message: "Unable to send message right now. Please try again later." },
      { status: 500 },
    );
  }
}
