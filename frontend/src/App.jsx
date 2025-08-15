// import pages
import { Home } from "./Pages/Home";
import { Resources } from "./Pages/Resources";
import { React } from "./Pages/React";
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
      <Route path="/home" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/react" element={<React />} />
    </Routes>
  )
}