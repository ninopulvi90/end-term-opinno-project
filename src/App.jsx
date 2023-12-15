import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";


export default function App() {
  return <div className="flex justify-center">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
  </div>
}
