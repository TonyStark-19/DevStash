// import resources
const frontendResources = require("./Resources/Frontend");
const backendResources = require("./Resources/Backend");
const databaseResources = require("./Resources/Database");
const devopsResources = require("./Resources/Devops");
const cloudHostingResources = require("./Resources/Cloud");
const programmingLanguagesResources = require("./Resources/Programming");

// import transform Resources
const { transformResources } = require("./utils/transformResources");

// all resources
const allResources = [
    ...transformResources("Frontend", frontendResources),
    ...transformResources("Backend", backendResources),
    ...transformResources("Databases", databaseResources),
    ...transformResources("Programming", programmingLanguagesResources),
    ...transformResources("DevOps", devopsResources),
    ...transformResources("Cloud", cloudHostingResources),
];

// export allResources
module.exports = allResources;