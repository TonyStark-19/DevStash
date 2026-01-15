// transform resources utility function
function transformResources(category, resourcesObj) {
    return Object.keys(resourcesObj).map((subcategory) => {
        const item = resourcesObj[subcategory];
        return {
            category,
            subcategory,
            resources: {
                // Safely accessing arrays to prevent crashes on undefined data
                docs: item.docsResources && Array.isArray(item.docsResources)
                    ? item.docsResources
                    : [],
                youtube: item.youtubeResources && Array.isArray(item.youtubeResources)
                    ? item.youtubeResources
                    : [],
            },
        };
    });
}

// export transformResources
module.exports = { transformResources };