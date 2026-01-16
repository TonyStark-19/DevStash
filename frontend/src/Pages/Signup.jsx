// import link and navigate from react-router-dom
import { Link, useNavigate } from "react-router-dom";

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

// import icons
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiArrowRight, FiLayers, FiBookmark, FiPlusCircle } from "react-icons/fi";

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
        <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 font-poppins relative overflow-hidden max-lg:p-0">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

            <div
                className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-white/[0.02] border border-white/10 rounded-[2.5rem]
                overflow-hidden backdrop-blur-md shadow-2xl max-lg:rounded-none max-lg:h-screen max-lg:max-w-full"
                data-aos="zoom-in"
            >
                {/* Left Side: Branding/Intro */}
                <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-cyan-500/10 to-transparent border-r border-white/5">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                            Build your <br />
                            <span className="text-cyan-400">Knowledge Stash</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Join 2,000+ developers organizing their learning journey. Curated, shared, and built for the community.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center
                            text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                <FiLayers size={20} />
                            </div>
                            <div className="text-sm font-medium text-slate-300">Curated Tech Resources</div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center 
                            text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                <FiBookmark size={20} />
                            </div>
                            <div className="text-sm font-medium text-slate-300">Personal Bookmarks & Collections</div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center
                            text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                <FiPlusCircle size={20} />
                            </div>
                            <div className="text-sm font-medium text-slate-300">Community Powered Contributions</div>
                        </div>
                    </div>

                    {/* Visual Element: Subtle Floating Image or Placeholder */}
                    <div className="relative mt-auto">
                        <img
                            src="/images/Login/SideBox.png"
                            alt="Developer illustration"
                            className="w-full h-auto opacity-80"
                        />
                    </div>
                </div>

                {/* Right Side: Signup Form */}
                <div className="p-8 md:p-14 flex flex-col justify-center">
                    <div className="mb-10 text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-white mb-2">Create an account</h1>
                        <p className="text-slate-400">Start your journey with DevStash today.</p>
                    </div>

                    {/* Google Button */}
                    <button
                        type="button" // Prevents unintentional form validation
                        onClick={() => handleGoogleSignup()}
                        className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-black font-semibold rounded-xl flex items-center
                        justify-center gap-3 transition-all duration-300 transform hover:scale-[1.01] active:scale-95 mb-6 cursor-pointer"
                    >
                        <FcGoogle className="text-2xl" />
                        Sign up with Google
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-full bg-white/10"></div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">OR</span>
                        <div className="h-px w-full bg-white/10"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 ml-1 uppercase">Email Address</label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none
                                    focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 ml-1 uppercase">Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none
                                    focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 ml-1 uppercase">Confirm Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="••••••••"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none
                                    focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all flex items-center
                            justify-center gap-2 group mt-4 transform hover:scale-[1.01] cursor-pointer"
                        >
                            Create Account
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-400 text-sm">
                        Already have an account?{" "}
                        <Link to="/" className="text-cyan-400 font-bold hover:underline">
                            Login now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}