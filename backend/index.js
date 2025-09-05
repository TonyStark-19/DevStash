// import express, mongoose, cors and dotenv
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// import all resources, resource routes
const allResources = require("./allResources");
const resourcesRoutes = require("./routes/resource")
const savedResourcesRoutes = require("./routes/resourceRoutes")

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

// resource routes
app.use("/api/resources", resourcesRoutes);

// saved resources
app.use("/api/saved-resources", savedResourcesRoutes);

// import resources
const resources = require("./Resources/resource");

// GET request to send all resources
app.get("/api/allresources", (req, res) => {
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