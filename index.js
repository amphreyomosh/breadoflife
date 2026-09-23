const express = require('express');
const path = require('path');
const app = express();

// Serve static assets and HTML pages
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Make sure this line is at the end of the file:
module.exports = app;
