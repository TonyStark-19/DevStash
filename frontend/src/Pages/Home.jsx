// import navbar and footer
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import useEffect
import { useEffect } from "react";

// AOS animations-*-*
import AOS from 'aos';
import 'aos/dist/aos.css';

// import components
import Background from "../Components/home/Background";
import Content from "../Components/home/Home/Content";
import AboutSection from "../Components/home/About/AboutSection";
import TechStackSection from "../Components/home/TechStack/TechStackSection";
import CTASection from "../Components/home/CTA/CTASection";

// Home Page Component
export function Home() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-[#030712] overflow-x-hidden font-poppins scroll-smooth">
            {/* Background Effects */}
            <Background />

            {/* navbar */}
            <Navbar />

            {/* Hero / Header */}
            <Content />

            {/* About / Mission Section */}
            <AboutSection />

            {/* Tech Stacks & Resource Coverage Section */}
            <TechStackSection />

            {/* Minimal & Clean CTA Section */}
            <CTASection />

            {/* footer */}
            <Footer />
        </div>
    );
}