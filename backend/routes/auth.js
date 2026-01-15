// import express, bcrypt, jwt and user
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// import axios for making HTTP requests
const axios = require("axios");

// import google auth library
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// express router
const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // check for empty values
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        // Create token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // check for empty values
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // check for correct password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        // create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Google Login/Signup
router.post("/google", async (req, res) => {
    const { token } = req.body; // Token from frontend

    try {
        // 1. Verify the Google Token
        // Fetch user info using the access token
        const googleResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`);
        const { email, sub: googleId, name, picture } = googleResponse.data;

        // 2. Find or Create the user
        let user = await User.findOne({ email });

        if (!user) {
            // New user via Google
            user = new User({
                email,
                googleId, // Link account to Google ID
                displayName: name,
                avatar: picture,
            });
            await user.save();
        } else if (!user.googleId) {
            // Existing email/password user logging in with Google for the first time
            user.googleId = googleId;
            await user.save();
        }

        // 3. Issue your own system JWT (consistent with your other routes)
        const systemToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ token: systemToken });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Google authentication failed" });
    }
});

// export router
module.exports = router;