"use server";

import nodemailer from "nodemailer";

export async function handleSignup(data) {
  try {
    // Create SMTP transporter with hardcoded credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "shopingonlines.pk@gmail.com", // Your email address
        pass: "xoxz zybb gvvh emaj", // Your app password
      },
    });

    // Format the email content
    const mailOptions = {
      from: `"ShopMart Website" <shopingonlines.pk@gmail.com>`,
      to: "shopingonlines.pk@gmail.com", // Where you want to receive notifications
      subject: `New User Signup: ${
        data.signupMethod === "form" ? data.email : data.signupMethod
      }`,
      text: `
New User Signup

Signup Method: ${data.signupMethod}
${data.email ? `Email: ${data.email}` : ""}
${data.phoneNumber ? `Phone: ${data.phoneNumber}` : ""}

Time: ${new Date().toLocaleString()}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #e11d48;">New User Signup</h2>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #e11d48; border-radius: 4px;">
    <p><strong>Signup Method:</strong> ${data.signupMethod}</p>
    ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
    ${
      data.phoneNumber
        ? `<p><strong>Phone:</strong> ${data.phoneNumber}</p>`
        : ""
    }
    <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
  </div>
  
  <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This is an automated notification from your ShopMart website.</p>
</div>
      `,
    };

    console.log("Attempting to send signup notification...");

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    // In a real application, you would also store the user in a database here

    return { success: true };
  } catch (error) {
    console.error("Error processing signup:", error);
    return { success: false, error: error.message };
  }
}


// "use server";

// import nodemailer from "nodemailer";

// export async function handleSignup(data) {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "shopingonlines.pk@gmail.com",
//         pass: "xoxz zybb gvvh emaj",
//       },
//     });

//     const mailOptions = {
//       from: `"ShopMart Website" <shopingonlines.pk@gmail.com>`,
//       to: "shopingonlines.pk@gmail.com",
//       subject: `New User Signup: ${data.signupMethod === "form" ? data.email : data.signupMethod}`,
//       text: `
// New User Signup

// Signup Method: ${data.signupMethod}
// ${data.email ? `Email: ${data.email}` : ""}
// ${data.phoneNumber ? `Phone: ${data.phoneNumber}` : ""}
// Time: ${new Date().toLocaleString()}
//       `,
//       html: `
// <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//   <h2 style="color: #e11d48;">New User Signup</h2>
//   <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #e11d48; border-radius: 4px;">
//     <p><strong>Signup Method:</strong> ${data.signupMethod}</p>
//     ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
//     ${data.phoneNumber ? `<p><strong>Phone:</strong> ${data.phoneNumber}</p>` : ""}
//     <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
//   </div>
//   <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This is an automated notification from your ShopMart website.</p>
// </div>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);

//     return { success: true };
//   } catch (error) {
//     console.error("Error processing signup:", error);
//     return { success: false, error: error.message };
//   }
// }
