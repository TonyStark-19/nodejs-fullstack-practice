// import navbar
import { Navbar } from "./components/Navbar";

// import left bar component
import { Left } from "./components/Left";

// import Right column component
import { Right } from "./components/Right";

// Main app function
export default function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-row h-full w-full bg-[#000000] pt-17 overflow-hidden">
        <Left />
        <Right />
      </div>
    </div>
  )
}