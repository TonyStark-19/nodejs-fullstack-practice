// import use effect and use state
import { useEffect, useState } from "react";

// app function
export default function App() {
  // State to hold the current quote
  const [quote, setQuote] = useState("Loading...");

  // Function to fetch a random quote from the backend
  const getQuote = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/quote");
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
    <div className="w-full h-screen flex justify-center items-center bg-zinc-900">
      <div className="rounded-xl py-6 px-10 flex justify-center items-center flex-col w-[800px]
      text-white bg-zinc-800">
        <h1 className="text-5xl font-bold pb-7">Quote Generator App!</h1>

        <p className="text-3xl pb-7 text-center leading-10">{quote}</p>

        <button
          onClick={getQuote}
          className="text-xl py-2 px-3 rounded-2xl cursor-pointer
          border-2 outline-none border-white">Get New Quote</button>
      </div>
    </div>
  )
}