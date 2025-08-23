// database resourecs
const databaseResources = {
    MongoDB: {
        docsResources: [
            {
                id: 1,
                title: "MongoDB Official Docs",
                description: "Comprehensive official documentation for MongoDB.",
                image: "/images/databases/mongodb.svg",
                tags: ["database", "nosql", "official"],
                link: "https://www.mongodb.com/docs/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "MongoDB Tutorial for Beginners",
                description: "Step-by-step beginner tutorial for learning MongoDB.",
                image: "/images/databases/mongodb.svg",
                tags: ["mongodb", "beginner", "tutorial"],
                link: "https://youtu.be/-56x56UppqQ"
            }
        ]
    },

    MySQL: {
        docsResources: [
            {
                id: 1,
                title: "MySQL Official Docs",
                description: "The official documentation for MySQL relational database.",
                image: "/images/databases/mysql.svg",
                tags: ["database", "sql", "official"],
                link: "https://dev.mysql.com/doc/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "MySQL Full Course (freeCodeCamp)",
                description: "Complete MySQL tutorial covering database fundamentals.",
                image: "/images/databases/mysql.svg",
                tags: ["mysql", "sql", "beginner"],
                link: "https://youtu.be/9ylj9NR0Lcg"
            }
        ]
    },

    PostgreSQL: {
        docsResources: [
            {
                id: 1,
                title: "PostgreSQL Official Docs",
                description: "The official PostgreSQL documentation for advanced SQL usage.",
                image: "/images/databases/postgresql.svg",
                tags: ["database", "sql", "official"],
                link: "https://www.postgresql.org/docs/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "PostgreSQL Tutorial for Beginners",
                description: "Introductory PostgreSQL tutorial with real examples.",
                image: "/images/databases/postgresql.svg",
                tags: ["postgresql", "sql", "tutorial"],
                link: "https://youtu.be/qw--VYLpxG4"
            }
        ]
    },

    SQLite: {
        docsResources: [
            {
                id: 1,
                title: "SQLite Official Docs",
                description: "The official SQLite documentation.",
                image: "/images/databases/sqlite.svg",
                tags: ["database", "sql", "official"],
                link: "https://www.sqlite.org/docs.html"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "SQLite Crash Course",
                description: "Beginner-friendly crash course on SQLite.",
                image: "/images/databases/sqlite.svg",
                tags: ["sqlite", "sql", "beginner"],
                link: "https://youtu.be/8vYj4MZ5P_0"
            }
        ]
    },

    Redis: {
        docsResources: [
            {
                id: 1,
                title: "Redis Official Docs",
                description: "The official Redis documentation for caching and databases.",
                image: "/images/databases/redis.svg",
                tags: ["database", "nosql", "official"],
                link: "https://redis.io/docs/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Redis Crash Course",
                description: "Quick start guide to Redis fundamentals.",
                image: "/images/databases/redis.svg",
                tags: ["redis", "database", "beginner"],
                link: "https://youtu.be/Hbt56gFj998"
            }
        ]
    },

    Firebase: {
        docsResources: [
            {
                id: 1,
                title: "Firebase Official Docs",
                description: "Documentation for Firebase backend-as-a-service platform.",
                image: "/images/databases/firebase.svg",
                tags: ["database", "baas", "official"],
                link: "https://firebase.google.com/docs"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Firebase Crash Course (Academind)",
                description: "Learn Firebase quickly with this hands-on crash course.",
                image: "/images/databases/firebase.svg",
                tags: ["firebase", "database", "tutorial"],
                link: "https://youtu.be/9kRgVxULbag"
            }
        ]
    }
};

// export database resourecs
module.exports = databaseResources;