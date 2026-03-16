const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Log directory for waitlist
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const logEntry = `${new Date().toISOString()} - ${email}\n`;
  fs.appendFile(path.join(LOG_DIR, 'waitlist.txt'), logEntry, (err) => {
    if (err) {
      console.error('Error saving email:', err);
      return res.status(500).json({ error: 'Failed to save email' });
    }
    console.log(`New waitlist entry: ${email}`);
    res.status(200).json({ message: 'Success! You are on the list.' });
  });
});

app.get('/', (req, res) => {
  res.send('Antares Web Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
