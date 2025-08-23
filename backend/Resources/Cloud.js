// cloud and hosting resourecs
const cloudHostingResources = {
    AWS: {
        docsResources: [
            {
                id: 1,
                title: "AWS Documentation",
                description: "Official documentation for Amazon Web Services.",
                image: "/images/cloud/aws.svg",
                tags: ["aws", "cloud", "services"],
                link: "https://docs.aws.amazon.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "AWS Full Course",
                description: "FreeCodeCamp AWS tutorial for beginners.",
                image: "/images/cloud/aws.svg",
                tags: ["aws", "cloud", "tutorial"],
                link: "https://youtu.be/SOTamWNgDKc"
            }
        ]
    },

    "Microsoft Azure": {
        docsResources: [
            {
                id: 1,
                title: "Azure Documentation",
                description: "Official Microsoft Azure cloud platform documentation.",
                image: "/images/cloud/azure.svg",
                tags: ["azure", "cloud", "microsoft"],
                link: "https://learn.microsoft.com/en-us/azure/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Azure Full Course",
                description: "Azure cloud services tutorial for beginners.",
                image: "/images/cloud/azure.svg",
                tags: ["azure", "cloud", "tutorial"],
                link: "https://youtu.be/5sH8yAKXn34"
            }
        ]
    },

    "Google Cloud": {
        docsResources: [
            {
                id: 1,
                title: "Google Cloud Docs",
                description: "Official Google Cloud documentation and guides.",
                image: "/images/cloud/gcp.svg",
                tags: ["gcp", "google", "cloud"],
                link: "https://cloud.google.com/docs"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Google Cloud Tutorial",
                description: "Google Cloud crash course for beginners.",
                image: "/images/cloud/gcp.svg",
                tags: ["gcp", "google", "tutorial"],
                link: "https://youtu.be/1S0aBV-Waeo"
            }
        ]
    },

    Vercel: {
        docsResources: [
            {
                id: 1,
                title: "Vercel Documentation",
                description: "Official docs for deploying with Vercel.",
                image: "/images/cloud/vercel.svg",
                tags: ["vercel", "deployment", "hosting"],
                link: "https://vercel.com/docs"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Deploying on Vercel",
                description: "Learn how to deploy projects using Vercel.",
                image: "/images/cloud/vercel.svg",
                tags: ["vercel", "deployment", "hosting"],
                link: "https://youtu.be/8J-0J2qUQkg"
            }
        ]
    },

    Heroku: {
        docsResources: [
            {
                id: 1,
                title: "Heroku Dev Center",
                description: "Official Heroku documentation and guides.",
                image: "/images/cloud/heroku.svg",
                tags: ["heroku", "hosting", "deployment"],
                link: "https://devcenter.heroku.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Heroku Tutorial for Beginners",
                description: "Learn to deploy apps on Heroku.",
                image: "/images/cloud/heroku.svg",
                tags: ["heroku", "deployment", "cloud"],
                link: "https://youtu.be/QTOkqzCTGxw"
            }
        ]
    }
};

// export cloud and hosting resourecs
module.exports = cloudHostingResources;