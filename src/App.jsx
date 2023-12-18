import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";

export default function App() {
  return <div className="flex justify-center dark:bg-[url(src/assets/sfondoScuro.png)] bg-smp-white bg-[url(src/assets/sfndoAz.png)] bg-cover bg-no-repeat bg-fixed">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
}
