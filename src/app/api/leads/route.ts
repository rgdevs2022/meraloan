import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";
import { sendLeadConfirmation, sendAdminNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic sanitization
    const {
      firstName, lastName, email, mobile, pan,
      gender, employmentType, salary, desiredAmount, city, consent,
    } = body;

    if (!firstName || !lastName || !email || !mobile || !pan ||
        !gender || !employmentType || !salary || !desiredAmount || !city || !consent) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await connectDB();

    const lead = await Lead.create({
      firstName: String(firstName).trim().slice(0, 100),
      lastName: String(lastName).trim().slice(0, 100),
      email: String(email).trim().toLowerCase().slice(0, 200),
      mobile: String(mobile).trim().slice(0, 15),
      pan: String(pan).trim().toUpperCase().slice(0, 10),
      gender: String(gender).trim(),
      employmentType: String(employmentType).trim(),
      salary: Number(salary),
      desiredAmount: Number(desiredAmount),
      city: String(city).trim().slice(0, 100),
      source: "website",
    });

    // Send emails — errors are logged but don't block the response
    try {
      await sendLeadConfirmation(lead.email, lead.firstName);
      console.log("Auto-reply sent to:", lead.email);
    } catch (emailErr: unknown) {
      console.error("Auto-reply failed:", emailErr instanceof Error ? emailErr.message : emailErr);
    }
    try {
      await sendAdminNotification({
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
        mobile: lead.mobile,
        pan: lead.pan,
        employmentType: lead.employmentType,
        salary: lead.salary,
        desiredAmount: lead.desiredAmount,
        city: lead.city,
      });
      console.log("Admin notification sent.");
    } catch (emailErr: unknown) {
      console.error("Admin notification failed:", emailErr instanceof Error ? emailErr.message : emailErr);
    }

    return NextResponse.json({ success: true, id: lead._id }, { status: 201 });
  } catch (err) {
    console.error("Lead creation error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
