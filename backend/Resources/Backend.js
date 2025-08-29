// backend resources
const backendResources = {
    nodejs: {
        docsResources: [
            {
                id: 1,
                title: "Node.js Official Docs",
                description: "Comprehensive Node.js documentation with API references, guides, and best practices.",
                image: "/images/backend/Node.js.svg",
                tags: ["nodejs", "backend", "official", "docs"],
                link: "https://nodejs.org/en/docs/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Node.js Crash Course - Traversy Media",
                description: "A crash course covering the fundamentals of Node.js, including modules, file system, and server basics.",
                image: "/images/backend/Node.js.svg",
                tags: ["nodejs", "beginner", "crash-course"],
                link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
            },
            {
                id: 2,
                title: "Node.js Tutorial in Hindi - Code with Harry",
                description: "Beginner-friendly Node.js tutorial in Hindi, covering server-side development step by step.",
                image: "/images/backend/Node.js.svg",
                tags: ["nodejs", "beginner", "curated", "hindi"],
                link: "https://youtu.be/BLl32FvcdVM?si=49Im1hjell3zlKcU",
            },
        ],
    },

    express: {
        docsResources: [
            {
                id: 1,
                title: "Express.js Official Docs",
                description: "Official documentation for Express.js, a fast and minimalist web framework for Node.js.",
                image: "/images/backend/Express.svg",
                tags: ["express", "nodejs", "backend", "official", "docs"],
                link: "https://expressjs.com/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Express.js Crash Course - Traversy Media",
                description: "Learn the basics of Express.js including routing, middleware, and server setup.",
                image: "/images/backend/Express.svg",
                tags: ["express", "nodejs", "beginner", "crash-course"],
                link: "https://www.youtube.com/watch?v=L72fhGm1tfE",
            },
            {
                id: 2,
                title: "Express.js Tutorial in Hindi - Code with Harry",
                description: "Step-by-step Express.js tutorial in Hindi, ideal for beginners learning backend development.",
                image: "/images/backend/Express.svg",
                tags: ["express", "nodejs", "tutorial", "curated", "hindi"],
                link: "https://youtu.be/7H_QH9nipNs?si=hjLfe33K3c5bYYY5",
            },
        ],
    },

    django: {
        docsResources: [
            {
                id: 1,
                title: "Django Official Docs",
                description: "Extensive Django documentation covering models, views, templates, and REST integration.",
                image: "/images/backend/Django.svg",
                tags: ["django", "python", "backend", "official", "docs"],
                link: "https://docs.djangoproject.com/en/stable/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Django Tutorial for Beginners - Programming with Mosh",
                description: "Beginner-friendly Django tutorial to build dynamic web applications step by step.",
                image: "/images/backend/Django.svg",
                tags: ["django", "python", "backend", "beginner", "course"],
                link: "https://www.youtube.com/watch?v=rHux0gMZ3Eg",
            },
        ],
    },

    flask: {
        docsResources: [
            {
                id: 1,
                title: "Flask Official Docs",
                description: "Flask documentation with tutorials, quickstart guides, and API references.",
                image: "/images/backend/Flask.svg",
                tags: ["flask", "python", "backend", "official", "docs"],
                link: "https://flask.palletsprojects.com/en/stable/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Flask Tutorial - Corey Schafer",
                description: "Beginner-friendly Flask tutorial covering routing, templates, and web development fundamentals.",
                image: "/images/backend/Flask.svg",
                tags: ["flask", "python", "backend", "course"],
                link: "https://www.youtube.com/watch?v=MwZwr5Tvyxo",
            },
        ],
    },

    rubyonrails: {
        docsResources: [
            {
                id: 1,
                title: "Ruby on Rails Official Guides",
                description: "Guides and documentation for Ruby on Rails covering models, controllers, and deployment.",
                image: "/images/backend/RubyOnRails.svg",
                tags: ["rails", "ruby", "backend", "official", "docs"],
                link: "https://guides.rubyonrails.org/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Ruby on Rails Full Course - FreeCodeCamp",
                description: "Learn Ruby on Rails from scratch with hands-on examples and projects.",
                image: "/images/backend/RubyOnRails.svg",
                tags: ["rails", "ruby", "backend", "course"],
                link: "https://www.youtube.com/watch?v=fmyvWz5TUWg",
            },
        ],
    },

    laravel: {
        docsResources: [
            {
                id: 1,
                title: "Laravel Official Docs",
                description: "Official Laravel documentation with guides on routing, authentication, and APIs.",
                image: "/images/backend/Laravel.svg",
                tags: ["laravel", "php", "backend", "official", "docs"],
                link: "https://laravel.com/docs",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Laravel Tutorial for Beginners - Code With Dary",
                description: "Beginner-friendly Laravel tutorial covering fundamentals of PHP backend development.",
                image: "/images/backend/Laravel.svg",
                tags: ["laravel", "php", "backend", "beginner", "tutorial"],
                link: "https://www.youtube.com/watch?v=ImtZ5yENzgE",
            },
        ],
    },

    fastapi: {
        docsResources: [
            {
                id: 1,
                title: "FastAPI Official Docs",
                description: "FastAPI documentation covering async APIs, data validation, and performance optimization.",
                image: "/images/backend/FastAPI.svg",
                tags: ["fastapi", "python", "backend", "official", "docs"],
                link: "https://fastapi.tiangolo.com/",
            },
        ],
        youtubeResources: [
            {
                id: 1,
                title: "FastAPI Full Course - FreeCodeCamp",
                description: "Comprehensive FastAPI course teaching REST APIs, async support, and integrations.",
                image: "/images/backend/FastAPI.svg",
                tags: ["fastapi", "python", "backend", "course"],
                link: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
            },
        ],
    },
};

// export backend resources
module.exports = backendResources;