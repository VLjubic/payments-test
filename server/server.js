const express = require('express');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '/client')));

// Fallback route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
