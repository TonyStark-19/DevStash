// import components
import { Navbar } from "../Components/Navbar";

// import link
import { Link } from "react-router-dom";

// react icons
import { GrResources } from "react-icons/gr";
import { FaReact, FaRust } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import { DiMongodb } from "react-icons/di";
import { FiGithub } from "react-icons/fi";

// import useEffect
import { useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-white flex flex-col justify-center items-center p-8 h-[75%] font-poppins">
            {/* Floating Icons */}
            <div className="p-4 absolute top-30 left-25 rounded-xl rotate-12 bg-white/5 backdrop-blur-sm animate-float
            delay-300"
                data-aos="fade-down">
                <FaReact className="text-cyan-400 text-4xl" />
            </div>

            <div className="p-4 absolute top-30 right-25 rounded-xl -rotate-12 bg-white/5 backdrop-blur-sm animate-float 
            delay-300" data-aos="fade-down">
                <VscAzure className="text-[#0078D4] text-4xl" />
            </div>

            <div className="p-4 absolute bottom-20 left-25 rounded-xl -rotate-12 bg-white/10 backdrop-blur-sm animate-float 
            delay-600" data-aos="fade-down">
                <GrDocker className="text-[#2496ED] text-4xl" />
            </div>

            <div className="p-4 absolute top-85 left-45 rounded-xl bg-white/10 backdrop-blur-sm animate-float delay-400"
                data-aos="fade-down">
                <SiFastapi className="text-[#009688] text-4xl" />
            </div>

            <div className="p-4 absolute top-85 right-45 rounded-xl bg-white/10 backdrop-blur-sm animate-float delay-400"
                data-aos="fade-down">
                <DiMongodb className="text-green-500 text-4xl" />
            </div>

            <div className="p-4 absolute bottom-20 right-25 rounded-xl rotate-12 bg-white/10 backdrop-blur-sm animate-float 
            delay-600" data-aos="fade-down">
                <FaRust className="text-orange-500 text-4xl" />
            </div>

            <div className="flex flex-col justify-center items-center w-full pt-10">
                {/* <div className="flex flex-row items-center gap-3 bg-white/10 py-2 px-4 rounded-2xl mb-5">
                    <span className="size-1.5 animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <p className="text-[15px]">48 Resources accross domains</p>
                </div> */}

                <h1 className="text-[55px] leading-18 font-semibold" data-aos="fade-up" data-aos-delay="200">Discover & Share</h1>
                <h2 className="text-[55px] mb-2 font-semibold" data-aos="fade-up" data-aos-delay="200">The Best Dev Resources</h2>
                <p className="text-[20px] mb-3 w-[45%] text-center" data-aos="fade-up" data-aos-delay="300">Your go-to hub
                    for curated coding tutorials, tools, and guides.</p>
                <p className="text-[20px] mb-3 w-[45%] text-center" data-aos="fade-up" data-aos-delay="400">Explore top resources,
                    save your favorites, and share your own finds with the developer community.</p>
                <p className="text-[20px] mb-4 w-[45%] text-center" data-aos="fade-up" data-aos-delay="400">Built for developers,
                    powered by collaboration.</p>

                <div className="flex flex-row gap-4 mt-5" data-aos="fade-up" data-aos-delay="500">
                    <button className="text-[17px] py-2 px-4 cursor-pointer text-black bg-white rounded-xl capitalize
                    flex flex-row justify-center items-center gap-1.5 hover:-translate-y-0.5 duration-300">
                        <FiGithub />
                        How to contribute resources?
                    </button>
                    <Link to="/resources">
                        <button className="text-[17px] py-2 px-4 cursor-pointer text-white bg-white/10 rounded-xl capitalize
                        flex flex-row justify-center items-center gap-1.5 hover:-translate-y-0.5 duration-300">
                            <GrResources />
                            Browse resources
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}