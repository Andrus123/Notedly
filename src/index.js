// index.js
// This is the main entry point of our application
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));