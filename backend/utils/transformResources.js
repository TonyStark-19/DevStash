// tranform resources to convert resource data into resource schema
function transformResources(category, resourcesObj) {
    return Object.keys(resourcesObj).map((subcategory) => ({
        category,
        subcategory,
        resources: {
            docs: resourcesObj[subcategory].docsResources || [],
            youtube: resourcesObj[subcategory].youtubeResources || [],
        },
    }));
}

// export transformResources
module.exports = { transformResources };