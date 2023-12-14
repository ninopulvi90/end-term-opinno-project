import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return <div className="flex justify-center">
      <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
  </div>
}
