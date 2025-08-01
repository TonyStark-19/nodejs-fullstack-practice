// import use effect and use state
import { useEffect, useState } from "react";

// app function
export default function App() {
  // State to hold the current quote
  const [quote, setQuote] = useState("Loading...");

  // Function to fetch a random quote from the backend
  const getQuote = async () => {
    try {
      // render deploy link
      const res = await fetch("https://nodejs-fullstack-practice.onrender.com/api/quote");
      const data = await res.json();
      setQuote(data.quote); // Update the quote in UI
    } catch (error) {
      setQuote("Failed to fetch quote.");
      console.error("Error fetching quote:", error);
    }
  };

  // Fetch a quote on first render
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-indigo-300">
      <div className="rounded-xl flex justify-center items-center flex-col text-black bg-slate-100 font-sans
      min-a:w-[700px] min-a:py-8 min-a:px-10 max-a:py-5 max-a:px-6 max-a:w-[90%]">
        <h1 className="font-semibold min-b:pb-5 max-b:pb-3 min-b:text-[32px] max-b:text-[26px] relative after:content-[''] 
        after:block after:w-30 after:h-1 after:bg-blue-500 after:mt-2 after:mb-3 after:rounded-full after:mx-auto">
          Quote of the day
        </h1>

        <p className="text-center min-a:pb-10 max-a:pb-8 min-a:text-[25px] min-a:leading-10 max-a:text-[22px] max-a:leading-8">
          "{quote}"
        </p>

        <button
          onClick={getQuote}
          className="text-lg rounded-4xl cursor-pointer bg-blue-500 hover:bg-blue-700 transition text-white
          min-a:py-2 min-a:px-7 max-a:py-1.5 max-a:px-5">New Quote</button>
      </div>
    </div>
  )
}