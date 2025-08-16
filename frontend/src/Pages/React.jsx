// import components
import { Footer } from "../Components/Footer";

// resource page
export function React() {
    return (
        <div
            className="min-h-screen"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}
        >
            <Content />
            <Footer />
        </div>
    );
}

// 📘 Documentation & Official Resources
const docsResources = [
    {
        id: 1,
        title: "React Official Docs",
        description:
            "The official React documentation covering fundamentals, hooks, and advanced concepts.",
        image: "/images/frontend/React.svg",
        tags: ["Documentation", "Official", "Author Suggested"],
        link: "https://react.dev/",
    },
    {
        id: 2,
        title: "React Hot Toast",
        description:
            "Lightweight and customizable toast notifications for React applications.",
        image: "/images/frontend/React.svg",
        tags: ["Library", "UI", "Notifications", "Author Suggested"],
        link: "https://react-hot-toast.com/",
    },
    {
        id: 3,
        title: "MDN Web Docs - React",
        description:
            "MDN's React tutorial series introducing core concepts and usage.",
        image: "/images/frontend/React.svg",
        tags: ["Documentation", "Learning", "AI Suggested"],
        link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
    },
    {
        id: 4,
        title: "UIverse",
        description:
            "Free open-source UI elements for React projects.",
        image: "/images/frontend/React.svg",
        tags: ["UI", "Components", "AI Suggested"],
        link: "https://uiverse.io/",
    },
    {
        id: 5,
        title: "React Hook Form",
        description:
            "Performant, flexible, and extensible forms with easy-to-use validation.",
        image: "/images/frontend/React.svg",
        tags: ["Forms", "Library", "AI Suggested"],
        link: "https://react-hook-form.com/",
    },
];

// 🎥 YouTube Resources
const youtubeResources = [
    {
        id: 1,
        title: "React Tutorial (Code With Harry)",
        description: "Beginner-friendly React tutorial in Hindi for building real-world projects.",
        image: "/images/frontend/React.svg",
        tags: ["react", "beginner", "hindi", "tutorial", "author-suggested"],
        link: "https://youtu.be/RGKi6LSPDLU?si=8cF79M9Jt8UHwX79"
    },
    {
        id: 2,
        title: "React Hooks Tutorial (Code Bless You)",
        description: "In-depth explanation of React Hooks and how to use them effectively.",
        image: "/images/frontend/React.svg",
        tags: ["react", "hooks", "tutorial", "intermediate", "author-suggested"],
        link: "https://youtu.be/HnXPKtro4SM?si=IUgtjGQJKBFigkAA"
    },
];

function Content() {
    return (
        <div className="py-8 text-white/80 font-poppins h-full pt-20 flex flex-col items-center">
            {/* Page heading */}
            <div className="w-[70%] text-center">
                <h1 className="text-4xl mb-3 font-semibold leading-12">
                    React — Curated Docs, Libraries & Tools
                </h1>
                <p className="text-[22px] pb-10 border-b-2 border-white/30 tracking-wide">
                    Everything you need to build modern, fast, and scalable UI with
                    React — from beginner tutorials to advanced libraries.
                </p>
            </div>

            {/* Resources Section */}
            <div className="w-[70%] mt-15">
                <h2 className="text-3xl font-semibold mb-6">Docs & Articles :</h2>

                <div className="flex flex-col gap-10 border-b-2 border-b-white/30 pb-10">
                    {docsResources.map((res) => (
                        <div
                            key={res.id}
                            className="bg-[#06B6D440]/40 hover:bg-[#06B6D440]/60 duration-300 rounded-2xl p-6 w-full relative shadow-lg shadow-cyan-500/10"
                        >
                            {/* Logo */}
                            <img
                                src={res.image}
                                alt={res.title}
                                className="w-10 h-auto mb-5"
                            />

                            {/* Tags */}
                            <div className="flex flex-row flex-wrap gap-2.5 absolute top-8 right-6">
                                {res.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#06B6D440]/40 rounded-lg py-1 px-3 text-sm"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            {/* Title + Description */}
                            <h1 className="text-[22px] font-semibold mb-3">{res.title}</h1>
                            <p className="text-[17px]">{res.description}</p>

                            {/* CTA */}
                            <a
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-400 hover:text-blue-300 text-[15px] mt-4 cursor-pointer"
                            >
                                Visit Resource →
                            </a>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-semibold mt-18 mb-6">Youtube Resources :</h2>

                <div className="flex flex-col gap-10 border-b-2 border-b-white/30 pb-10">
                    {youtubeResources.map((res) => (
                        <div
                            key={res.id}
                            className="bg-[#06B6D440]/40 hover:bg-[#06B6D440]/60 duration-300 rounded-2xl p-6 w-full relative shadow-lg shadow-cyan-500/10"
                        >
                            {/* Logo */}
                            <img
                                src={res.image}
                                alt={res.title}
                                className="w-10 h-auto mb-5"
                            />

                            {/* Tags */}
                            <div className="flex flex-row flex-wrap gap-2.5 absolute top-8 right-6">
                                {res.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#06B6D440]/40 rounded-lg py-1 px-3 text-sm"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            {/* Title + Description */}
                            <h1 className="text-[22px] font-semibold mb-3">{res.title}</h1>
                            <p className="text-[17px]">{res.description}</p>

                            {/* CTA */}
                            <a
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-400 hover:text-blue-300 text-[15px] mt-4 cursor-pointer"
                            >
                                Visit Resource →
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-10 p-6 text-white text-center">
                    <h2 className="text-xl font-bold mb-3">
                        Do you want to contribute your own favorite resource which is not present here?
                    </h2>
                    <p className="mb-4 text-[16px] opacity-90">
                        Help others by sharing what has helped you in your learning journey.
                    </p>
                    <button className="px-6 py-2 rounded-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-black
                    cursor-pointer">
                        Contribute Your Resource
                    </button>
                </div>
            </div>
        </div>
    );
}