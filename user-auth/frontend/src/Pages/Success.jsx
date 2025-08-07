// react-icons
import { SiTicktick } from "react-icons/si";

// import use effect and use navigate
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Success page
export function Success() {
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const navigate = useNavigate();

    // remove token when logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen"
                style={{
                    background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
                }}>
                <div className="text-center flex justify-center items-center flex-col bg-[#350136]/40 rounded-2xl 
                text-gray-300 min-c:w-[700px] max-c:w-[90%] min-c:p-8 max-c:py-6 max-c:px-6" data-aos="fade-down">
                    <SiTicktick className="text-green-400 text-3xl mb-5" />
                    <h1 className="min-c:text-3xl max-c:text-[26px] font-semibold uppercase mb-3">Login Successful</h1>
                    <p className="mb-5 min-c:text-[19px] max-c:text-[17px]">You have successfully signed into your account. If you want to check
                        authentication, logout from below button and login this time!
                    </p>
                    <button className="py-1.5 px-5 rounded-lg bg-red-500 hover:bg-red-600 transition cursor-pointer"
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}