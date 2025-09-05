// for inserting base data into DB

// import mogoose, resource model, all resources and dotenv
const mongoose = require("mongoose");
const Resource = require("../models/Resource");
const allResources = require("../allResources");
const dotenv = require("dotenv");

// use .env variables
dotenv.config();

// connect mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("DB connected ✅");

        await Resource.deleteMany();
        await Resource.insertMany(allResources);

        console.log("Resources inserted 🚀");
        process.exit();
    })
    .catch(err => console.error(err));