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
import Background from "../Components/auth/Background";
import LoginForm from "../Components/auth/Login/LoginForm";
import LoginVisual from "../Components/auth/Login/LoginVisual";

// Login Page Component
export function Login() {
    const navigate = useNavigate();

    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: "", password: "" });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Start the loading toast and capture its ID
        const loadingToast = toast.loading("Verifying credentials...");

        try {
            const res = await api.post("/auth/login", formData);
            login(res.data.token);

            // Dismiss the loading toast
            toast.dismiss(loadingToast);
            // Update the SAME toast to success
            toast.success("Welcome back! 👋", { id: loadingToast });

            navigate("/home", { replace: true });
        } catch (err) {
            // Update the SAME toast to error
            const errorMessage = err.response?.data?.message || "Invalid credentials";
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

    // Handle Google Login
    const handleGoogleLogin = useGoogleLogin({
        // Google OAuth configuration
        onSuccess: async (tokenResponse) => {
            const loadingToast = toast.loading("Verifying Google account...");
            try {
                // tokenResponse.access_token is what we send to the backend
                const res = await api.post("/auth/google", {
                    token: tokenResponse.access_token
                });

                login(res.data.token);
                toast.dismiss(loadingToast);
                toast.success("Welcome to DevStash! 🚀");
                navigate("/home", { replace: true });
            } catch (err) {
                toast.dismiss(loadingToast);
                console.error("Backend Google Auth Error:", err);
                toast.error(err.response?.data?.message || "Google Authentication failed");
            }
        },
        onError: () => toast.error("Google Login Failed"),
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
                {/* Left Side: Login Form */}
                <LoginForm
                    formData={formData}
                    handleChange={handleChange}
                    handleGoogleLogin={handleGoogleLogin}
                    handleSubmit={handleSubmit}
                />

                {/* Right Side: Visual/Branding */}
                <LoginVisual />
            </div>
        </div>
    );
}