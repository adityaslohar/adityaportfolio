require('dotenv').config();
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,  // Store safely in Vercel
        pass: process.env.MAIL_PASS   // Store safely in Vercel
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${email}>`,
      to: process.env.MAIL_USER,
      subject,
      html: `
      <div style="font-family: Arial; background-color: #f4f4f4; padding: 20px;">
        <table style="width: 100%; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; background: white;">
          <tr style="background: #007BFF; color: white;"><th colspan="2" style="padding: 15px;">New Contact Form Submission</th></tr>
          <tr><td style="padding: 10px;"><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td style="padding: 10px;"><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td style="padding: 10px;"><strong>Subject:</strong></td><td>${subject}</td></tr>
          <tr><td style="padding: 10px;"><strong>Message:</strong></td><td>${message}</td></tr>
        </table>
      </div>
      `
    });

    res.status(200).json({ status: 'success' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}
