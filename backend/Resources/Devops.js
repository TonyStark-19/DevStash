// devops and version control resources
const devopsResources = {
    Git: {
        docsResources: [
            {
                id: 1,
                title: "Pro Git Book",
                description: "Comprehensive guide to Git by Scott Chacon and Ben Straub, covering beginner to advanced topics.",
                image: "/images/VersionControlAndDevOps/Git.svg",
                tags: ["git", "version-control", "book", "official"],
                link: "https://git-scm.com/book/en/v2"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Git & GitHub Crash Course - freeCodeCamp",
                description: "Beginner-friendly crash course on Git and GitHub workflows.",
                image: "/images/VersionControlAndDevOps/Git.svg",
                tags: ["git", "github", "version-control", "beginner", "tutorial"],
                link: "https://youtu.be/RGOj5yH7evk"
            },
            {
                id: 2,
                title: "Git & GitHub Tutorial - Apna College",
                description: "Beginner-friendly tutorial in Hindi explaining Git and GitHub basics for collaboration.",
                image: "/images/VersionControlAndDevOps/Git.svg",
                tags: ["git", "github", "version-control", "beginner", "tutorial", "curated"],
                link: "https://youtu.be/Ez8F0nW6S-w?si=SF5rJgRlsLnrBNY5"
            }
        ]
    },

    GitHub: {
        docsResources: [
            {
                id: 1,
                title: "GitHub Docs",
                description: "Official GitHub documentation for repositories, collaboration, and workflows.",
                image: "/images/VersionControlAndDevOps/GitHub.svg",
                tags: ["github", "version-control", "docs", "official"],
                link: "https://docs.github.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "GitHub Tutorial for Beginners",
                description: "Step-by-step GitHub tutorial for beginners covering repositories and collaboration.",
                image: "/images/VersionControlAndDevOps/GitHub.svg",
                tags: ["github", "version-control", "tutorial", "beginner"],
                link: "https://youtu.be/nhNq2kIvi9s"
            }
        ]
    },

    GitLab: {
        docsResources: [
            {
                id: 1,
                title: "GitLab Docs",
                description: "Official GitLab documentation covering repositories, CI/CD, and DevOps lifecycle.",
                image: "/images/VersionControlAndDevOps/GitLab.svg",
                tags: ["gitlab", "ci/cd", "devops", "docs", "official"],
                link: "https://docs.gitlab.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "GitLab CI/CD Tutorial",
                description: "Beginner-friendly guide to GitLab CI/CD pipelines and DevOps automation.",
                image: "/images/VersionControlAndDevOps/GitLab.svg",
                tags: ["gitlab", "ci/cd", "devops", "tutorial", "beginner"],
                link: "https://youtu.be/qP8kir2GUgo"
            }
        ]
    },

    Docker: {
        docsResources: [
            {
                id: 1,
                title: "Docker Official Docs",
                description: "Official Docker documentation covering containers, images, and deployments.",
                image: "/images/VersionControlAndDevOps/Docker.svg",
                tags: ["docker", "containers", "docs", "official"],
                link: "https://docs.docker.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Docker Tutorial for Beginners",
                description: "Beginner crash course to learn Docker containers, images, and basic workflows.",
                image: "/images/VersionControlAndDevOps/Docker.svg",
                tags: ["docker", "containers", "tutorial", "beginner"],
                link: "https://youtu.be/pTFZFxd4hOI"
            },
            {
                id: 2,
                title: "Docker Tutorial - Apna College",
                description: "Beginner-friendly Docker tutorial in Hindi with practical examples.",
                image: "/images/VersionControlAndDevOps/Docker.svg",
                tags: ["docker", "containers", "tutorial", "beginner", "curated"],
                link: "https://youtu.be/exmSJpJvIPs?si=bhHZT2kPCbP115o7"
            }
        ]
    },

    Kubernetes: {
        docsResources: [
            {
                id: 1,
                title: "Kubernetes Official Docs",
                description: "Official documentation for Kubernetes container orchestration and scaling.",
                image: "/images/VersionControlAndDevOps/Kubernetes.svg",
                tags: ["kubernetes", "orchestration", "containers", "docs", "official"],
                link: "https://kubernetes.io/docs/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Kubernetes Tutorial for Beginners",
                description: "Step-by-step Kubernetes tutorial for beginners to learn orchestration basics.",
                image: "/images/VersionControlAndDevOps/Kubernetes.svg",
                tags: ["kubernetes", "containers", "orchestration", "tutorial", "beginner"],
                link: "https://youtu.be/X48VuDVv0do"
            }
        ]
    },

    Jenkins: {
        docsResources: [
            {
                id: 1,
                title: "Jenkins Official Docs",
                description: "Official documentation for Jenkins automation server and CI/CD pipelines.",
                image: "/images/VersionControlAndDevOps/Jenkins.svg",
                tags: ["jenkins", "automation", "ci/cd", "docs", "official"],
                link: "https://www.jenkins.io/doc/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Jenkins Full Course",
                description: "Complete Jenkins course for beginners covering automation and CI/CD pipelines.",
                image: "/images/VersionControlAndDevOps/Jenkins.svg",
                tags: ["jenkins", "ci/cd", "devops", "course", "beginner"],
                link: "https://youtu.be/6YZvp2GwT0A"
            }
        ]
    }
};

// export devops and version control resources
module.exports = devopsResources;