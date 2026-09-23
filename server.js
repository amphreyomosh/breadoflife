import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Serve static files from root directory with .html extension support
app.use(express.static(__dirname, { extensions: ['html'] }));

// Route alias for spiritual-direction (with hyphen or underscore)
app.get(['/spiritual-direction', '/spiritual-direction.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'spiritual_direction.html'));
});

// Route alias for our-donors
app.get(['/our-donors', '/our-donors.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'our-donors.html'));
});

// Route alias for ways-to-give / donate
app.get(['/ways-to-give', '/ways-to-give.html', '/donate', '/donate.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'donate.html'));
});

// Serve index.html on root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Bread of Life server running at http://${HOST}:${PORT}`);
});
