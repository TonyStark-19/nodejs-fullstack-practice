// import navbar
import { Navbar } from "./components/Navbar";

// import left bar component
import { Left } from "./components/Left";

// Main app function
export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row h-full">
        <Left />
      </div>
    </>
  )
}