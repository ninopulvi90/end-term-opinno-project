import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<div className="w-screen h-screen flex justify-center items-center">Ciao</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
