// import mongoose
const { request } = require("express");
const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    savedResources: [
        {
            resourceId: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" }, // parent Resource document
            type: { type: String, enum: ["docs", "youtube"], required: true },     // which type
            itemId: { type: mongoose.Schema.Types.ObjectId, required: true },      // the actual doc/youtube item _id
            savedAt: { type: Date, default: Date.now }
        }
    ]
});

// export schema
module.exports = mongoose.model("DevStash-User", UserSchema);