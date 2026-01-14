// import components
import { Navbar } from "../Components/Navbar";

// import link
import { Link } from "react-router-dom";

// react icons
import { GrResources, GrDocker } from "react-icons/gr";
import { FaReact, FaRust } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { DiMongodb } from "react-icons/di";
import { FiGithub, FiArrowRight } from "react-icons/fi";

// import useEffect
import { useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Home Page Component
export function Home() {
    return (
        <div className="relative min-h-screen w-full bg-[#030712] overflow-hidden font-poppins">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <Navbar />
            <Content />
        </div>
    );
}

// Content Component
function Content() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const floatingIcons = [
        { Icon: FaReact, color: "text-cyan-400", pos: "top-[10%] left-[8%]", delay: "0", rotate: "rotate-12" },
        { Icon: VscAzure, color: "text-[#0078D4]", pos: "top-[15%] right-[10%]", delay: "200", rotate: "-rotate-12" },
        { Icon: SiFastapi, color: "text-[#009688]", pos: "top-[45%] left-[5%]", delay: "400", rotate: "rotate-6" },
        { Icon: FaRust, color: "text-orange-500", pos: "top-[50%] right-[6%]", delay: "600", rotate: "-rotate-12" },
        { Icon: GrDocker, color: "text-[#2496ED]", pos: "bottom-[15%] left-[12%]", delay: "800", rotate: "-rotate-6" },
        { Icon: DiMongodb, color: "text-green-500", pos: "bottom-[12%] right-[15%]", delay: "1000", rotate: "rotate-12" },
    ];

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 pt-12 text-center">

            {/* Floating Tech Stack */}
            {floatingIcons.map((item, index) => (
                <div
                    key={index}
                    className={`absolute ${item.pos} ${item.rotate} p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hidden
                    xl:block animate-float shadow-xl shadow-black/20`}
                    style={{
                        animationDelay: `${item.delay}ms`,
                        transition: 'all 0.3s ease-in-out'
                    }}
                    data-aos="zoom-in"
                >
                    <item.Icon className={`${item.color} text-3xl md:text-4xl`} />
                </div>
            ))}

            {/* Hero Badge */}
            <div
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium"
                data-aos="fade-down"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Community Powered Resources
            </div>

            {/* Main Heading */}
            <h1
                className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                Discover & Share <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    The Best Dev Resources
                </span>
            </h1>

            {/* Subtext */}
            <p
                className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Your go-to hub for curated tutorials, tools, and guides. Built for developers who want to ship faster and learn together.
            </p>

            {/* Action Buttons */}
            <div
                className="flex flex-col sm:flex-row gap-4 items-center"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <Link to="/resources">
                    <button className="group px-8 py-3 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-cyan-50
                    transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/10 cursor-pointer">
                        <GrResources />
                        Browse Resources
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>

                <a
                    href="https://github.com/TonyStark-19/DevStash/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white/5 text-white border border-white/10 font-semibold rounded-full flex items-center gap-2
                    hover:bg-white/10 transition-all duration-300 active:scale-95"
                >
                    <FiGithub />
                    Contribute
                </a>
            </div>

            {/* Stats Footer */}
            <div
                className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl flex justify-around items-center opacity-50 grayscale hover:grayscale-0
                transition-all text-white"
            >
                <div className="text-sm font-medium">100+ Tutorials</div>
                <div className="h-8 w-px bg-white/10 hidden md:block"></div>
                <div className="text-sm font-medium">Open Source</div>
                <div className="h-8 w-px bg-white/10 hidden md:block"></div>
                <div className="text-sm font-medium">Community Verified</div>
            </div>
        </div>
    );
}