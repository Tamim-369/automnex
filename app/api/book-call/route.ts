import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, date, time } = await req.json();

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Format the date and time
    const meetingDate = new Date(`${date}T${time}`);
    const bangladeshTime = new Date(
      meetingDate.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );
    const userTime = new Date(
      meetingDate.toLocaleString("en-US", {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
    );

    // Send notification email to you
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Call Booking from ${name}`,
      html: `
                <h2>New Call Booking Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Meeting Time (Bangladesh):</strong> ${bangladeshTime.toLocaleString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    timeZone: "Asia/Dhaka",
                  }
                )}</p>
                <p><strong>Meeting Time (User's Local):</strong> ${userTime.toLocaleString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  }
                )}</p>
                <p>Please respond to this booking request at your earliest convenience.</p>
            `,
    };

    // Send confirmation email to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Call Booking Request Received`,
      html: `
                <h2>Thank you for booking a call!</h2>
                <p>Dear ${name},</p>
                <p>We have received your request for a call at:</p>
                <p><strong>Your Local Time:</strong> ${userTime.toLocaleString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  }
                )}
                <p>We will review your request and send you a confirmation email shortly with the meeting details.</p>
                <p>Best regards,<br>Automnex Team</p>
            `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Call booking request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error booking call:", error);
    return NextResponse.json({ error: "Failed to book call" }, { status: 500 });
  }
}
