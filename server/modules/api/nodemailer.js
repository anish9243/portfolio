const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,  // Use the App password here
  },
});

// Function to send an email
const sendEmail = async (fromEmail, subject, text) => {
  const mailOptions = {
    from: fromEmail,  // This should typically be the same as `process.env.EMAIL_USER`
    to: process.env.EMAIL_USER,  // Receiver's email, can be the same as sender
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail };
