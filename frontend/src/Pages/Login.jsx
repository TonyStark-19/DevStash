import { Link } from "react-router-dom";

export function Login() {
    return (
        <div
            className="flex justify-center items-center h-screen px-4"
            style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}
        >
            <div className="flex flex-col md:flex-row bg-black/50 rounded-2xl overflow-hidden max-w-4xl w-full 
            shadow-2xl shadow-cyan-500/20">

                {/* Left: Login form */}
                <div className="bg-[#06B6D440]/40 p-8 flex-1 text-gray-300">
                    <h1 className="text-4xl mb-8 font-bold">Login</h1>

                    <form className="flex flex-col">

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
                        />

                        <button
                            type="submit"
                            className="py-2.5 px-4 bg-[#06B6D440]/60 hover:bg-[#06B6D440]/80 text-gray-300 font-semibold
                            rounded-md cursor-pointer transition mb-6"
                        >
                            Login
                        </button>
                    </form>

                    <div className="flex flex-row justify-center items-center text-[17px]">
                        <p>Don't have an account?</p>
                        <Link to="/" className="ml-2 hover:underline text-cyan-500/70">
                            Sign up now
                        </Link>
                    </div>
                </div>

                {/* Right: Side welcome box */}
                <div className="bg-gradient-to-b from-cyan-500/20 to-cyan-700/20 flex flex-col justify-center items-center
                py-8 px-6 flex-1">
                    <img
                        src="/images/Login/SideBox.png"
                        alt="Developer at desk"
                        className="w-80 mb-6"
                    />
                    <h2 className="text-3xl font-bold mb-3 text-white">Welcome Back</h2>
                    <p className="text-gray-300 text-[17px] mb-2 text-center">
                        Access your DevStash account to continue exploring top-notch tutorials,
                        tools, and resources — all in one place.
                    </p>
                </div>
            </div>
        </div>
    );
}