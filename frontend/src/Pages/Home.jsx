// import components
import { Navbar } from "../Components/Navbar";

// import link
import { Link } from "react-router-dom";

// react icons
import { GrResources } from "react-icons/gr";
import { FaReact, FaNodeJs, FaRust } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FiGithub } from "react-icons/fi";

// Home function
export function Home() {
    return (
        <>
            <div className="h-screen overflow-hidden"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
                }}>
                <Navbar />
                <Content />
            </div>
        </>
    )
}

// content
function Content() {
    return (
        <div className="text-white flex flex-col justify-center items-center p-8 h-[75%] font-poppins">
            {/* Floating Icons */}
            <div className="p-4 absolute top-30 left-25 rounded-xl rotate-12 bg-white/5 backdrop-blur-sm animate-float">
                <FaReact className="text-cyan-400 text-4xl" />
            </div>
            <div className="p-4 absolute top-20 right-25 rounded-xl -rotate-12 bg-white/5 backdrop-blur-sm animate-float 
            delay-200">
                <RiTailwindCssFill className="text-sky-400 text-4xl" />
            </div>
            <div className="p-4 absolute bottom-20 left-25 rounded-xl -rotate-12 bg-white/10 backdrop-blur-sm animate-float 
            delay-500">
                <FaNodeJs className="text-green-400 text-4xl" />
            </div>
            <div className="p-4 absolute top-85 left-50 rounded-xl bg-white/10 backdrop-blur-sm animate-float delay-700">
                <SiExpress className="text-gray-300 text-4xl" />
            </div>
            <div className="p-4 absolute top-85 right-50 rounded-xl bg-white/10 backdrop-blur-sm animate-float delay-300">
                <DiMongodb className="text-green-500 text-4xl" />
            </div>
            <div className="p-4 absolute bottom-20 right-25 rounded-xl rotate-12 bg-white/10 backdrop-blur-sm animate-float 
            delay-600">
                <FaRust className="text-orange-500 text-4xl" />
            </div>

            <h1 className="text-6xl mb-4 font-semibold pt-10">Discover & Share</h1>
            <h2 className="text-6xl mb-6 font-semibold">The Best Dev Resources</h2>
            <p className="text-[21px] mb-4 w-[45%] text-center">Your go-to hub for curated coding tutorials, tools, and guides.</p>
            <p className="text-[21px] mb-4 w-[45%] text-center">Explore top resources, save your favorites, and share your
                own finds with the developer community.</p>
            <p className="text-[21px] mb-4 w-[45%] text-center">Built for developers, powered by collaboration.</p>

            <div className="flex flex-row gap-4 mt-5">
                <button className="text-[17px] py-2 px-4 cursor-pointer text-black bg-white rounded-xl capitalize
                flex flex-row justify-center items-center gap-1.5">
                    <FiGithub />
                    How to contribute resources?
                </button>
                <Link to="/resources">
                    <button className="text-[17px] py-2 px-4 cursor-pointer text-white bg-white/10 rounded-xl capitalize
                flex flex-row justify-center items-center gap-1.5">
                        <GrResources />
                        Browse resources
                    </button>
                </Link>
            </div>
        </div>
    )
}