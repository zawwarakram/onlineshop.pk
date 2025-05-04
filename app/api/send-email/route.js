import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ Use environment variables instead of hardcoding sensitive data
// EMAIL_USER=shopingonlines.pk@gmail.com
// EMAIL_PASS=xoxz zybb gvvh emaj


export async function POST(request) {
  try {
    const userData = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: `shopingonlines.pk@gmail.com`,
        pass: `xoxz zybb gvvh emaj`,
      },
      tls: {
        rejectUnauthorized: false,
      },
      timeout: 10000,
    });

    try {
      await transporter.verify();
    } catch (error) {
      console.error("SMTP verification failed:", error);
      return NextResponse.json({ error: "Email service unavailable" }, { status: 503 });
    }

    const emailContent = `
      <h2>New User Signup</h2>
      <p><strong>Username:</strong> ${userData.username}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Signup Method:</strong> ${userData.provider}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `;

    const mailOptions = {
      from: `"ShopMart Website" <shopingonlines.pk@gmail.com>`,
      to: "shopingonlines.pk@gmail.com",
      subject: `New User Signup: ${userData.username}`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "User data sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
