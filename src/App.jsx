import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import Finance from "./pages/Finance";
import Technology from "./pages/Technology";
import WorldNews from "./pages/WorldNews";
import Football from "./pages/Football";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/football" element={<Football />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/world-news" element={<WorldNews />} />
      </Routes>
    </Router>
  );
}

export default App;
