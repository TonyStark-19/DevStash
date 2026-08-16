// import navigate from react-router-dom
import { useNavigate } from "react-router-dom";

// import useState and useEffect from react
import { useState, useEffect } from "react";

// import useAuth from context
import { useAuth } from "../Context/AuthContext";

// import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import api utility and toast for notifications
import api from "../utils/api";
import toast from "react-hot-toast";

// import Google OAuth login hook
import { useGoogleLogin } from '@react-oauth/google';

// import components
import Background from "../Components/Auth/Background";
import LeftVisual from "../Components/Auth/Signup/LeftVisual";
import SignupForm from "../Components/Auth/Signup/SignupForm";

// Signup Page Component
export function Signup() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = formData;

        // 1. Local validation check
        if (password !== confirmPassword) {
            toast.error("Passwords do not match ⚠️");
            return;
        }

        // 2. Start the loading toast and capture its ID
        const loadingToast = toast.loading("Creating your knowledge stash...");

        try {
            const res = await api.post("/auth/signup", { email, password });

            // 3. Update to success using the ID
            toast.success("Account created successfully! 🎉", { id: loadingToast });

            // Brief delay to let the success toast be seen before redirecting
            login(res.data.token);
            setTimeout(() => navigate("/home", { replace: true }), 1000);

        } catch (err) {
            // 4. Update to error using the ID
            const errorMessage = err.response?.data?.message || "Signup failed";
            toast.error(errorMessage, { id: loadingToast });
        }
    };

    // Wake up backend server on component mount
    useEffect(() => {
        // Wake up the server immediately when the user lands on the login page
        const wakeUpServer = async () => {
            try {
                // A simple GET request to any route
                await api.get("/allresources");
                console.log("Backend is awake! ⚡");
            } catch (err) {
                console.log("Server waking up...");
            }
        };

        wakeUpServer();
    }, []);

    // Handle Google Signup
    const handleGoogleSignup = useGoogleLogin({
        // Google OAuth configuration
        onSuccess: async (tokenResponse) => {
            const loadingToast = toast.loading("Creating your account with Google...");
            try {
                // Use the access_token from Google
                const res = await api.post("/auth/google", {
                    token: tokenResponse.access_token
                });

                login(res.data.token);
                toast.dismiss(loadingToast);
                toast.success("Welcome to the community! 🎉");
                navigate("/home", { replace: true });
            } catch (err) {
                toast.dismiss(loadingToast);
                console.error("Google Auth Error:", err);
                toast.error(err.response?.data?.message || "Google Signup failed");
            }
        },
        onError: () => toast.error("Google Signup Failed"),
    });

    // Initialize AOS animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 font-poppins relative overflow-hidden max-lg:p-0">
            {/* Ambient Background Glows */}
            <Background />

            <div
                className="w-full max-w-[940px] grid grid-cols-1 lg:grid-cols-2 bg-white/[0.02] border border-white/10 rounded-3xl
                overflow-hidden backdrop-blur-md shadow-2xl max-lg:rounded-none max-lg:min-h-screen max-lg:max-w-full"
                data-aos="zoom-in"
            >
                {/* Left Side: Branding/Intro */}
                <LeftVisual />

                {/* Right Side: Signup Form */}
                <SignupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleGoogleSignup={handleGoogleSignup}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}