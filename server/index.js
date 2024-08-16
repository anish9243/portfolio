// Import required modules
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const { sendEmail } = require("./modules/api/nodemailer");

const db = require("./modules/db");

// Initialize an Express application
const app = express();

// Set the port for the server, default to 8888 if not specified in environment variables
const port = process.env.PORT || "8888";

// Middleware to parse URL-encoded data and JSON data from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up CORS headers to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// Route to handle the form submission and send an email
app.post("/api/send-email", async (req, res) => {
  const { name, email, message, service, phone } = req.body;

  const subject = `Inquiry about ${service} from ${name}`;
  const emailText = `You have received a new inquiry from ${name} (${email}).\n\nService: ${service}\n\nMessage:\n${message} \nPhone:${phone}`;

  const result = await sendEmail(email, subject, emailText);

  if (result.success) {
    return res.status(200).json({ message: "Email sent successfully", info: result.info });
  } else {
    console.error("Email sending failed:", result.error); // Log the error
    return res.status(500).json({ message: "Failed to send email", error: result.error.message });
  }
});

// About page route
app.get("/api/services", async (request, response) => {
  let servicesList = await db.getServices();
  response.json(servicesList)
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
