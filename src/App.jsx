import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";


export default function App() {
  return <div className="flex justify-center dark:bg-smp-black bg-smp-white bg-[url(https://picsum.photos/2000/1500)]">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  </div>
}
