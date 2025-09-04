// import express, user and auth middleware
const express = require("express");
const User = require("../models/User");
const Resource = require("../models/Resource");
const { protect } = require("../middleware/authMiddleware");

// router
const router = express.Router();

/**
 * Save a specific resource (doc or youtube item)
 * expects body: { type: "docs" | "youtube", itemId: "subdocumentId" }
 */
router.post("/save/:resourceId", protect, async (req, res) => {
    try {
        const { resourceId } = req.params;
        const { type, itemId } = req.body; // frontend sends type + subdocument id
        const userId = req.user.id;

        // Validate
        if (!["docs", "youtube"].includes(type)) {
            return res.status(400).json({ message: "Invalid resource type" });
        }

        // Find the resource and check if the item exists
        const resource = await Resource.findById(resourceId);
        if (!resource) return res.status(404).json({ message: "Resource not found" });

        const item = resource.resources[type].id(itemId);
        if (!item) return res.status(404).json({ message: "Item not found" });

        // Find user
        const user = await User.findById(userId);

        // Prevent duplicates
        const alreadySaved = user.savedResources.some(
            (sr) =>
                sr.resourceId.toString() === resourceId &&
                sr.type === type &&
                sr.itemId.toString() === itemId
        );

        if (alreadySaved) {
            return res.status(400).json({ message: "Already saved" });
        }

        // Add resource reference
        user.savedResources.push({ resourceId, type, itemId });
        await user.save();

        res.json({ message: "Resource saved successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error saving resource" });
    }
});

/**
 * Unsave a specific resource
 */
router.post("/unsave/:resourceId", protect, async (req, res) => {
    try {
        const { resourceId } = req.params;
        const { type, itemId } = req.body;
        const userId = req.user.id;

        const user = await User.findById(userId);

        user.savedResources = user.savedResources.filter(
            (sr) =>
                !(
                    sr.resourceId.toString() === resourceId &&
                    sr.type === type &&
                    sr.itemId.toString() === itemId
                )
        );

        await user.save();

        res.json({ success: true, savedResources: user.savedResources });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error unsaving resource" });
    }
});

/**
 * Get all saved resources for a user
 */
router.get("/saved", protect, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);

        let saved = [];

        for (let sr of user.savedResources) {
            const resource = await Resource.findById(sr.resourceId);
            if (!resource) continue;

            const item = resource.resources[sr.type].id(sr.itemId);
            if (item) {
                saved.push({
                    ...item.toObject(),
                    type: sr.type,
                    category: resource.category,
                    subcategory: resource.subcategory,
                    resourceId: sr.resourceId,
                    itemId: sr.itemId
                });
            }
        }

        res.json(saved);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching saved resources" });
    }
});

// export router
module.exports = router;