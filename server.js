const express = require('express');
const app = express();
const port = 3000;

const lessons = [
  { topic: 'math', location: 'Dubai', price: 100 },
  { topic: 'science', location: 'London', price: 80 },
  { topic: 'biology', location: 'Brent Cross', price: 90 },
  { topic: 'web and mobile', location: 'India', price: 120 }
];