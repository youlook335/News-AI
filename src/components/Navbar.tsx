import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <nav className="bg-blue-950 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* 🔹 Logo */}
          <Link to="/" className="text-2xl font-bold">
            Bootpress
          </Link>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* 🌐 Mega Menu */}
          <ul className={`md:flex md:gap-6 bg-blue-950 w-full md:w-auto ${isOpen ? "block" : "hidden"}`}>
            <li>
              <Link to="/" className="block py-3 px-4">Home</Link>
            </li>

            {/* 🏆 Sports */}
            <li className="relative">
              <button className="block py-3 px-4" onClick={() => toggleMenu("sports")}>
                Sports 
              </button>
              {activeMenu === "sports" && (
                <div className="absolute left-0 mt-2 w-64 bg-blue-800 shadow-lg rounded-lg p-4 z-50">
                  <Link to="/football" className="block py-2 hover:bg-blue-900">Football</Link>
                  <Link to="/sports" className="block py-2 hover:bg-blue-900">Cricket</Link>
                  <Link to="/sports" className="block py-2 hover:bg-blue-900">Basketball</Link>
                </div>
              )}
            </li>

            {/* 🏛️ Politics */}
            <li className="relative">
              <button className="block py-3 px-4" onClick={() => toggleMenu("politics")}>
                Politics 
              </button>
              {activeMenu === "politics" && (
                <div className="absolute left-0 mt-2 w-64 bg-blue-800 shadow-lg rounded-lg p-4 z-50">
                  <Link to="/politics" className="block py-2 hover:bg-blue-900">🇺🇸 USA</Link>
                  <Link to="/politics" className="block py-2 hover:bg-blue-900">🇬🇧 UK</Link>
                  <Link to="/politics" className="block py-2 hover:bg-blue-900">🇮🇳 India</Link>
                  <Link to="/politics" className="block py-2 hover:bg-blue-900">🇨🇳 China</Link>
                  <Link to="/politics" className="block py-2 hover:bg-blue-900">Global Politics</Link>
                </div>
              )}
            </li>

            {/* 💰 Finance */}
            <li className="relative">
              <button className="block py-3 px-4" onClick={() => toggleMenu("finance")}>
                Finance 
              </button>
              {activeMenu === "finance" && (
                <div className="absolute left-0 mt-2 w-64 bg-blue-800 shadow-lg rounded-lg p-4 z-50">
                  <Link to="/finance" className="block py-2 hover:bg-blue-900">Stock Market</Link>
                  <Link to="/finance" className="block py-2 hover:bg-blue-900">Banking</Link>
                  <Link to="/finance" className="block py-2 hover:bg-blue-900">Cryptocurrency</Link>
                </div>
              )}
            </li>

            {/* 💻 Technology */}
            <li className="relative">
              <button className="block py-3 px-4" onClick={() => toggleMenu("tech")}>
                Technology 
              </button>
              {activeMenu === "tech" && (
                <div className="absolute left-0 mt-2 w-64 bg-blue-800 shadow-lg rounded-lg p-4 z-50">
                  <Link to="/technology" className="block py-2 hover:bg-blue-900">Mobile News</Link>
                  <Link to="/technology" className="block py-2 hover:bg-blue-900">Artificial Intelligence</Link>
                  <Link to="/technology" className="block py-2 hover:bg-blue-900">Science & Research</Link>
                  <Link to="/technology" className="block py-2 hover:bg-blue-900">Space Exploration</Link>
                </div>
              )}
            </li>

            <li>
              <Link to="/world-news" className="block py-3 px-4">World News</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Spacer (تاکہ Navbar Content کے اوپر نہ آئے) */}
      <div className="pt-20 relative z-0"></div>
    </>
  );
}
