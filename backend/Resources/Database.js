// database resources
const databaseResources = {
    MongoDB: {
        docsResources: [
            {
                id: 1,
                title: "MongoDB Official Docs",
                description: "Comprehensive MongoDB documentation covering queries, aggregation, indexing, and deployment.",
                image: "/images/database/MongoDB.svg",
                tags: ["mongodb", "database", "nosql", "official", "docs"],
                link: "https://www.mongodb.com/docs/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "MongoDB Crash Course - Traversy Media",
                description: "Step-by-step beginner-friendly crash course introducing MongoDB basics.",
                image: "/images/database/MongoDB.svg",
                tags: ["mongodb", "database", "nosql", "beginner", "tutorial"],
                link: "https://youtu.be/-56x56UppqQ"
            },
            {
                id: 2,
                title: "MongoDB Tutorial - Code With Harry",
                description: "Practical MongoDB tutorial in Hindi for beginners with hands-on examples.",
                image: "/images/database/MongoDB.svg",
                tags: ["mongodb", "database", "nosql", "beginner", "tutorial", "curated"],
                link: "https://youtu.be/J6mDkcqU_ZE?si=kAmwKAv5Jnez1mL-"
            }
        ]
    },

    MySQL: {
        docsResources: [
            {
                id: 1,
                title: "MySQL Official Docs",
                description: "Official MySQL documentation covering SQL queries, schemas, and server setup.",
                image: "/images/database/MySQL.svg",
                tags: ["mysql", "database", "sql", "official", "docs"],
                link: "https://dev.mysql.com/doc/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "MySQL Full Course - freeCodeCamp",
                description: "Complete MySQL tutorial for beginners covering queries, joins, and relational database concepts.",
                image: "/images/database/MySQL.svg",
                tags: ["mysql", "database", "sql", "course", "beginner"],
                link: "https://youtu.be/9ylj9NR0Lcg"
            },
            {
                id: 2,
                title: "SQL Tutorial using MySQL - Apna College",
                description: "Beginner-friendly SQL tutorial in Hindi using MySQL, great for first-time learners.",
                image: "/images/database/MySQL.svg",
                tags: ["mysql", "database", "sql", "beginner", "tutorial", "curated"],
                link: "https://youtu.be/hlGoQC332VM?si=uuJEInCpHHOxe9Rv"
            }
        ]
    },

    PostgreSQL: {
        docsResources: [
            {
                id: 1,
                title: "PostgreSQL Official Docs",
                description: "Detailed PostgreSQL documentation covering SQL features, performance, and extensions.",
                image: "/images/database/PostgreSQL.svg",
                tags: ["postgresql", "database", "sql", "official", "docs"],
                link: "https://www.postgresql.org/docs/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "PostgreSQL Tutorial - freeCodeCamp",
                description: "Introductory PostgreSQL tutorial with real-world examples and SQL queries.",
                image: "/images/database/PostgreSQL.svg",
                tags: ["postgresql", "database", "sql", "beginner", "tutorial"],
                link: "https://youtu.be/qw--VYLpxG4"
            }
        ]
    },

    SQLite: {
        docsResources: [
            {
                id: 1,
                title: "SQLite Official Docs",
                description: "Official SQLite documentation including syntax and lightweight database usage.",
                image: "/images/database/SQLite.svg",
                tags: ["sqlite", "database", "sql", "official", "docs"],
                link: "https://www.sqlite.org/docs.html"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "SQLite with Python - Traversy Media",
                description: "Crash course on using SQLite with Python for database-driven apps.",
                image: "/images/database/SQLite.svg",
                tags: ["sqlite", "database", "sql", "python", "beginner", "tutorial"],
                link: "https://youtu.be/byHcYRpMgI4?si=QQsU0VFHgAmsmYCl"
            }
        ]
    },

    Redis: {
        docsResources: [
            {
                id: 1,
                title: "Redis Official Docs",
                description: "Redis documentation for caching, in-memory storage, and database use cases.",
                image: "/images/database/Redis.svg",
                tags: ["redis", "database", "nosql", "official", "docs"],
                link: "https://redis.io/docs/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Redis Crash Course - Traversy Media",
                description: "Quick crash course to get started with Redis fundamentals and caching concepts.",
                image: "/images/database/Redis.svg",
                tags: ["redis", "database", "nosql", "beginner", "tutorial"],
                link: "https://youtu.be/Hbt56gFj998"
            }
        ]
    },

    Firebase: {
        docsResources: [
            {
                id: 1,
                title: "Firebase Official Docs",
                description: "Firebase documentation for authentication, Firestore, hosting, and cloud functions.",
                image: "/images/database/Firebase.svg",
                tags: ["firebase", "database", "baas", "cloud", "official", "docs"],
                link: "https://firebase.google.com/docs"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Firebase Crash Course - Academind",
                description: "Hands-on crash course covering Firebase basics: Firestore, auth, and hosting.",
                image: "/images/database/Firebase.svg",
                tags: ["firebase", "database", "baas", "beginner", "tutorial"],
                link: "https://youtu.be/9kRgVxULbag"
            }
        ]
    }
};

// export database resources
module.exports = databaseResources;