import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set via Vercel environment variables

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-CA"); 

    const msg = {
      to: process.env.CLIENT_EMAIL, // your client's email
      from: {
        email: process.env.FROM_EMAIL, // verified sender in SendGrid
        name: "Website Contact",       // optional display name
      },
      subject: `New Contact Form Submission - ${formattedDate}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("SendGrid error:", error);
    return res.status(500).json({ message: "Error sending email", error: error.response?.body || error });
  }
}
