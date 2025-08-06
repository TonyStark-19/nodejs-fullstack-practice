// import login, signup and success pages
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Success } from "./Pages/Success";

// import router
import { Routes, Route } from "react-router-dom";

// Main app
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}