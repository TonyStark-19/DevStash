// import express and resource model
const express = require("express");
const Resource = require("../models/Resource");
const { protect } = require("../middleware/authMiddleware");

// import resources data
const resourcesData = require("../Resources/resource")

// router
const router = express.Router();

// GET resources by category + subcategory
router.get("/:category/:subcategory", async (req, res) => {
    try {
        const { category, subcategory } = req.params;

        // case-insensitive match
        const resourceGroup = await Resource.findOne(
            { category: new RegExp(`^${category}$`, "i"), subcategory: new RegExp(`^${subcategory}$`, "i") },
            { resources: 1, category: 1, subcategory: 1 }
        );

        // if not found
        if (!resourceGroup) {
            return res.status(404).json({ message: "No resources found" });
        }

        res.json(resourceGroup);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch resources" });
    }
});

// ---------------------
// POST contribute (add a resource)
// ---------------------
router.post("/contribute/:category/:subcategory", protect, async (req, res) => {
    try {
        const { category, subcategory } = req.params;
        const { type, title, description, tags, link } = req.body;

        // if any feild is missing
        if (!title || !description || !tags || !link || !type) {
            return res.status(400).json({ message: "All fields required" });
        }

        // tags min and max
        if (tags.length < 2 || tags.length > 4) {
            return res.status(400).json({ message: "Tags must be 2-4" });
        }

        // no resource type selected
        if (!["docs", "youtube"].includes(type)) {
            return res.status(400).json({ message: "Invalid resource type" });
        }

        // Find the resource group (category + subcategory)
        const resourceGroup = await Resource.findOne(
            { category: new RegExp(`^${category}$`, "i"), subcategory: new RegExp(`^${subcategory}$`, "i") },
            { [`resources.${type}`]: 1 } // Only pull the specific array we need
        );

        // if not found
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

        // images for each resource
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
        const updatedDoc = await Resource.findOneAndUpdate(
            { category: new RegExp(`^${category}$`, "i"), subcategory: new RegExp(`^${subcategory}$`, "i") },
            { $push: { [`resources.${type}`]: newResource } },
            { new: true, runValidators: true }
        );

        // Return the last added resource
        const added = updatedDoc.resources[type].slice(-1)[0];

        res.status(201).json({ message: "Resource contributed successfully", resource: added });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

// export router
module.exports = router;