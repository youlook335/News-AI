import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import Technology from "./pages/Technology";
import WorldNews from "./pages/WorldNews";
import Football from "./pages/Football";
import CricketNews from "./pages/CricketNews";
import BasketballNews from "./pages/BasketballNews"
import HockeyNews from "./pages/HockeyNews"
import TennisNews from "./pages/TennisNews"  
import Boxing from "./pages/Boxing" 
import Cycling from "./pages/Cycling" 
import StockMarketNews from "./pages/StockMarketNews" 
import CryptoNews from "./pages/CryptoNews" 
import BankingNews from "./pages/BankingNews" 
import RealEstateNews from "./pages/RealEstateNews" 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Politics */}
        <Route path="/politics" element={<Politics />} />
        {/* Sports */}
        <Route path="/sports" element={<Sports />} />
        <Route path="/football" element={<Football />} />
        <Route path="/cricket" element={<CricketNews />} />
        <Route path="/basketball" element={<BasketballNews />} />
        <Route path="/hockey" element={<HockeyNews />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/cycling" element={<Cycling />} />
        <Route path="/tennis" element={<TennisNews />} />
        {/* Technology */}
        <Route path="/technology" element={<Technology />} />
        
        {/* Finannce */}
        <Route path="/stock-market" element={<StockMarketNews />} />
        <Route path="/crypto" element={<CryptoNews />} />
        <Route path="/real-estate" element={<RealEstateNews />} />;
        <Route path="/banking" element={<BankingNews />} />

        {/* World News */}
        <Route path="/world-news" element={<WorldNews />} />
      </Routes>
    </Router>
  );
}

export default App;
