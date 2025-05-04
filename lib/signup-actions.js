"use server";

import nodemailer from "nodemailer";

export async function handleSignup(data) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS, not SSL
      auth: {
        user: "shopingonlines.pk@gmail.com",
        pass: "xoxz zybb gvvh emaj", // Use App Password
      },
    });

    const mailOptions = {
      from: `"ShopMart Website" <shopingonlines.pk@gmail.com>`,
      to: "shopingonlines.pk@gmail.com",
      subject: `🛍️ New Signup: ${data.signupMethod}`,
      html: `
        <h2>New User Signed Up</h2>
        <p><strong>Method:</strong> ${data.signupMethod}</p>
        ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
        ${data.phoneNumber ? `<p><strong>Phone:</strong> ${data.phoneNumber}</p>` : ""}
        <p><strong>Name:</strong> ${data.User_Name || "N/A"}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("❌ Email Error:", error);
    return { success: false, error: error.message };
  }
}


// "use server";

// import nodemailer from "nodemailer";

// export async function handleSignup(data) {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false, // Use TLS, not SSL
//       auth: {
//         user: "shopingonlines.pk@gmail.com",
//         pass: "xoxz zybb gvvh emaj", // Use App Password
//       },
//     });

//     const mailOptions = {
//       from: `"ShopMart Website" <shopingonlines.pk@gmail.com>`,
//       to: "shopingonlines.pk@gmail.com",
//       subject: `🛍️ New Signup: ${data.signupMethod}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
//           <h2 style="color: #e11d48; margin-bottom: 20px;">New User Signed Up</h2>
//           <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
//             <p style="margin: 8px 0;"><strong>Method:</strong> ${data.signupMethod}</p>
//             ${data.email ? `<p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>` : ""}
//             ${data.phoneNumber ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${data.phoneNumber}</p>` : ""}
//             <p style="margin: 8px 0;"><strong>Name:</strong> ${data.User_Name || "N/A"}</p>
//             <p style="margin: 8px 0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
//           </div>
//           <p style="font-size: 12px; color: #6b7280; text-align: center;">This is an automated notification from your ShopMart website.</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log("✅ Signup email sent successfully");
//     return { success: true };
//   } catch (error) {
//     console.error("❌ Email Error:", error);
//     return { success: false, error: error.message };
//   }
// }

