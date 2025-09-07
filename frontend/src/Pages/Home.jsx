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
            <div className="p-4 absolute rounded-xl rotate-12 bg-white/5 backdrop-blur-sm animate-float delay-300
            top-30 min-a:left-25 max-a:left-15 max-e:left-7.5 max-d:hidden" data-aos="fade-down">
                <FaReact className="text-cyan-400 min-a:text-4xl max-a:text-3xl" />
            </div>

            <div className="p-4 absolute rounded-xl -rotate-12 bg-white/5 backdrop-blur-sm animate-float delay-300
            top-30 min-a:right-25 max-a:right-15 max-e:right-7.5 max-d:hidden" data-aos="fade-down">
                <VscAzure className="text-[#0078D4] min-a:text-4xl max-a:text-3xl" />
            </div>

            <div className="p-4 absolute rounded-xl -rotate-12 bg-white/10 backdrop-blur-sm animate-float delay-600
            bottom-20 min-a:left-25 max-a:left-15 max-e:left-7.5 max-d:hidden" data-aos="fade-down">
                <GrDocker className="text-[#2496ED] min-a:text-4xl max-a:text-3xl" />
            </div>

            <div className="p-4 absolute rounded-xl bg-white/10 backdrop-blur-sm animate-float delay-400
            min-a:top-87 max-a:top-75 min-a:left-45 max-a:left-15 max-e:left-7.5 max-d:hidden" data-aos="fade-down">
                <SiFastapi className="text-[#009688] min-a:text-4xl max-a:text-3xl" />
            </div>

            <div className="p-4 absolute rounded-xl bg-white/10 backdrop-blur-sm animate-float delay-400
            min-a:top-87 max-a:top-75 min-a:right-45 max-a:right-15 max-e:right-7.5 max-d:hidden" data-aos="fade-down">
                <DiMongodb className="text-green-500 min-a:text-4xl max-a:text-3xl" />
            </div>

            <div className="p-4 absolute rounded-xl rotate-12 bg-white/10 backdrop-blur-sm animate-float delay-600
            bottom-20 min-a:right-25 max-a:right-15 max-e:right-7.5 max-d:hidden" data-aos="fade-down">
                <FaRust className="text-orange-500 min-a:text-4xl max-a:text-3xl" />
            </div>

            <div className="flex flex-col justify-center items-center w-full min-a:pt-10 max-a:pt-5">

                <h1 className="min-a:text-[55px] max-a:text-[40px] max-b:text-[35px] max-d:text-[30px] max-h:text-[26px]
                min-a:leading-18 max-a:leading-14 max-d:leading-10 text-center font-semibold"
                    data-aos="fade-up" data-aos-delay="200">Discover & Share</h1>

                <h2 className="min-a:text-[55px] max-a:text-[40px] max-b:text-[35px] max-d:text-[30px] max-h:text-[26px] mb-2
                font-semibold text-center" data-aos="fade-up" data-aos-delay="200">The Best Dev Resources</h2>

                <p className="min-a:text-[20px] max-a:text-[18px] max-b:text-[16px] max-h:text-[15.5px] mb-3 min-a:w-[45%]
                max-a:w-[55%] max-b:w-[70%] max-d:w-[90%] text-center" data-aos="fade-up" data-aos-delay="300">
                    Your go-to hub for curated coding tutorials, tools, and guides.</p>

                <p className="min-a:text-[20px] max-a:text-[18px] max-b:text-[16px] max-h:text-[15.5px] mb-3 min-a:w-[45%]
                max-a:w-[55%] max-b:w-[70%] max-d:w-[90%] text-center" data-aos="fade-up" data-aos-delay="400">
                    Explore top resources, save your favorites, and share your own finds with the developer community.</p>

                <p className="min-a:text-[20px] max-a:text-[18px] max-b:text-[16px] max-h:text-[15.5px] min-a:mb-4 max-a:mb-3
                min-a:w-[45%] max-a:w-[55%] max-b:w-[85%] max-d:w-[90%] text-center"
                    data-aos="fade-up" data-aos-delay="400">Built for developers, powered by collaboration.</p>

                <div className="flex min-b:flex-row max-b:flex-col max-b:justify-center max-b:items-center gap-4 mt-5"
                    data-aos="fade-up" data-aos-delay="500">
                    <a
                        href="https://github.com/TonyStark-19/DevStash/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-a:text-[17px] max-a:text-[15px] max-h:text-[14.5px] py-2 min-a:px-4 max-a:px-3
                        cursor-pointer text-black bg-white rounded-xl capitalize flex flex-row justify-center
                        items-center gap-1.5 hover:-translate-y-0.5 duration-300">
                        <FiGithub />
                        How to contribute resources?
                    </a>

                    <Link to="/resources">
                        <button className="min-a:text-[17px] max-a:text-[15px] max-h:text-[14.5px] py-2 min-a:px-4 max-a:px-3
                        cursor-pointer text-white bg-white/10 rounded-xl capitalize flex flex-row
                        justify-center items-center gap-1.5 hover:-translate-y-0.5 duration-300">
                            <GrResources />
                            Browse resources
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}