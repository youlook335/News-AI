import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import Finance from "./pages/Finance";
import Technology from "./pages/Technology";
import WorldNews from "./pages/WorldNews";
import Football from "./pages/Football";
import CricketNews from "./pages/CricketNews";
import BasketballNews from "./pages/BasketballNews"
import HockeyNews from "./pages/HockeyNews"
import TennisNews from "./pages/TennisNews"  
import Boxing from "./pages/Boxing" 
import Cycling from "./pages/Cycling" 


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
        <Route path="/cricket" element={<CricketNews />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/basketball" element={<BasketballNews />} />
        <Route path="/hockey" element={<HockeyNews />} />
        <Route path="/cycling" element={<Cycling />} />
        <Route path="/tennis" element={<TennisNews />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/world-news" element={<WorldNews />} />
      </Routes>
    </Router>
  );
}

export default App;
