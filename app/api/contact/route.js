import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a test SMTP transporter
    // In production, you would use your actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: true,
      auth: {
        user: "shopingonlines.pk@gmail.com",
        pass: "kxhm hnsa zqlu woqt",
      },
    })

    // Format the email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "shopingonlines.pk@gmail.com",
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #e11d48;">New Contact Form Submission</h2>
  <p><strong>From:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
  <p><strong>Subject:</strong> ${subject}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #e11d48; border-radius: 4px;">
    <h3 style="margin-top: 0; color: #111827;">Message:</h3>
    <p style="white-space: pre-line;">${message}</p>
  </div>
  <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This email was sent from your website contact form.</p>
</div>
      `,
    }

    // In development, log the email instead of sending it
    if (process.env.NODE_ENV === "development") {
      console.log("Email would be sent:", mailOptions)
      return NextResponse.json({ success: true })
    }

    // Send the email
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
