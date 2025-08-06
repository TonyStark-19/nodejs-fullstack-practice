// import Link and use navigate
import { Link, useNavigate } from "react-router-dom";

// import axios
import axios from 'axios';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import useeffect and use state
import { useEffect, useState } from "react";

// Sign up page
export function Signup() {
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const navigate = useNavigate();

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
            const res = await axios.post("http://localhost:5000/api/auth/signup", { email, password });
            localStorage.setItem("token", res.data.token); // Store JWT
            navigate("/success");
        } catch (err) {
            console.error(err);
            alert("Signup failed: " + err.response.data.message);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen"
                style={{
                    background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
                }}>
                <div className="bg-[#350136]/40 w-[500px] p-8 rounded-2xl text-gray-300" data-aos="fade-down">
                    <h1 className="text-4xl mb-8 font-bold">Signup</h1>

                    <form className="flex flex-col" onSubmit={handleSubmit}>

                        <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            required
                            autoComplete="email"
                            className="border-1 border-gray-400 rounded-md p-3 mb-6"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-300">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="border-1 border-gray-400 rounded-md p-3 mb-6"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-300">Confirm password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            required
                            className="border-1 border-gray-400 rounded-md p-3 mb-6"
                            value={formData.confirmPassword}
                            onChange={handleChange}
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