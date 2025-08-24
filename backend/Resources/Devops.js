// devops and version control resourecs
const devopsResources = {
    Git: {
        docsResources: [
            {
                id: 1,
                title: "Pro Git Book",
                description: "Comprehensive guide to Git by Scott Chacon and Ben Straub.",
                image: "/images/VersionControlAndDevOps/Git.svg",
                tags: ["git", "version-control", "book"],
                link: "https://git-scm.com/book/en/v2"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Git & GitHub Crash Course",
                description: "FreeCodeCamp crash course for Git & GitHub basics.",
                image: "/images/VersionControlAndDevOps/Git.svg",
                tags: ["git", "github", "beginner"],
                link: "https://youtu.be/RGOj5yH7evk"
            }
        ]
    },

    GitHub: {
        docsResources: [
            {
                id: 1,
                title: "GitHub Docs",
                description: "Official documentation for GitHub features and workflows.",
                image: "/images/VersionControlAndDevOps/GitHub.svg",
                tags: ["github", "docs", "official"],
                link: "https://docs.github.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "GitHub Tutorial for Beginners",
                description: "Step-by-step GitHub guide for collaboration and projects.",
                image: "/images/VersionControlAndDevOps/GitHub.svg",
                tags: ["github", "tutorial", "beginner"],
                link: "https://youtu.be/nhNq2kIvi9s"
            }
        ]
    },

    GitLab: {
        docsResources: [
            {
                id: 1,
                title: "GitLab Docs",
                description: "Official GitLab documentation for DevOps lifecycle.",
                image: "/images/VersionControlAndDevOps/GitLab.svg",
                tags: ["gitlab", "ci/cd", "official"],
                link: "https://docs.gitlab.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "GitLab CI/CD Tutorial",
                description: "Learn GitLab CI/CD pipelines for DevOps automation.",
                image: "/images/VersionControlAndDevOps/GitLab.svg",
                tags: ["gitlab", "cicd", "devops"],
                link: "https://youtu.be/qP8kir2GUgo"
            }
        ]
    },

    Docker: {
        docsResources: [
            {
                id: 1,
                title: "Docker Official Docs",
                description: "Official documentation for Docker containers.",
                image: "/images/VersionControlAndDevOps/Docker.svg",
                tags: ["docker", "containers", "official"],
                link: "https://docs.docker.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Docker Tutorial for Beginners",
                description: "Docker crash course to learn containers.",
                image: "/images/VersionControlAndDevOps/Docker.svg",
                tags: ["docker", "containers", "tutorial"],
                link: "https://youtu.be/pTFZFxd4hOI"
            }
        ]
    },

    Kubernetes: {
        docsResources: [
            {
                id: 1,
                title: "Kubernetes Docs",
                description: "Official documentation for Kubernetes orchestration.",
                image: "/images/VersionControlAndDevOps/Kubernetes.svg",
                tags: ["kubernetes", "orchestration", "official"],
                link: "https://kubernetes.io/docs/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Kubernetes Tutorial for Beginners",
                description: "Learn Kubernetes orchestration step by step.",
                image: "/images/VersionControlAndDevOps/Kubernetes.svg",
                tags: ["kubernetes", "containers", "beginner"],
                link: "https://youtu.be/X48VuDVv0do"
            }
        ]
    },

    Jenkins: {
        docsResources: [
            {
                id: 1,
                title: "Jenkins Official Docs",
                description: "Documentation for Jenkins automation server.",
                image: "/images/VersionControlAndDevOps/Jenkins.svg",
                tags: ["jenkins", "cicd", "automation"],
                link: "https://www.jenkins.io/doc/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Jenkins Full Course",
                description: "Jenkins CI/CD tutorial for beginners.",
                image: "/images/VersionControlAndDevOps/Jenkins.svg",
                tags: ["jenkins", "devops", "cicd"],
                link: "https://youtu.be/6YZvp2GwT0A"
            }
        ]
    }
};

// export devops and version control resourecs
module.exports = devopsResources;