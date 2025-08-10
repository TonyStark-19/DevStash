// import pages
import { Home } from "./Pages/Home";
import { Resources } from "./Pages/Resources";

// import router
import { Routes, Route } from "react-router-dom";

// Main app
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  )
}