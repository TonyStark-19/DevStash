// cloud and hosting resources
const cloudHostingResources = {
    AWS: {
        docsResources: [
            {
                id: 1,
                title: "AWS Official Docs",
                description: "Comprehensive documentation for Amazon Web Services including compute, storage, and networking guides.",
                image: "/images/CloudAndHosting/AWS.svg",
                tags: ["aws", "cloud", "backend", "official", "docs"],
                link: "https://docs.aws.amazon.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "AWS Full Course - FreeCodeCamp",
                description: "Beginner-friendly AWS course covering core cloud concepts, EC2, S3, and Lambda.",
                image: "/images/CloudAndHosting/AWS.svg",
                tags: ["aws", "cloud", "beginner", "course"],
                link: "https://youtu.be/SOTamWNgDKc"
            }
        ]
    },

    "Microsoft Azure": {
        docsResources: [
            {
                id: 1,
                title: "Azure Official Docs",
                description: "Microsoft Azure documentation with tutorials and cloud platform references.",
                image: "/images/CloudAndHosting/Azure.svg",
                tags: ["azure", "cloud", "microsoft", "official", "docs"],
                link: "https://learn.microsoft.com/en-us/azure/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Azure Full Course - Edureka",
                description: "Beginner-friendly course introducing Microsoft Azure cloud services and deployments.",
                image: "/images/CloudAndHosting/Azure.svg",
                tags: ["azure", "cloud", "course", "beginner"],
                link: "https://youtu.be/tDuruX7XSac?si=M2E1Bls2_kpH_0VA"
            }
        ]
    },

    "Google Cloud": {
        docsResources: [
            {
                id: 1,
                title: "Google Cloud Official Docs",
                description: "Official Google Cloud Platform documentation including compute, storage, and AI services.",
                image: "/images/CloudAndHosting/GCP.svg",
                tags: ["gcp", "google", "cloud", "official", "docs"],
                link: "https://cloud.google.com/docs"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Google Cloud Full Course - Simplilearn",
                description: "Comprehensive GCP course covering cloud infrastructure, networking, and services.",
                image: "/images/CloudAndHosting/GCP.svg",
                tags: ["gcp", "google", "cloud", "course", "beginner"],
                link: "https://youtu.be/EN4fEbcFZ_E?si=yzDhrVWieooRjmJR"
            }
        ]
    },

    Vercel: {
        docsResources: [
            {
                id: 1,
                title: "Vercel Official Docs",
                description: "Documentation for deploying and scaling applications with Vercel.",
                image: "/images/CloudAndHosting/Vercel.svg",
                tags: ["vercel", "hosting", "deployment", "official", "docs"],
                link: "https://vercel.com/docs"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Vercel Product Walkthrough - Vercel",
                description: "Official walkthrough by Vercel showcasing features, deployments, and workflows.",
                image: "/images/CloudAndHosting/Vercel.svg",
                tags: ["vercel", "hosting", "deployment", "curated"],
                link: "https://youtu.be/sPmat30SE4k?si=QItPLtzhAALy8plV"
            }
        ]
    },

    Heroku: {
        docsResources: [
            {
                id: 1,
                title: "Heroku Official Docs",
                description: "Heroku Dev Center with guides on deploying, scaling, and managing apps.",
                image: "/images/CloudAndHosting/Heroku.svg",
                tags: ["heroku", "cloud", "hosting", "deployment", "official", "docs"],
                link: "https://devcenter.heroku.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Heroku Tutorial for Beginners - ProgrammingKnowledge",
                description: "Beginner-friendly tutorial on deploying and managing applications with Heroku.",
                image: "/images/CloudAndHosting/Heroku.svg",
                tags: ["heroku", "cloud", "hosting", "deployment", "beginner", "tutorial"],
                link: "https://youtu.be/QTOkqzCTGxw"
            }
        ]
    }
};

// export cloud and hosting resources
module.exports = cloudHostingResources;