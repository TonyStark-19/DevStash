// import icons
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

// import link
import { Link } from "react-router-dom";

// login form component
export default function LoginForm({ handleGoogleLogin, handleSubmit, formData, handleChange }) {
    return (
        <div className="p-6 md:p-10 flex flex-col justify-center order-2 lg:order-1">
            <div className="mb-6 text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-1.5">Welcome Back</h1>
                <p className="text-slate-400 text-sm">Enter your details to access your stash.</p>
            </div>

            {/* Google Button */}
            <button
                type="button"
                onClick={() => handleGoogleLogin()}
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-black text-sm font-semibold rounded-xl flex items-center justify-center
                gap-3 transition-all duration-300 transform hover:scale-[1.01] active:scale-95 mb-5 shadow-lg shadow-white/5 cursor-pointer"
            >
                <FcGoogle className="text-xl" />
                Login with Google
            </button>

            <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-full bg-white/10"></div>
                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">OR</span>
                <div className="h-px w-full bg-white/10"></div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-500 ml-1 uppercase tracking-wider">Email Address</label>

                    <div className="relative">
                        <FiMail
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-base transition-colors 
                            group-focus-within:text-cyan-400"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="dev@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white outline-none
                            focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Password</label>
                    </div>

                    <div className="relative">
                        <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-base" />

                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white outline-none
                            focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm rounded-xl transition-all flex items-center
                    justify-center gap-2 group mt-3 transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                    Sign In
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform text-base" />
                </button>
            </form>

            <p className="mt-6 text-center text-slate-400 text-xs">
                Don't have an account yet?{" "}
                <Link
                    to="/signup"
                    className="text-cyan-400 font-bold hover:underline"
                >
                    Create one
                </Link>
            </p>
        </div>
    )
}