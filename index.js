const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Stay hungry, stay foolish. - Steve Wozniak"
];

// Counter state
let counter = 0;

// Get random quote
app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// Get counter
app.get('/api/counter', (req, res) => {
  res.json({ counter });
});

// Increment counter
app.post('/api/counter/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Decrement counter
app.post('/api/counter/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});