// rimport express and resource model
const express = require("express");
const Resource = require("../models/Resource")

// router
const router = express.Router();

router.get("/:subcategory", async (req, res) => {
    try {
        const { subcategory } = req.params;

        const resources = await Resource.findOne({ subcategory });

        // if not found
        if (!resources) {
            return res.status(404).json({ message: "No resources found" });
        }

        res.json(resources);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch resources" });
    }
});

// export router
module.exports = router;