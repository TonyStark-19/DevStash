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

        // Update user document to remove the saved resource
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            {
                // Update user document to remove the saved resource
                $pull: {
                    savedResources: { resourceId, type, itemId }
                }
            },
            { new: true }
        );

        res.json({ success: true, savedResources: updatedUser.savedResources });
    } catch (err) {
        res.status(500).json({ message: "Error unsaving resource" });
    }
});

/**
 * Get all saved resources for a user
 */
router.get("/saved", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user.savedResources.length) return res.json([]);

        // Get unique resource IDs to minimize DB calls
        const resourceIds = [...new Set(user.savedResources.map(sr => sr.resourceId))];
        const allParentResources = await Resource.find({ _id: { $in: resourceIds } });

        // Hydrate saved resources with actual data
        const hydratedResources = user.savedResources.map(sr => {
            const parent = allParentResources.find(p => p._id.toString() === sr.resourceId.toString());
            if (!parent) return null;

            // Get the actual item
            const item = parent.resources[sr.type].id(sr.itemId);
            if (!item) return null;

            // Combine data
            return {
                ...item.toObject(),
                type: sr.type,
                category: parent.category,
                subcategory: parent.subcategory,
                resourceId: sr.resourceId,
                itemId: sr.itemId
            };
        }).filter(Boolean); // Remove nulls if a parent or item was deleted

        res.json(hydratedResources);
    } catch (err) {
        res.status(500).json({ message: "Error fetching saved resources" });
    }
});

// export router
module.exports = router;