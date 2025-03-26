import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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
import Australia from "./pages/Australia"
import Forex from "./pages/Forex"
import Italy from "./pages/Italy"
import Canada from "./pages/Canada"
import New_zealand from "./pages/New_zealand"
import China from "./pages/China"
import France from "./pages/France"
import Germany from "./pages/Germany"
import Saudi_arabia from "./pages/Saudi_arabia"
import Japan from "./pages/Japan"
import Turkey from "./pages/Turkey"
import NewsDetail from "./pages/NewsDetail";
import Footer from "./components/Footer";
import LiveNews from "./pages/LiveNews";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/news/:index" element={<NewsDetail />} />
        {/* <Route path="/Lives" element={<LiveNews />} /> */}
        {/* Politics */}
        <Route path="/Uk" element={<Uk />} />
        <Route path="/Us" element={<Us />} />
        <Route path="/New Zealand" element={<New_zealand />} />
        <Route path="/India" element={<India />} />
        <Route path="/Pakistan" element={<Pakistan />} />
        <Route path="/Bangladesh" element={<Bangladesh />} />
        <Route path="/Germany" element={<Germany />} />
        <Route path="/Italy" element={<Italy />} />
        <Route path="/China" element={<China />} />
        <Route path="/Canada" element={<Canada />} />
        <Route path="/Australia" element={<Australia />} />
        <Route path="/Japan" element={<Japan />} />
        <Route path="/France" element={<France />} />
        <Route path="/Saudi_arabia" element={<Saudi_arabia />} />
        <Route path="/Turkey" element={<Turkey />} />

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
