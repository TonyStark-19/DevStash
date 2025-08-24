// backend resourecs
const backendResources = {
    nodejs: {
        docsResources: [
            {
                id: 1,
                title: "Node.js Docs",
                description: "Official Node.js documentation covering APIs and guides.",
                image: "/images/backend/Node.js.svg",
                tags: ["nodejs", "docs", "official"],
                link: "https://nodejs.org/en/docs/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Node.js Crash Course - Traversy Media",
                description: "Learn Node.js fundamentals in this crash course.",
                image: "/images/backend/Node.js.svg",
                tags: ["nodejs", "beginner", "course"],
                link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
            },
        ],
    },

    express: {
        docsResources: [
            {
                id: 1,
                title: "Express Docs",
                description: "Fast, unopinionated, minimalist web framework for Node.js.",
                image: "/images/backend/Express.svg",
                tags: ["express", "nodejs", "docs"],
                link: "https://expressjs.com/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Express.js Crash Course - Traversy Media",
                description: "Learn Express.js basics including routing and middleware.",
                image: "/images/backend/Express.svg",
                tags: ["express", "nodejs", "tutorial"],
                link: "https://www.youtube.com/watch?v=L72fhGm1tfE",
            },
        ],
    },

    django: {
        docsResources: [
            {
                id: 1,
                title: "Django Docs",
                description: "Official Django documentation covering models, views, and templates.",
                image: "/images/backend/Django.svg",
                tags: ["django", "python", "docs"],
                link: "https://docs.djangoproject.com/en/stable/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Django Tutorial for Beginners - Programming with Mosh",
                description: "Step by step Django tutorial for building web apps.",
                image: "/images/backend/Django.svg",
                tags: ["django", "python", "tutorial"],
                link: "https://www.youtube.com/watch?v=rHux0gMZ3Eg",
            },
        ],
    },

    flask: {
        docsResources: [
            {
                id: 1,
                title: "Flask Docs",
                description: "The official Flask documentation with tutorials and API reference.",
                image: "/images/backend/Flask.svg",
                tags: ["flask", "python", "docs"],
                link: "https://flask.palletsprojects.com/en/stable/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Flask Tutorial - Corey Schafer",
                description: "Flask beginner tutorial covering web development fundamentals.",
                image: "/images/backend/Flask.svg",
                tags: ["flask", "python", "course"],
                link: "https://www.youtube.com/watch?v=MwZwr5Tvyxo",
            },
        ],
    },

    rubyonrails: {
        docsResources: [
            {
                id: 1,
                title: "Ruby on Rails Guides",
                description: "Official Ruby on Rails guides and documentation.",
                image: "/images/backend/RubyOnRails.svg",
                tags: ["rails", "ruby", "docs"],
                link: "https://guides.rubyonrails.org/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Ruby on Rails Tutorial - FreeCodeCamp",
                description: "Learn Ruby on Rails framework from scratch.",
                image: "/images/backend/RubyOnRails.svg",
                tags: ["rails", "ruby", "tutorial"],
                link: "https://www.youtube.com/watch?v=fmyvWz5TUWg",
            },
        ],
    },

    laravel: {
        docsResources: [
            {
                id: 1,
                title: "Laravel Docs",
                description: "The official Laravel PHP framework documentation.",
                image: "/images/backend/Laravel.svg",
                tags: ["laravel", "php", "docs"],
                link: "https://laravel.com/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Laravel Tutorial for Beginners - Code With Dary",
                description: "Beginner-friendly tutorial for Laravel framework.",
                image: "/images/backend/Laravel.svg",
                tags: ["laravel", "php", "tutorial"],
                link: "https://www.youtube.com/watch?v=ImtZ5yENzgE",
            },
        ],
    },

    fastapi: {
        docsResources: [
            {
                id: 1,
                title: "FastAPI Docs",
                description: "FastAPI official documentation and tutorials.",
                image: "/images/backend/FastAPI.svg",
                tags: ["fastapi", "python", "docs"],
                link: "https://fastapi.tiangolo.com/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "FastAPI Tutorial - FreeCodeCamp",
                description: "Learn FastAPI with this complete course.",
                image: "/images/backend/FastAPI.svg",
                tags: ["fastapi", "python", "course"],
                link: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
            },
        ],
    },
};

// export backend resourecs
module.exports = backendResources;