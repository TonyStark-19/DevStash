import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from "../utils/api";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login", formData);
            login(res.data.token);
            toast.success("Welcome back! 👋");
            navigate("/home", { replace: true });
        } catch (err) {
            toast.error(err.response?.data?.message || "Invalid credentials");
        }
    };

    const handleGoogleLogin = () => {
        toast.loading("Connecting to Google...");
        // Google auth logic here
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 font-poppins relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

            <div
                className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md shadow-2xl"
                data-aos="zoom-in"
            >
                {/* Left Side: Login Form */}
                <div className="p-8 md:p-14 flex flex-col justify-center order-2 lg:order-1">
                    <div className="mb-10 text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-slate-400">Enter your details to access your stash.</p>
                    </div>

                    {/* Google Button */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-black font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.01] active:scale-95 mb-6 shadow-lg shadow-white/5"
                    >
                        <FcGoogle className="text-2xl" />
                        Login with Google
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-full bg-white/10"></div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">OR</span>
                        <div className="h-px w-full bg-white/10"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="dev@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                                <Link to="/forgot-password" size="sm" className="text-[11px] text-cyan-500 hover:text-cyan-400 font-bold uppercase">Forgot?</Link>
                            </div>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 group mt-4 transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-cyan-500/20"
                        >
                            Sign In
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-400 text-sm">
                        Don't have an account yet?{" "}
                        <Link to="/signup" className="text-cyan-400 font-bold hover:underline">
                            Create one
                        </Link>
                    </p>
                </div>

                {/* Right Side: Visual/Branding */}
                <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-tl from-cyan-500/10 to-transparent border-l border-white/5 order-1 lg:order-2">
                    <div className="mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center text-black font-extrabold text-2xl mb-6 shadow-xl shadow-cyan-500/20">D</div>
                        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                            Your Dev Journey, <br />
                            <span className="text-cyan-400 font-extrabold">Organized.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Sign in to access your saved tutorials, favorite tools, and community contributions.
                        </p>
                    </div>

                    <div className="relative mt-auto">
                        <img
                            src="/images/Login/SideBox.png"
                            alt="Login Illustration"
                            className="w-full h-auto opacity-90 drop-shadow-[0_20px_50px_rgba(6,182,212,0.2)] animate-float"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}