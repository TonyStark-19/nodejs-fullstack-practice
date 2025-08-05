// import Link
import { Link } from "react-router-dom";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import useeffect
import { useEffect } from "react";

// Sign up page
export function Signup() {
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <>
            <div className="flex justify-center items-center h-screen"
                style={{
                    background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
                }}>
                <div className="bg-[#350136]/40 w-[500px] p-8 rounded-2xl text-gray-300" data-aos="fade-down">
                    <h1 className="text-4xl mb-8 font-bold">Signup</h1>

                    <form className="flex flex-col">

                        <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            required
                            autoComplete="email"
                            className="border-1 border-gray-400 rounded-md p-3 mb-6"
                        />

                        <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-300">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="border-1 border-gray-400 rounded-md p-3 mb-6"
                        />

                        <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-300">Confirm password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm password"
                            required
                            className="border-1 border-gray-400 rounded-md p-3 mb-6"
                        />

                        <button
                            type="submit"
                            className="py-2.5 px-4 bg-[#350136]/50 hover:bg-[#350136]/80 text-gray-300 font-semibold 
                            rounded-md cursor-pointer transition mb-6">
                            Sign up
                        </button>
                    </form>

                    <p className="text-center text-[17px]">Already have an account?
                        <Link to="/login" className="ml-2 hover:underline text-fuchsia-500/70">Login now</Link>
                    </p>
                </div>
            </div>
        </>
    )
}