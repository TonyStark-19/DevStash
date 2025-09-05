// import Link and use navigate
import { Link, useNavigate } from "react-router-dom";

// import axios
import axios from 'axios';

// import useState and useEffect
import { useState, useEffect } from "react";

// import context
import { useAuth } from "../Context/AuthContext";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import axios instance
import api from "../utils/api";

// Signup page
export function Signup() {
    const navigate = useNavigate();
    const { login } = useAuth();

    // form entries
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    // handle change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password, confirmPassword } = formData;

        // if passowrd do not match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await api.post("/auth/signup", { email, password });
            login(res.data.token);

            // ✅ Redirect to home
            navigate("/home", { replace: true });
        } catch (err) {
            console.error(err);
            alert("Signup failed: " + (err.response?.data?.message || "Something went wrong"));
        }
    };

    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div
            className="flex justify-center items-center min-h-screen px-4 max-c:py-10"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}
        >
            <div className="flex min-g:flex-row max-g:flex-col bg-[#06B6D440]/20 rounded-2xl overflow-hidden shadow-2xl
            shadow-cyan-500/20 min-a:w-[1000px] max-a:w-[90%] max-b:w-[95%] font-poppins" data-aos="fade-down">

                {/* Left side - Image & Intro */}
                <div className="min-g:w-1/2 max-g:w-full bg-gradient-to-b from-cyan-500/20 to-cyan-700/20 flex flex-col 
                min-d:py-8 max-d:py-4 min-d:px-6 max-d:px-3 justify-center items-center text-gray-300">
                    <img
                        src="/images/Login/SideBox.png"
                        alt="Developer at work"
                        className="w-90 h-auto mb-6"
                    />
                    <h2 className="min-a:text-3xl max-a:text-[26px] max-f:text-2xl font-bold mb-4 text-center">
                        Welcome to DevStash</h2>
                    <p className="min-a:text-[17px] max-a:text-[16px] max-d:text-[15px mb-2 text-center max-c:w-[80%]
                    max-g:w-[90%]">
                        Your personal hub for curated tech & coding resources.
                        Discover top-notch tutorials, tools, and guides — all in one place.
                    </p>
                </div>

                {/* Right box - Signup Form */}
                <div className="min-g:w-1/2 max-g:w-full min-d:p-8 max-d:py-6 max-d:px-5 text-gray-300 flex-1">
                    <h1 className="min-b:text-4xl max-b:text-[32px] max-d:text-[28px] mb-8 font-bold">Sign up</h1>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="mb-2 text-sm font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            required
                            autoComplete="email"
                            className="border border-gray-400 rounded-md p-3 mb-6 bg-transparent"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label htmlFor="password" className="mb-2 text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="border border-gray-400 rounded-md p-3 mb-6 bg-transparent"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <label htmlFor="confirm-password" className="mb-2 text-sm font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            required
                            className="border border-gray-400 rounded-md p-3 mb-6 bg-transparent"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="py-2.5 px-4 bg-[#06B6D440]/60 hover:bg-[#06B6D440]/80 text-gray-300 font-semibold 
                            rounded-md cursor-pointer transition mb-6"
                        >
                            Sign up
                        </button>
                    </form>

                    <div className="flex min-f:flex-row max-f:flex-col justify-center items-center min-d:text-[17px]
                    max-d:text-[16px] max-f:text-[17px]">
                        <p>Already have an account?</p>
                        <Link to="/" className="ml-2 hover:underline text-cyan-500/70">
                            Login now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}