// import components
import { Home } from "./Pages/Home";

// import router
import { Routes, Route } from "react-router-dom";

// Main app
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}