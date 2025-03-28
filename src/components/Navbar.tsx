import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // 300ms delay
    setDropdownTimeout(timeout);
  };

  return (
    <>
      {/* 🔥 Gradient Navbar */}
      <nav className="bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* 🔹 Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider hover:text-gray-300 transition duration-300">
            Bootpress
          </Link>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* 🌐 Mega Menu */}
          <ul
            className={`md:flex md:gap-6 w-full md:w-auto transition-all duration-500 ${isOpen ? "block" : "hidden"
              }`}
          >
            <li>
              <Link to="/" className="block py-3 px-4 hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>

            {/* 🏆 Sports */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("sports")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="block py-3 px-4 hover:text-gray-300 transition duration-300"
                onClick={() => setActiveMenu(activeMenu === "sports" ? null : "sports")}
              >
                Sports
              </button>
              <div
                className={`absolute left-0 mt-2 w-64 bg-white text-black shadow-xl rounded-xl p-4 z-50 transition-all duration-300 ${activeMenu === "sports" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
              >
                <Link to="/football" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Football
                </Link>
                <Link to="/cricket" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Cricket
                </Link>
                <Link to="/basketball" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Basketball
                </Link>
                <Link to="/hockey" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Hockey
                </Link>
                <Link to="/boxing" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Boxing
                </Link>
                <Link to="/cycling" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Cycling
                </Link>
                <Link to="/tennis" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Tennis
                </Link>
              </div>


            </li>

            {/* 🏛️ Politics */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("politics")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="block py-3 px-4 hover:text-gray-300 transition duration-300"
                onClick={() => setActiveMenu(activeMenu === "politics" ? null : "politics")}
              >
                Politics
              </button>

              <div
                className={`absolute left-0 mt-2 w-64 bg-white text-black shadow-xl rounded-xl p-4 z-50 
      transition-all duration-500 transform 
      ${activeMenu === "politics" ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"}`}
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                <div className="max-h-60 overflow-y-auto 
        scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full 
        hover:scrollbar-thumb-blue-700 transition-all duration-300">

                  <Link to="/Pakistan" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇵🇰 Pakistan
                  </Link>
                  <Link to="/Us" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇺🇸 USA
                  </Link>
                  <Link to="/Uk" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇬🇧 UK
                  </Link>
                  <Link to="/India" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇮🇳 India
                  </Link>
                  <Link to="/Bangladesh" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇧🇩 Bangladesh
                  </Link>
                  <Link to="/China" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇨🇳 China
                  </Link>
                  <Link to="/Japan" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇯🇵 Japan
                  </Link>
                  <Link to="/Saudi_Arabia" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇸🇦 Saudi Arabia
                  </Link>
                  <Link to="/Turkey" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇹🇷 Turkey
                  </Link>
                  <Link to="/France" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇫🇷 France
                  </Link>
                  <Link to="/Germany" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇩🇪 Germany
                  </Link>
                  <Link to="/Italy" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇮🇹 Italy
                  </Link>
                  <Link to="/New_Zealand" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇳🇿 New Zealand
                  </Link>
                  <Link to="/Canada" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇨🇦 Canada
                  </Link>
                  <Link to="/Australia" className="block py-2 hover:bg-gray-100 rounded-lg px-3 transition">
                    🇦🇺 Australia
                  </Link>
                </div>
              </div>
            </li>


            {/* 💰 Finance */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("finance")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="block py-3 px-4 hover:text-gray-300 transition duration-300"
                onClick={() => setActiveMenu(activeMenu === "finance" ? null : "finance")}
              >
                Finance
              </button>
              <div
                className={`absolute left-0 mt-2 w-64 bg-white text-black shadow-xl rounded-xl p-4 z-50 transition-all duration-300 ${activeMenu === "finance" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
              >
                <Link to="/stock-market" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Stock Market
                </Link>
                <Link to="/banking" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Banking
                </Link>
                <Link to="/crypto" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Crypto
                </Link>
                <Link to="/real-estate" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Real-estate
                </Link>
                <Link to="/Forex" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Forex Market
                </Link>
              </div>
            </li>

            {/* 🔬 Technology */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("technology")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="block py-3 px-4 hover:text-gray-300 transition duration-300"
                onClick={() => setActiveMenu(activeMenu === "technology" ? null : "technology")}
              >
                Technology
              </button>
              <div
                className={`absolute left-0 mt-2 w-64 bg-white text-black shadow-xl rounded-xl p-4 z-50 transition-all duration-300 ${activeMenu === "technology" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
              >
                <Link to="/Machine learning" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Machine Learning
                </Link>
                <Link to="/Gadgets" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Gadgets
                </Link>
                <Link to="/Software" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Software Development
                </Link>
                <Link to="/Ai Updates" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Updates AI 
                </Link>
                <Link to="/Technews" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                  Tech News
                </Link>
                <Link to="/startups" className="block py-2 hover:bg-gray-200 rounded-lg px-3 transition">
                Startups
                </Link>
              </div>
            </li>


            <li>

              <Link to="/world-news" className="block py-3 px-4 hover:text-gray-300 transition duration-300">
                World News
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Spacer (تاکہ Navbar Content کے اوپر نہ آئے) */}
      <div className="pt-20 relative z-0"></div>
    </>
  );
}
