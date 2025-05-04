import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const data = await request.json()

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "shopingonlines.pk@gmail.com",
        pass: "xoxz zybb gvvh emaj",
      },
    })

    // Format the email content
    const mailOptions = {
      from: `"ShopMart Website" <shopingonlines.pk@gmail.com>`,
      to: "shopingonlines.pk@gmail.com",
      subject: `New User Signup: ${data.signupMethod === "form" ? data.email : data.signupMethod}`,
      text: `
New User Signup

Signup Method: ${data.signupMethod}
${data.email ? `Email: ${data.email}` : ""}
${data.phoneNumber ? `Phone: ${data.phoneNumber}` : ""}
${data.userName ? `Name: ${data.userName}` : ""}

Time: ${new Date().toLocaleString()}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #e11d48;">New User Signup</h2>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #e11d48; border-radius: 4px;">
    <p><strong>Signup Method:</strong> ${data.signupMethod}</p>
    ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
    ${data.phoneNumber ? `<p><strong>Phone:</strong> ${data.phoneNumber}</p>` : ""}
    ${data.userName ? `<p><strong>Name:</strong> ${data.userName}</p>` : ""}
    <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
  </div>
  
  <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This is an automated notification from your ShopMart website.</p>
</div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
