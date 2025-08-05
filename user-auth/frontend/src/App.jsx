// import login and signup pages
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

// import router
import { Routes, Route } from "react-router-dom";

// Main app
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}