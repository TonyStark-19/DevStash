// import express, mongoose, cors and dotenv
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// use .env variables
dotenv.config();

// port
const PORT = process.env.PORT || 3000;

// initialise app
const app = express();

// use cors
app.use(cors());

// POST requests
app.use(express.json());

// auth routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// import resources
const resources = require("./resource");

// GET request to send all resources
app.get("/resources", (req, res) => {
    res.json(resources);
});

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error("❌ MongoDB connection failed:", err.message);
    });