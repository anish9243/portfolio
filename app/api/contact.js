// app/api/contact.js

import { sendMail } from '@/lib/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, message, service } = req.body;

    try {
      await sendMail({
        name: `${firstname} ${lastname}`,
        email,
        phone,
        message,
        service,
        subject: `New Contact Request from ${firstname} ${lastname}`,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
