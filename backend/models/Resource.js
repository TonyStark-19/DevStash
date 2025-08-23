// import mongoose
const mongoose = require("mongoose");

// resource schema
const resourceSchema = new mongoose.Schema({
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    resources: {
        docs: [
            {
                title: { type: String, required: true },
                description: { type: String },
                image: { type: String },
                link: { type: String },
                tags: [String],
            },
        ],
        youtube: [
            {
                title: { type: String, required: true },
                description: { type: String },
                image: { type: String },
                link: { type: String },
                tags: [String],
            },
        ],
    },
});

// export schema
module.exports = mongoose.model("Resource", resourceSchema);