const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*', // Allow all origins for initial deployment
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Log directory for waitlist
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

const nodemailer = require('nodemailer');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Helps with some cloud network configurations
  },
  family: 4 // Force IPv4 to avoid IPv6 routing issues on some cloud providers
});

app.post('/api/waitlist', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const logEntry = `${new Date().toISOString()} - ${email}\n`;
  
  try {
    // 1. Log the email (Immediate response after this)
    await fs.promises.appendFile(path.join(LOG_DIR, 'waitlist.txt'), logEntry);
    console.log(`New waitlist entry: ${email}`);
    
    // Respond immediately to the frontend to eliminate delay
    res.status(200).json({ message: 'Success! You are on the list.' });

    // 2. Send the Newsletter Email (Background process)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: `"Antares Browser" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Welcome to Antares! Your Newsletter is Here',
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0d0d0d; color: #fff; padding: 40px; border-radius: 24px; max-width: 600px; margin: auto; border: 1px solid #1f1f1f;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #FF5A5F; font-size: 36px; margin: 0; text-transform: uppercase; letter-spacing: 8px; font-weight: 900;">Antares</h1>
              <p style="color: #888; font-size: 12px; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Intelligent Browsing Reimagined</p>
            </div>
            
            <div style="background-color: #1a1a1a; padding: 40px; border-radius: 20px; border: 1px solid #2a2a2a; text-align: center;">
              <h2 style="color: #fff; margin-top: 0; font-size: 24px;">Welcome to the Future of Browsing!</h2>
              <p style="line-height: 1.8; color: #aaa; font-size: 16px; margin-bottom: 30px;">
                Hello!<br><br>
                Thank you for subscribing to the Antares newsletter. We are excited to have you on board! 
                Antares is designed to redefine how you interact with the internet, providing context-aware AI assistance and lightning-fast performance.
              </p>
              
              <div style="margin: 30px 0; border: 1px solid #333; border-radius: 12px; padding: 10px; background: #000;">
                <p style="color: #666; font-size: 11px; margin-bottom: 10px; text-transform: uppercase;">Newsletter Preview</p>
                <img src="cid:newsletter_preview" alt="Antares Newsletter Preview" style="width: 100%; border-radius: 8px; border: 1px solid #333;" />
              </div>

              <a href="https://yeswanth-s-portfolio-dev.netlify.app/" style="display: inline-block; background-color: #FF5A5F; color: #fff; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(255, 90, 95, 0.3);">Download Full Newsletter PDF</a>
              
              <p style="color: #555; font-size: 13px; margin-top: 20px;">
                We've also attached the high-resolution PDF to this email for your convenience.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
              <div style="margin-bottom: 20px;">
                <span style="color: #444; font-size: 12px;">FOLLOW US</span><br>
                <div style="margin-top: 10px;">
                   <a href="https://github.com/yeswanthyes" style="color: #FF5A5F; text-decoration: none; margin: 0 10px; font-weight: bold;">GITHUB</a>
                   <a href="https://yeswanth-s-portfolio-dev.netlify.app/" style="color: #FF5A5F; text-decoration: none; margin: 0 10px; font-weight: bold;">WEBSITE</a>
                </div>
              </div>
              <p style="color: #333; font-size: 11px;">
                © 2026 Antares Browser | Built by VisualX Technologies
              </p>
              <p style="margin: 20px 0 0 0; font-size: 14px; color: #fff;">Best regards,</p>
              <p style="margin: 5px 0 0 0; color: #FF5A5F; font-size: 18px; font-weight: 900; letter-spacing: 1px;">VisualX Technologies</p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: 'Antares_Newsletter.pdf',
            path: path.join(__dirname, 'assets', 'Newsletter.pdf'),
          },
          {
            filename: 'preview.png',
            path: path.join(__dirname, 'assets', 'news_letter_preview.png'),
            cid: 'newsletter_preview' // Same cid as used in the html img src
          }
        ],
      };

      transporter.sendMail(mailOptions).then(() => {
        console.log(`Email sent to: ${email}`);
      }).catch(err => {
        console.error(`Failed to send email to ${email}:`, err);
      });
    } else {
      console.warn('Email credentials missing. Logged email but skipped sending.');
    }
  } catch (err) {
    console.error('Error in waitlist processing:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.get('/', (req, res) => {
  res.send('Antares Web Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
