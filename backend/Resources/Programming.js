// programming language resources
const programmingLanguagesResources = {
    C: {
        docsResources: [
            {
                id: 1,
                title: "C Programming - Tutorialspoint",
                description: "Beginner-friendly documentation for learning C programming basics.",
                image: "/images/programming/C.svg",
                tags: ["c", "low-level", "docs", "beginner"],
                link: "https://www.tutorialspoint.com/cprogramming/index.htm"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "C Programming Tutorial for Beginners",
                description: "Complete beginner’s guide to C programming fundamentals.",
                image: "/images/programming/C.svg",
                tags: ["c", "tutorial", "beginner", "course"],
                link: "https://youtu.be/KJgsSFOSQv0"
            },
            {
                id: 2,
                title: "C Programming Tutorial - Apna College",
                description: "Beginner-friendly full C programming tutorial in Hindi.",
                image: "/images/programming/C.svg",
                tags: ["c", "tutorial", "beginner", "curated"],
                link: "https://youtu.be/irqbmMNs2Bo?si=CYd6g4aqkl-0pIMT"
            }
        ]
    },

    "C++": {
        docsResources: [
            {
                id: 1,
                title: "C++ Reference",
                description: "Comprehensive online reference for C++ programming language.",
                image: "/images/programming/CPlusPlus.svg",
                tags: ["c++", "reference", "docs", "official"],
                link: "https://en.cppreference.com/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "C++ Full Course",
                description: "Complete C++ programming course for beginners.",
                image: "/images/programming/CPlusPlus.svg",
                tags: ["c++", "tutorial", "beginner", "course"],
                link: "https://youtu.be/vLnPwxZdW4Y"
            },
            {
                id: 2,
                title: "C++ Full Course - Programming with Mosh",
                description: "Beginner-friendly C++ full course by Programming with Mosh.",
                image: "/images/programming/CPlusPlus.svg",
                tags: ["c++", "tutorial", "beginner", "course", "curated"],
                link: "https://youtu.be/ZzaPdXTrSb8?si=0aXA6LmXGtXs-2q9"
            }
        ]
    },

    Python: {
        docsResources: [
            {
                id: 1,
                title: "Python Official Docs",
                description: "The official Python documentation covering syntax, libraries, and examples.",
                image: "/images/programming/Python.svg",
                tags: ["python", "official", "docs"],
                link: "https://docs.python.org/3/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Python Full Course - freeCodeCamp",
                description: "Beginner-friendly full Python programming course with projects.",
                image: "/images/programming/Python.svg",
                tags: ["python", "tutorial", "beginner", "course"],
                link: "https://youtu.be/rfscVS0vtbw"
            },
            {
                id: 2,
                title: "Python Tutorial - Apna College",
                description: "Beginner Python tutorial in Hindi covering core concepts and practice.",
                image: "/images/programming/Python.svg",
                tags: ["python", "tutorial", "beginner", "curated"],
                link: "https://youtu.be/ERCMXc8x7mc?si=WVdK-SlEe_wSdjk3"
            }
        ]
    },

    Java: {
        docsResources: [
            {
                id: 1,
                title: "Java Official Docs",
                description: "Official documentation for Java, covering tutorials and references.",
                image: "/images/programming/Java.svg",
                tags: ["java", "official", "docs"],
                link: "https://docs.oracle.com/javase/tutorial/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Java Tutorial for Beginners",
                description: "Beginner-friendly course to learn Java programming from scratch.",
                image: "/images/programming/Java.svg",
                tags: ["java", "tutorial", "beginner", "course"],
                link: "https://youtu.be/eIrMbAQSU34"
            },
            {
                id: 2,
                title: "Java + DSA Playlist - Apna College",
                description: "Complete Java programming + data structures & algorithms playlist in Hindi.",
                image: "/images/programming/Java.svg",
                tags: ["java", "dsa", "tutorial", "beginner", "curated"],
                link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=I05GK53C3o-QHixg"
            }
        ]
    },

    Go: {
        docsResources: [
            {
                id: 1,
                title: "Go Official Docs",
                description: "Official documentation for Go (Golang) programming language.",
                image: "/images/programming/Go.svg",
                tags: ["go", "golang", "docs", "official"],
                link: "https://go.dev/doc/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Go Programming Tutorial - freeCodeCamp",
                description: "Complete Golang tutorial for beginners with practical examples.",
                image: "/images/programming/Go.svg",
                tags: ["golang", "go", "tutorial", "beginner", "course"],
                link: "https://youtu.be/YS4e4q9oBaU"
            }
        ]
    },

    Rust: {
        docsResources: [
            {
                id: 1,
                title: "The Rust Programming Language (Book)",
                description: "The official Rust programming language book and documentation.",
                image: "/images/programming/Rust.svg",
                tags: ["rust", "official", "docs", "book"],
                link: "https://doc.rust-lang.org/book/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Rust Programming Tutorial - Traversy Media",
                description: "Step-by-step beginner Rust tutorial by Traversy Media.",
                image: "/images/programming/Rust.svg",
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
                description: "Official documentation for PHP programming language.",
                image: "/images/programming/PHP.svg",
                tags: ["php", "docs", "official"],
                link: "https://www.php.net/manual/en/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "PHP Tutorial for Beginners - freeCodeCamp",
                description: "Beginner-friendly PHP course covering fundamentals.",
                image: "/images/programming/PHP.svg",
                tags: ["php", "tutorial", "beginner", "course"],
                link: "https://youtu.be/OK_JCtrrv-c"
            }
        ]
    },

    Ruby: {
        docsResources: [
            {
                id: 1,
                title: "Ruby Official Docs",
                description: "The official Ruby programming language documentation.",
                image: "/images/programming/Ruby.svg",
                tags: ["ruby", "docs", "official"],
                link: "https://www.ruby-lang.org/en/documentation/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Ruby Programming Tutorial - freeCodeCamp",
                description: "Beginner-friendly Ruby programming tutorial with examples.",
                image: "/images/programming/Ruby.svg",
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
                description: "Official documentation for Kotlin programming language.",
                image: "/images/programming/Kotlin.svg",
                tags: ["kotlin", "docs", "official"],
                link: "https://kotlinlang.org/docs/home.html"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Kotlin Full Course - freeCodeCamp",
                description: "Beginner-friendly Kotlin programming course.",
                image: "/images/programming/Kotlin.svg",
                tags: ["kotlin", "tutorial", "beginner", "course"],
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
                image: "/images/programming/Swift.svg",
                tags: ["swift", "ios", "docs", "official"],
                link: "https://swift.org/documentation/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Swift Programming Tutorial - freeCodeCamp",
                description: "Beginner-friendly introduction to Swift programming.",
                image: "/images/programming/Swift.svg",
                tags: ["swift", "ios", "tutorial", "beginner"],
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
                image: "/images/programming/Scala.svg",
                tags: ["scala", "docs", "official"],
                link: "https://docs.scala-lang.org/"
            }
        ],
        youtubeResources: [
            {
                id: 1,
                title: "Scala Tutorial - Telusko",
                description: "Beginner-friendly Scala programming tutorial by Telusko.",
                image: "/images/programming/Scala.svg",
                tags: ["scala", "tutorial", "beginner"],
                link: "https://youtu.be/i9o70PMqMGY?si=HEA6WRbiXS1KWh-I"
            }
        ]
    }
};

// export programming language resources
module.exports = programmingLanguagesResources;