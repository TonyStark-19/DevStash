// programming language resourecs
const programmingLanguagesResources = {
    C: {
        docsResources: [
            {
                id: 1,
                title: "C Programming - Tutorialspoint",
                description: "Beginner-friendly documentation for C programming.",
                image: "/images/languages/c.svg",
                tags: ["c", "low-level", "beginner"],
                link: "https://www.tutorialspoint.com/cprogramming/index.htm"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "C Programming Tutorial for Beginners",
                description: "Complete beginner guide to C programming.",
                image: "/images/languages/c.svg",
                tags: ["c", "tutorial", "beginner"],
                link: "https://youtu.be/KJgsSFOSQv0"
            }
        ]
    },

    "C++": {
        docsResources: [
            {
                id: 1,
                title: "C++ Reference",
                description: "Comprehensive reference for C++ programming.",
                image: "/images/languages/cpp.svg",
                tags: ["c++", "reference", "official"],
                link: "https://en.cppreference.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "C++ Full Course",
                description: "Complete C++ programming course.",
                image: "/images/languages/cpp.svg",
                tags: ["c++", "tutorial", "beginner"],
                link: "https://youtu.be/vLnPwxZdW4Y"
            }
        ]
    },

    Python: {
        docsResources: [
            {
                id: 1,
                title: "Python Official Docs",
                description: "The official documentation for Python programming.",
                image: "/images/languages/python.svg",
                tags: ["python", "official", "docs"],
                link: "https://docs.python.org/3/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Python Full Course (freeCodeCamp)",
                description: "Beginner-friendly full Python programming course.",
                image: "/images/languages/python.svg",
                tags: ["python", "tutorial", "beginner"],
                link: "https://youtu.be/rfscVS0vtbw"
            }
        ]
    },

    Java: {
        docsResources: [
            {
                id: 1,
                title: "Java Official Docs",
                description: "Official documentation for Java programming.",
                image: "/images/languages/java.svg",
                tags: ["java", "official", "docs"],
                link: "https://docs.oracle.com/javase/tutorial/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Java Tutorial for Beginners",
                description: "Learn Java programming from scratch.",
                image: "/images/languages/java.svg",
                tags: ["java", "tutorial", "beginner"],
                link: "https://youtu.be/eIrMbAQSU34"
            }
        ]
    },

    Go: {
        docsResources: [
            {
                id: 1,
                title: "Go Official Docs",
                description: "Official documentation for Go (Golang).",
                image: "/images/languages/go.svg",
                tags: ["go", "golang", "official"],
                link: "https://go.dev/doc/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Go Programming Tutorial",
                description: "Complete Golang tutorial for beginners.",
                image: "/images/languages/go.svg",
                tags: ["golang", "go", "tutorial"],
                link: "https://youtu.be/YS4e4q9oBaU"
            }
        ]
    },

    Rust: {
        docsResources: [
            {
                id: 1,
                title: "The Rust Programming Language (Book)",
                description: "Official book and docs for Rust programming.",
                image: "/images/languages/rust.svg",
                tags: ["rust", "official", "docs"],
                link: "https://doc.rust-lang.org/book/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Rust Programming Tutorial",
                description: "Step-by-step tutorial for learning Rust.",
                image: "/images/languages/rust.svg",
                tags: ["rust", "tutorial", "beginner"],
                link: "https://youtu.be/zF34dRivLOw"
            }
        ]
    },

    PHP: {
        docsResources: [
            {
                id: 1,
                title: "PHP Official Docs",
                description: "Official documentation for PHP programming.",
                image: "/images/languages/php.svg",
                tags: ["php", "official", "docs"],
                link: "https://www.php.net/manual/en/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "PHP Tutorial for Beginners",
                description: "Learn PHP basics step-by-step.",
                image: "/images/languages/php.svg",
                tags: ["php", "beginner", "tutorial"],
                link: "https://youtu.be/OK_JCtrrv-c"
            }
        ]
    },

    Ruby: {
        docsResources: [
            {
                id: 1,
                title: "Ruby Official Docs",
                description: "The official Ruby programming documentation.",
                image: "/images/languages/ruby.svg",
                tags: ["ruby", "docs", "official"],
                link: "https://www.ruby-lang.org/en/documentation/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Ruby Programming Tutorial",
                description: "Beginner Ruby tutorial with examples.",
                image: "/images/languages/ruby.svg",
                tags: ["ruby", "tutorial", "beginner"],
                link: "https://youtu.be/t_ispmWmdjY"
            }
        ]
    },

    Kotlin: {
        docsResources: [
            {
                id: 1,
                title: "Kotlin Official Docs",
                description: "Documentation for Kotlin programming language.",
                image: "/images/languages/kotlin.svg",
                tags: ["kotlin", "official", "docs"],
                link: "https://kotlinlang.org/docs/home.html"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Kotlin Full Course",
                description: "Kotlin programming course for beginners.",
                image: "/images/languages/kotlin.svg",
                tags: ["kotlin", "tutorial", "beginner"],
                link: "https://youtu.be/F9UC9DY-vIU"
            }
        ]
    },

    Swift: {
        docsResources: [
            {
                id: 1,
                title: "Swift Official Docs",
                description: "Apple’s official Swift programming documentation.",
                image: "/images/languages/swift.svg",
                tags: ["swift", "ios", "official"],
                link: "https://swift.org/documentation/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Swift Programming Tutorial",
                description: "Beginner’s guide to Swift programming.",
                image: "/images/languages/swift.svg",
                tags: ["swift", "ios", "tutorial"],
                link: "https://youtu.be/comQ1-x2a1Q"
            }
        ]
    },

    Scala: {
        docsResources: [
            {
                id: 1,
                title: "Scala Official Docs",
                description: "Official Scala programming documentation.",
                image: "/images/languages/scala.svg",
                tags: ["scala", "functional", "official"],
                link: "https://docs.scala-lang.org/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Scala Tutorial for Beginners",
                description: "Learn Scala basics in this beginner tutorial.",
                image: "/images/languages/scala.svg",
                tags: ["scala", "tutorial", "beginner"],
                link: "https://youtu.be/k7RM-ot2NWY"
            }
        ]
    }
};

// export programming language resourecs
module.exports = programmingLanguagesResources;