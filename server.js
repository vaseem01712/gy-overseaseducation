const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact-us", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  console.log("Received data:", req.body); // Debug

  const transporter = nodemailer.createTransport({
    host: "mail.olamsolutions.com",
    port: 465,
    secure: true, // ✅ Required for port 465 (SSL)
    auth: {
      user: "vaseem@olamsolutions.com",
      pass: "58BxLS[+sJH!", // ✅ Use your actual email password
    },
    logger: true,
    debug: true,
  });

  const mailOptions = {
    from: '"Gy Overseas Education Contact Form" <vaseem@olamsolutions.com>', // Your domain email
    to: "info@gyoverseas.com", // Receiver mail
    replyTo: email,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message received! We’ll respond to you shortly.:", info.messageId);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(3002, () => {
  console.log("🚀 Server running at http://localhost:3002");
});