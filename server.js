
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reactt",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

//  Gmail SMTP Transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "", // Your Gmail address
//     pass: "",  // Your App password (without spaces)
//   },
// });

//Server Mail Setup
const transporter = nodemailer.createTransport({
  host: "mail.olamsolutions.com", // Your SMTP server address
  port: 465, // Port
  secure: true, // true if using port 465, false for 587
  auth: {
    user: "vaseem@olamsolutions.com", // Server Mail
    pass: "58BxLS[+sJH!", // Password
  },
  tls: {
    rejectUnauthorized: false, //False If certificate self-signed
  },
});


app.post("/api/contact-us", (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("Received data:", req.body);

  
  const sql = "INSERT INTO enrollment (name, email, phone, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error(" MySQL insert error:", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    console.log("Data inserted into DB:", result);

    // email
    const mailOptions = {
      from: "vaseem@olamsolutions.com",  //Service Email
      to: "work.vaseemkhan@gmail.com", 
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

   // console.log(" Preparing to send email with options:", mailOptions);

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email send error:", error);
        return res.status(500).json({ error: "Failed to send email", details: error });
      }

      console.log("Email sent successfully:", info.response);
      res.status(200).json({ message: "Data saved and email sent successfully!" });
    });
  });
});
  

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
