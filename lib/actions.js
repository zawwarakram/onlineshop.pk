"use server"

import nodemailer from "nodemailer"

export async function sendContactForm(data) {
  try {
    // Create SMTP transporter with hardcoded credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "shopingonlines.pk@gmail.com", // MUST be a valid email address
        pass: "kxhm hnsa zqlu woqt", // Your app password
      },
    })

    // Format the email content
    const mailOptions = {
      from: `"Contact Form" <shopingonlines.pk@gmail.com>`, // Must use the same email as auth.user
      replyTo: data.email, // This allows you to reply directly to the customer
      to: "shopingonlines.pk@gmail.com", // Where you want to receive emails
      subject: `Contact Form: ${data.subject}`,
      text: `
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}

Message:
${data.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #e11d48;">New Contact Form Submission</h2>
  <p><strong>From:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
  <p><strong>Subject:</strong> ${data.subject}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #e11d48; border-radius: 4px;">
    <h3 style="margin-top: 0; color: #111827;">Message:</h3>
    <p style="white-space: pre-line;">${data.message}</p>
  </div>
  <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This email was sent from your website contact form.</p>
</div>
      `,
    }

    // IMPORTANT: Remove this development check to actually send emails
    // if (process.env.NODE_ENV === "development") {
    //   console.log("Email would be sent:", mailOptions)
    //   return { success: true }
    // }

    console.log("Attempting to send email...")
    
    // Send the email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: error.message }
  }
}