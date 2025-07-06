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
      min-a:w-[800px] min-a:py-8 min-a:px-10 max-a:w-[600px] max-a:py-6 max-a:px-6 max-b:w-[400px] max-c:w-[300px]">
        <h1 className="font-semibold min-b:pb-7 max-b:pb-5
        min-b:text-4xl max-b:text-3xl">Quote of the day</h1>

        <p className="text-center min-a:pb-10 max-a:pb-8
        min-a:text-3xl min-a:leading-10 max-a:text-2xl max-a:leading-8">{quote}</p>

        <button
          onClick={getQuote}
          className="text-lg rounded-4xl cursor-pointer bg-blue-500 text-white
          min-a:py-2 min-a:px-7 max-a:py-1.5 max-a:px-5">New Quote</button>
      </div>
    </div>
  )
}