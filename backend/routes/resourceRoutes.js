// import express, user and auth middleware
const express = require("express");
const User = require("../models/User")
const { protect } = require("../middleware/authMiddleware")

// router
const router = express.Router();

// Save a resource
router.post("/save/:resourceId", protect, async (req, res) => {
    try {
        const userId = req.user.id; // assuming auth middleware sets req.user
        const { resourceId } = req.params;

        const user = await User.findById(userId);

        if (!user.savedResources.includes(resourceId)) {
            user.savedResources.push(resourceId);
            await user.save();
        }

        res.json({ success: true, savedResources: user.savedResources });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Unsave a resource
router.post("/unsave/:resourceId", protect, async (req, res) => {
    try {
        const userId = req.user.id;
        const { resourceId } = req.params;

        const user = await User.findById(userId);

        user.savedResources = user.savedResources.filter(
            (id) => id.toString() !== resourceId
        );

        await user.save();

        res.json({ success: true, savedResources: user.savedResources });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// get saved resources
router.get("/saved", protect, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).populate("savedResources");
        res.json(user.savedResources);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// export router
module.exports = router;