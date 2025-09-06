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

// import toast
import toast from "react-hot-toast";

export function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    // form entires
    const [formData, setFormData] = useState({ email: "", password: "" });

    // handle change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/auth/login", formData);
            login(res.data.token);

            // ✅ Success toast
            toast.success("Login successful!");

            // ✅ Redirect to home
            navigate("/home", { replace: true });
        } catch (err) {
            console.error(err);
            // ❌ Error toast
            toast.error(err.response?.data?.message || "Something went wrong");
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
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}
        >
            <div className="flex min-c:flex-row max-c:flex-col-reverse bg-black/50 rounded-2xl overflow-hidden font-poppins
            shadow-2xl shadow-cyan-500/20 min-a:w-[950px] max-a:w-[90%] max-b:w-[95%]" data-aos="fade-down">

                {/* Left: Login form */}
                <div className="bg-[#06B6D440]/40 min-d:p-8 max-d:py-6 max-d:px-5 flex-1 text-gray-300">
                    <h1 className="min-b:text-4xl max-b:text-[32px] max-d:text-[28px] mb-8 font-bold">Login</h1>

                    <form className="flex flex-col" onSubmit={handleSubmit}>

                        <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">
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

                        <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-300">
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

                        <button
                            type="submit"
                            className="py-2.5 px-4 bg-[#06B6D440]/60 hover:bg-[#06B6D440]/80 text-gray-300 font-semibold
                            rounded-md cursor-pointer transition mb-6"
                        >
                            Login
                        </button>
                    </form>

                    <div className="flex min-f:flex-row max-f:flex-col justify-center items-center min-d:text-[17px]
                    max-d:text-[16px] max-f:text-[17px]">
                        <p>Don't have an account?</p>
                        <Link to="/signup" className="ml-2 hover:underline text-cyan-500/70">
                            Sign up now
                        </Link>
                    </div>
                </div>

                {/* Right: Side welcome box */}
                <div className="bg-gradient-to-b from-cyan-500/20 to-cyan-700/20 flex flex-col justify-center items-center
                min-d:py-8 max-d:py-4 min-d:px-6 max-d:px-3 flex-1 text-gray-300">
                    <img
                        src="/images/Login/SideBox.png"
                        alt="Developer at desk"
                        className="min-d:w-80 max-d:w-70 mb-6"
                    />
                    <h2 className="min-a:text-3xl max-a:text-[26px] max-f:text-2xl font-bold mb-4">Welcome Back</h2>
                    <p className="min-a:text-[17px] max-a:text-[16px] max-d:text-[15px] mb-2 text-center max-c:w-[80%]
                    max-f:w-[90%]">
                        Access your DevStash account to continue exploring top-notch tutorials,
                        tools, and resources — all in one place.
                    </p>
                </div>
            </div>
        </div>
    );
}