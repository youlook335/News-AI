import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-700 to-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide">Bootpress</h2>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Stay updated with the latest news from around the world. Bringing you the most authentic and trending stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/politics" label="Politics" />
              <FooterLink to="/finance" label="Finance" />
              <FooterLink to="/technology" label="Technology" />
              <FooterLink to="/world-news" label="World News" />
            </ul>
          </div>

          {/* More Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">More Pages</h3>
            <ul className="space-y-3">
              <FooterLink to="/cricket" label="Cricket" />
              <FooterLink to="/football" label="Football" />
              <FooterLink to="/hockey" label="Hockey" />
              <FooterLink to="/boxing" label="Boxing" />
              <FooterLink to="/tennis" label="Tennis" />
              <FooterLink to="/forex" label="Forex Market" />
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-5 text-3xl">
              <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} />
              <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
              <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
              <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} />
              <SocialIcon href="https://youtube.com" icon={<FaYoutube />} />
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-300 border-t border-gray-600 mt-8 pt-4">
          <p>© {new Date().getFullYear()} Bootpress. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Reusable FooterLink Component
const FooterLink = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="text-gray-300 hover:text-white hover:underline transition duration-300">
        {label}
      </Link>
    </li>
  );
};

// Social Media Icon Component with Hover Effects
const SocialIcon = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white hover:scale-125 hover:shadow-lg transition duration-300 ease-in-out transform"
    >
      {icon}
    </a>
  );
};

export default Footer;
