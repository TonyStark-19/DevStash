// frontend resources
const frontendResources = {
    html: {
        docsResources: [
            {
                id: 1,
                title: "MDN HTML Docs",
                description: "The official Mozilla Developer Network documentation for HTML, covering all elements and attributes.",
                image: "/images/frontend/HTML5.svg",
                tags: ["html", "documentation", "official", "curated"],
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "HTML Full Course – FreeCodeCamp",
                description: "A complete beginner-friendly HTML course that covers all the fundamentals.",
                image: "/images/frontend/HTML5.svg",
                tags: ["html", "beginner", "course"],
                link: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
            },
            {
                id: 2,
                title: "HTML Tutorial – Apna College",
                description: "Step-by-step HTML tutorial in Hindi, perfect for beginners.",
                image: "/images/frontend/HTML5.svg",
                tags: ["html", "tutorial", "beginner", "curated", "hindi"],
                link: "https://youtu.be/HcOc7P5BMi4?si=FTSyaDGhykIKNWN8",
            },
        ],
    },

    css: {
        docsResources: [
            {
                id: 1,
                title: "MDN CSS Docs",
                description: "The official Mozilla Developer Network documentation for CSS, covering syntax, selectors, and properties.",
                image: "/images/frontend/CSS3.svg",
                tags: ["css", "documentation", "official", "curated"],
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "CSS Crash Course – Traversy Media",
                description: "A beginner-friendly crash course covering CSS basics, selectors, and layout techniques.",
                image: "/images/frontend/CSS3.svg",
                tags: ["css", "beginner", "course"],
                link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
            },
            {
                id: 2,
                title: "CSS Tutorial – Apna College",
                description: "CSS basics explained in Hindi with examples. Beginner-friendly.",
                image: "/images/frontend/CSS3.svg",
                tags: ["css", "tutorial", "beginner", "curated", "hindi"],
                link: "https://youtu.be/ESnrn1kAD4E?si=SpaASNlCBur8GWSR",
            },
        ],
    },

    javascript: {
        docsResources: [
            {
                id: 1,
                title: "MDN JavaScript Docs",
                description: "The official documentation for modern JavaScript, including syntax, built-in objects, and advanced concepts.",
                image: "/images/frontend/JavaScript.svg",
                tags: ["javascript", "documentation", "official", "curated"],
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "JavaScript Tutorial – Apna College",
                description: "A beginner-friendly JavaScript tutorial in Hindi, covering the basics and fundamentals.",
                image: "/images/frontend/JavaScript.svg",
                tags: ["javascript", "tutorial", "beginner", "curated", "hindi"],
                link: "https://youtu.be/VlPiVmYuoqw?si=xjB_3enkWIlUuReX",
            },
        ],
    },

    typescript: {
        docsResources: [
            {
                id: 1,
                title: "TypeScript Docs",
                description: "The official TypeScript documentation and handbook, covering types, interfaces, and advanced features.",
                image: "/images/frontend/TypeScript.svg",
                tags: ["typescript", "documentation", "official"],
                link: "https://www.typescriptlang.org/docs/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "TypeScript Tutorial – FreeCodeCamp",
                description: "A complete beginner course for TypeScript, covering types, interfaces, and practical examples.",
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
                title: "React Docs",
                description: "The official React documentation, covering core concepts, hooks, and best practices.",
                image: "/images/frontend/React.svg",
                tags: ["react", "documentation", "official", "curated"],
                link: "https://react.dev/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "React Tutorial – Code With Harry",
                description: "Beginner-friendly React tutorial in Hindi, focusing on building practical projects.",
                image: "/images/frontend/React.svg",
                tags: ["react", "beginner", "tutorial", "curated", "hindi"],
                link: "https://youtu.be/RGKi6LSPDLU",
            },
        ],
    },

    nextjs: {
        docsResources: [
            {
                id: 1,
                title: "Next.js Docs",
                description: "The official Next.js documentation, covering SSR, routing, and advanced features.",
                image: "/images/frontend/Next.js.svg",
                tags: ["nextjs", "react", "documentation", "official"],
                link: "https://nextjs.org/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Next.js Crash Course – Traversy Media",
                description: "A crash course covering the basics of Next.js, including routing and SSR.",
                image: "/images/frontend/Next.js.svg",
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
                description: "The official Vue.js documentation, covering reactivity, components, and the composition API.",
                image: "/images/frontend/Vue.js.svg",
                tags: ["vue", "documentation", "official"],
                link: "https://vuejs.org/guide/introduction.html",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Vue.js Crash Course – Traversy Media",
                description: "A beginner-friendly crash course covering Vue basics and component structure.",
                image: "/images/frontend/Vue.js.svg",
                tags: ["vue", "beginner", "tutorial"],
                link: "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
            },
        ],
    },

    nuxtjs: {
        docsResources: [
            {
                id: 1,
                title: "Nuxt.js Docs",
                description: "The official Nuxt framework documentation for building Vue applications with SSR and routing.",
                image: "/images/frontend/Nuxt.svg",
                tags: ["nuxt", "vue", "documentation", "official"],
                link: "https://nuxt.com/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Nuxt.js Crash Course – Traversy Media",
                description: "A beginner-friendly crash course covering Nuxt basics, SSR, and file-based routing.",
                image: "/images/frontend/Nuxt.svg",
                tags: ["nuxt", "vue", "beginner", "course"],
                link: "https://youtu.be/ltzlhAxJr74?si=uchsZubXxkfLqmi5",
            },
        ],
    },

    angular: {
        docsResources: [
            {
                id: 1,
                title: "Angular Docs",
                description: "The official Angular documentation, covering components, directives, and advanced concepts.",
                image: "/images/frontend/Angular.svg",
                tags: ["angular", "documentation", "official"],
                link: "https://angular.io/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Angular Crash Course – Traversy Media",
                description: "A crash course covering Angular basics with practical examples.",
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
                description: "The official Svelte documentation, covering reactivity, components, and the compiler.",
                image: "/images/frontend/Svelte.svg",
                tags: ["svelte", "documentation", "official"],
                link: "https://svelte.dev/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Svelte Crash Course – Traversy Media",
                description: "A beginner-friendly crash course for Svelte, covering basics with examples.",
                image: "/images/frontend/Svelte.svg",
                tags: ["svelte", "tutorial", "beginner"],
                link: "https://youtu.be/3TVy6GdtNuQ?si=PwRwmCOPSm8VWqkq",
            },
        ],
    },

    bootstrap: {
        docsResources: [
            {
                id: 1,
                title: "Bootstrap Docs",
                description: "The official Bootstrap 5 documentation for responsive design and UI components.",
                image: "/images/frontend/Bootstrap.svg",
                tags: ["bootstrap", "css", "documentation", "official"],
                link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Bootstrap Crash Course – Traversy Media",
                description: "A beginner-friendly crash course covering Bootstrap 5 grid, utilities, and components.",
                image: "/images/frontend/Bootstrap.svg",
                tags: ["bootstrap", "css", "tutorial", "course"],
                link: "https://www.youtube.com/watch?v=4sosXZsdy-s",
            },
            {
                id: 2,
                title: "Bootstrap Tutorial – Code With Harry",
                description: "Bootstrap 5 tutorial in Hindi, beginner-friendly with projects.",
                image: "/images/frontend/Bootstrap.svg",
                tags: ["bootstrap", "css", "tutorial", "hindi", "curated"],
                link: "https://youtu.be/vpAJ0s5S2t0?si=P5MNSzp-yBqKBf7O",
            },
        ],
    },

    tailwind: {
        docsResources: [
            {
                id: 1,
                title: "Tailwind CSS Docs",
                description: "The official Tailwind CSS documentation, covering utility-first classes and customization.",
                image: "/images/frontend/Tailwind.svg",
                tags: ["tailwind", "css", "documentation", "official"],
                link: "https://tailwindcss.com/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Tailwind CSS Tutorial – Net Ninja",
                description: "Complete beginner-friendly Tailwind CSS tutorial series.",
                image: "/images/frontend/Tailwind.svg",
                tags: ["tailwind", "css", "tutorial", "beginner"],
                link: "https://www.youtube.com/watch?v=UBOj6rqRUME",
            },
        ],
    },

    materialui: {
        docsResources: [
            {
                id: 1,
                title: "Material UI Docs",
                description: "The official documentation for Material UI, React components for modern responsive design.",
                image: "/images/frontend/MaterialUI.svg",
                tags: ["materialui", "react", "documentation", "official"],
                link: "https://mui.com/material-ui/getting-started/overview/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Material UI Crash Course – Traversy Media",
                description: "A beginner-friendly crash course for using Material UI with React.",
                image: "/images/frontend/MaterialUI.svg",
                tags: ["materialui", "react", "tutorial", "beginner"],
                link: "https://www.youtube.com/watch?v=vyJU9efvUtQ",
            },
        ],
    },
};

// export frontend resources
module.exports = frontendResources;