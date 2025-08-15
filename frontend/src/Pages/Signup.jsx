// import Link
import { Link } from "react-router-dom";

// Signup page
export function Signup() {
    return (
        <div
            className="flex justify-center items-center h-screen"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}
        >
            <div className="flex flex-row bg-[#06B6D440]/20 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 
            w-[1000px] font-poppins">

                {/* Left side - Image & Intro */}
                <div className="w-1/2 bg-gradient-to-b from-cyan-500/20 to-cyan-700/20 py-8 px-6 flex flex-col 
                justify-center items-center text-white">
                    <img
                        src="/images/Login/SideBox.png"
                        alt="Developer at work"
                        className="w-90 h-auto mb-6"
                    />
                    <h2 className="text-3xl font-bold mb-4">Welcome to DevStash</h2>
                    <p className="text-[17px] mb-2 text-center text-gray-300">
                        Your personal hub for curated tech & coding resources.
                        Discover top-notch tutorials, tools, and guides — all in one place.
                    </p>
                </div>

                {/* Right box - Signup Form */}
                <div className="w-1/2 p-8 text-gray-300" data-aos="fade-down">
                    <h1 className="text-4xl mb-8 font-bold">Sign up</h1>

                    <form className="flex flex-col">
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
                        />

                        <button
                            type="submit"
                            className="py-2.5 px-4 bg-[#06B6D440]/60 hover:bg-[#06B6D440]/80 text-gray-300 font-semibold 
                            rounded-md cursor-pointer transition mb-6"
                        >
                            Sign up
                        </button>
                    </form>

                    <div className="flex justify-center items-center text-[17px]">
                        <p>Already have an account?</p>
                        <Link to="/home" className="ml-2 hover:underline text-cyan-500/70">
                            Login now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}