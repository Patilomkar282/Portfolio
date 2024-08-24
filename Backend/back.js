const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other email services
  auth: {
    user: 'Patilomkar2820@gmail.com',
    pass: 'yrnd ufzt oigv tlsl ',
  },
});

app.post('/send-email', (req, res) => {
    console.log('Request received:', req.body);
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'Patilomkar2820@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Failed to send message.',error);
    }
    res.status(200).send('Message sent successfully!',info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
