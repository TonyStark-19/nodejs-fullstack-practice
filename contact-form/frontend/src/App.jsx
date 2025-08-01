// import use effect and use state
import { useEffect, useState } from "react";

// import react toast
import toast, { Toaster } from 'react-hot-toast';

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import axios
import axios from "axios";

// Contact form app
export default function App() {
  // AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);

      if (response.status >= 200 && response.status < 300) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong!");
      }

    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <>
      {/* Toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="absolute inset-0 z-0 flex justify-center items-center"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
        }}>
        <div className="text-gray-300 bg-[#0d1a36]/30 rounded-2xl min-sm:w-[550px] max-sm:w-[90%]
        min-a:p-8 max-a:p-4" data-aos="fade-down">
          <h1 className="min-a:text-4xl max-a:text-[32px] font-bold min-a:mb-8 max-a:mb-6">Contact Form</h1>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="border-1 border-gray-400 rounded-md p-3 mb-6"
            />

            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="border-1 border-gray-400 rounded-md p-3 mb-6"
            />

            <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write message here...."
              rows={5}
              required
              value={formData.message} onChange={handleChange}
              className="border-1 border-gray-400 rounded-md p-3 mb-6 resize-none"
            />

            <button
              type="submit"
              className="py-2.5 px-4 bg-[#0d1a36]/50 hover:bg-[#0d1a36]/80 text-gray-300 font-semibold rounded-md
            cursor-pointer transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}