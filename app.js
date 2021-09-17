const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/home.html'));
});
app.get("/oleyBirkeland", (req, res) => {
  res.sendFile(path.join(__dirname, '/oleyBirkeland.html'));
});
app.get("/johnEckert", (req, res) => {
  res.sendFile(path.join(__dirname, '/johnEckert.html'));
});
app.get("/jaysinH", (req, res) => {
  res.sendFile(path.join(__dirname, '/jaysinH.html'));
});
app.get("/christianBoldt", (req, res) => {
  res.sendFile(path.join(__dirname, '/christianBoldt.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
