import { NextResponse } from "next/server";
import { API_URL } from "@/lib/api";

type Payload = { name?: unknown; email?: unknown; company?: unknown; service?: unknown; budget?: unknown; message?: unknown };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const data = {
    name: str(body.name),
    email: str(body.email),
    company: str(body.company),
    service: str(body.service),
    budget: str(body.budget),
    message: str(body.message),
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.service) errors.service = "Please choose a service.";
  if (!data.budget) errors.budget = "Please choose a budget range.";
  if (data.message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  if (data.message.length > 5000) errors.message = "Message is too long (max 5000 characters).";

  if (Object.keys(errors).length) {
    return NextResponse.json({ success: false, message: "Please fix the highlighted fields.", errors }, { status: 422 });
  }

  // MERN backend integration goes here, e.g.:
  //   const res = await fetch(`${API_URL}/api/contact`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   if (!res.ok) return NextResponse.json({ success: false, message: "Could not send message." }, { status: 502 });

  return NextResponse.json({
    success: true,
    message: `Thanks ${data.name.split(" ")[0]}! Your message has been received. We will reply within one business day.`,
  });
}
