// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { userEmail } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: "shopingonlines.pk@gmail.com",
//         pass: "xoxz zybb gvvh emaj", // Use App Password
//       },
//     });

//     try {
//       await transporter.sendMail({
//         from: `"ShopMart Website" <shopingonlines.pk@gmail.com>`,
//         to: "shopingonlines.pk@gmail.com",
//         subject: "New Google Signup",
//         text: `New user signed up with email: ${userEmail}`,
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Email failed to send" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
