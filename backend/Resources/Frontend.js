// frontend resourecs
const frontendResources = {
    html: {
        docsResources: [
            {
                id: 1,
                title: "HTML Living Standard (WHATWG)",
                description: "The official HTML specification maintained by WHATWG.",
                image: "/images/frontend/HTML.svg",
                tags: ["documentation", "official", "html"],
                link: "https://html.spec.whatwg.org/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "HTML Full Course - FreeCodeCamp",
                description: "A beginner-friendly full HTML course.",
                image: "/images/frontend/HTML.svg",
                tags: ["html", "beginner", "course"],
                link: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
            },
        ],
    },

    css: {
        docsResources: [
            {
                id: 1,
                title: "MDN CSS Docs",
                description: "Comprehensive CSS documentation from Mozilla.",
                image: "/images/frontend/CSS.svg",
                tags: ["css", "documentation", "official"],
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "CSS Crash Course - Traversy Media",
                description: "Learn CSS from scratch in one crash course.",
                image: "/images/frontend/CSS.svg",
                tags: ["css", "beginner", "course"],
                link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
            },
        ],
    },

    javascript: {
        docsResources: [
            {
                id: 1,
                title: "MDN JavaScript Docs",
                description: "The go-to documentation for modern JavaScript.",
                image: "/images/frontend/JavaScript.svg",
                tags: ["javascript", "docs", "official"],
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "JavaScript Full Course - Programming with Mosh",
                description: "Modern JavaScript explained for beginners.",
                image: "/images/frontend/JavaScript.svg",
                tags: ["javascript", "beginner", "course"],
                link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
            },
        ],
    },

    typescript: {
        docsResources: [
            {
                id: 1,
                title: "TypeScript Docs",
                description: "Official TypeScript documentation and handbook.",
                image: "/images/frontend/TypeScript.svg",
                tags: ["typescript", "docs", "official"],
                link: "https://www.typescriptlang.org/docs/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "TypeScript Tutorial - FreeCodeCamp",
                description: "Learn TypeScript step by step in this beginner course.",
                image: "/images/frontend/TypeScript.svg",
                tags: ["typescript", "beginner", "course"],
                link: "https://www.youtube.com/watch?v=30LWjhZzg50",
            },
        ],
    },

    react: {
        docsResources: [
            {
                id: 1,
                title: "React Official Docs",
                description: "The official React documentation covering fundamentals, hooks, and advanced concepts.",
                image: "/images/frontend/React.svg",
                tags: ["react", "docs", "official"],
                link: "https://react.dev/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "React Tutorial - Code With Harry",
                description: "Beginner-friendly React tutorial in Hindi for building projects.",
                image: "/images/frontend/React.svg",
                tags: ["react", "beginner", "tutorial", "hindi"],
                link: "https://youtu.be/RGKi6LSPDLU",
            },
        ],
    },

    nextjs: {
        docsResources: [
            {
                id: 1,
                title: "Next.js Docs",
                description: "The official Next.js documentation and guides.",
                image: "/images/frontend/NextJS.svg",
                tags: ["nextjs", "react", "docs"],
                link: "https://nextjs.org/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Next.js Crash Course - Traversy Media",
                description: "Learn Next.js basics and routing in one video.",
                image: "/images/frontend/NextJS.svg",
                tags: ["nextjs", "react", "course"],
                link: "https://www.youtube.com/watch?v=mTz0GXj8NN0",
            },
        ],
    },

    vue: {
        docsResources: [
            {
                id: 1,
                title: "Vue.js Docs",
                description: "The official Vue.js documentation.",
                image: "/images/frontend/VueJS.svg",
                tags: ["vue", "docs", "official"],
                link: "https://vuejs.org/guide/introduction.html",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Vue.js Crash Course - Traversy Media",
                description: "Learn Vue basics with this crash course.",
                image: "/images/frontend/VueJS.svg",
                tags: ["vue", "beginner", "tutorial"],
                link: "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
            },
        ],
    },

    nuxtjs: {
        docsResources: [
            {
                id: 1,
                title: "Nuxt Docs",
                description: "The official Nuxt framework documentation.",
                image: "/images/frontend/NuxtJS.svg",
                tags: ["nuxt", "vue", "docs"],
                link: "https://nuxt.com/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Nuxt 3 Tutorial for Beginners",
                description: "Step by step Nuxt 3 beginner course.",
                image: "/images/frontend/NuxtJS.svg",
                tags: ["nuxt", "vue", "beginner"],
                link: "https://www.youtube.com/watch?v=UZX5kH72Yx4",
            },
        ],
    },

    angular: {
        docsResources: [
            {
                id: 1,
                title: "Angular Docs",
                description: "Official Angular framework documentation.",
                image: "/images/frontend/Angular.svg",
                tags: ["angular", "docs", "official"],
                link: "https://angular.io/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Angular Crash Course - Traversy Media",
                description: "Angular basics tutorial with practical examples.",
                image: "/images/frontend/Angular.svg",
                tags: ["angular", "beginner", "tutorial"],
                link: "https://www.youtube.com/watch?v=3qBXWUpoPHo",
            },
        ],
    },

    svelte: {
        docsResources: [
            {
                id: 1,
                title: "Svelte Docs",
                description: "The official Svelte documentation.",
                image: "/images/frontend/Svelte.svg",
                tags: ["svelte", "docs", "official"],
                link: "https://svelte.dev/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Svelte Tutorial - Net Ninja",
                description: "Learn Svelte step by step with Net Ninja.",
                image: "/images/frontend/Svelte.svg",
                tags: ["svelte", "tutorial", "beginner"],
                link: "https://www.youtube.com/watch?v=zojEMeQGGHs",
            },
        ],
    },

    bootstrap: {
        docsResources: [
            {
                id: 1,
                title: "Bootstrap Docs",
                description: "Official Bootstrap 5 documentation.",
                image: "/images/frontend/Bootstrap.svg",
                tags: ["bootstrap", "docs", "css"],
                link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Bootstrap Crash Course - Traversy Media",
                description: "Learn Bootstrap 5 in one crash course.",
                image: "/images/frontend/Bootstrap.svg",
                tags: ["bootstrap", "css", "tutorial"],
                link: "https://www.youtube.com/watch?v=4sosXZsdy-s",
            },
        ],
    },

    tailwind: {
        docsResources: [
            {
                id: 1,
                title: "Tailwind CSS Docs",
                description: "Utility-first CSS framework documentation.",
                image: "/images/frontend/Tailwind.svg",
                tags: ["tailwind", "css", "docs"],
                link: "https://tailwindcss.com/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Tailwind CSS Tutorial - Net Ninja",
                description: "Complete Tailwind CSS beginner tutorial series.",
                image: "/images/frontend/Tailwind.svg",
                tags: ["tailwind", "css", "tutorial"],
                link: "https://www.youtube.com/watch?v=UBOj6rqRUME",
            },
        ],
    },

    materialui: {
        docsResources: [
            {
                id: 1,
                title: "Material UI Docs",
                description: "React components for faster and easier UI development.",
                image: "/images/frontend/MaterialUI.svg",
                tags: ["materialui", "react", "docs"],
                link: "https://mui.com/material-ui/getting-started/overview/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Material UI Crash Course - Traversy Media",
                description: "Beginner crash course for Material UI with React.",
                image: "/images/frontend/MaterialUI.svg",
                tags: ["materialui", "react", "tutorial"],
                link: "https://www.youtube.com/watch?v=vyJU9efvUtQ",
            },
        ],
    },
};

// export frontend resourecs
module.exports = frontendResources;