import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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
import Uk from "./pages/Uk"
import Us from "./pages/Us"
import Pakistan from "./pages/Pakistan"
import Bangladesh from "./pages/Bangladesh"
import India from "./pages/India"
import Forex from "./pages/Forex"
import NewsDetail from "./pages/NewsDetail";
import Footer from "./components/Footer";
import LiveNews from "./services/LiveNews";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:index" element={<NewsDetail />} />
        {/* <Route path="/Lives" element={<LiveNews />} /> */}
        {/* Politics */}
        {/* <Route path="/politics" element={<Politics />} /> */}
        <Route path="/Uk" element={<Uk />} />
        <Route path="/Us" element={<Us />} />
        <Route path="/India" element={<India />} />
        <Route path="/Pakistan" element={<Pakistan />} />
        <Route path="/Bangladesh" element={<Bangladesh />} />

        {/* Sports */}
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
        <Route path="/real-estate" element={<RealEstateNews />} />
        <Route path="/banking" element={<BankingNews />} />
        <Route path="/forex" element={<Forex />} />

        {/* World News */}
        <Route path="/world-news" element={<WorldNews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
