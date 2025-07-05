const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(cors());
app.use(express.json());

// Example products route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Crochet Snail', price: 20 },
    { id: 2, name: 'Crochet Blanket', price: 40 },
    { id: 3, name: 'Crochet Flower', price: 15 }
  ]);
});

// Contact form route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Set up transporter (for Gmail, use an App Password if 2FA is enabled)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '@gmail.com', // <-- Replace with your email
      pass: '' // <-- Replace with your app password
    }
  });

  const mailOptions = {
    from: email,
    to: '@gmail.com', // <-- Replace with your email
    subject: `Contact Form Message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 