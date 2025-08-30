// import express, user and auth middleware
const express = require("express");
const User = require("../models/User");
const Resource = require("../models/Resource");
const { protect } = require("../middleware/authMiddleware");

// import resources data
const resourcesData = require("../resource")

// router
const router = express.Router();

router.use((req, next) => {
    console.log("Hit resources route:", req.method, req.originalUrl);
    next();
});
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

// contribute resource
router.post("/contribute/:category/:subcategory", protect, async (req, res) => {
    try {
        const { category, subcategory } = req.params;
        const { type, title, description, tags, link } = req.body;

        if (!title || !description || !tags || !link || !type) {
            return res.status(400).json({ message: "All fields required" });
        }
        if (tags.length < 2 || tags.length > 4) {
            return res.status(400).json({ message: "Tags must be 2-4" });
        }
        if (!["docs", "youtube"].includes(type)) {
            return res.status(400).json({ message: "Invalid resource type" });
        }

        // Find the resource group (category + subcategory)
        const resourceGroup = await Resource.findOne({
            category: new RegExp(`^${category}$`, "i"),
            subcategory: new RegExp(`^${subcategory}$`, "i"),
        });
        if (!resourceGroup) {
            return res.status(404).json({ message: "Resource group not found" });
        }

        // check for new resource only
        const exists = resourceGroup.resources[type].some(
            (r) => r.link === link
        );
        if (exists) {
            return res.status(400).json({ message: "Resource already exists" });
        }

        let image = "/images/default.png"; // fallback

        if (resourcesData[category]) {
            const match = resourcesData[category].find(
                (r) => r.subcategory.toLowerCase() === subcategory.toLowerCase()
            );
            if (match) image = match.src;
        }

        // New resource object
        const newResource = {
            title,
            description,
            link,
            image,
            tags: [...tags, "contributed"],
        };

        // ✅ Push into correct array
        resourceGroup.resources[type].push(newResource);

        // Save updated group
        await resourceGroup.save();

        // Return the last added resource
        const added = resourceGroup.resources[type][resourceGroup.resources[type].length - 1];

        res.status(201).json({ message: "Resource contributed successfully", resource: added });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

// export router
module.exports = router;