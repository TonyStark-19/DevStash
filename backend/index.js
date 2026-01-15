// import express, mongoose, cors and dotenv
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// import all resources, resource routes
const Resource = require("./models/Resource");
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

// GET all unique categories and subcategories from the DATABASE
app.get("/api/allresources", async (req, res) => {
    try {
        // This fetches from MongoDB so it includes community contributions
        const resources = await Resource.find({}, {
            category: 1,
            subcategory: 1, "resources.docs.src": 1, "resources.docs.name": 1
        });
        res.json(resources);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch aggregated resources" });
    }
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