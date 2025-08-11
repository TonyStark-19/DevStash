// import express and cors
const express = require("express");
const cors = require("cors");

// initialise app
const app = express();

// use cors
app.use(cors());

// import resources
const resources = require("./resource");

// POST requests
app.use(express.json());

// GET request to send all resources
app.get("/resources", (req, res) => {
    res.json(resources);
});

// Set port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});