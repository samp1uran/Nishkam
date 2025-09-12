import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1a2433] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Niskam Bansal</h2>
          <p className="text-sm leading-relaxed">
            Your trusted partner in financial success. We provide expert
            accounting, tax, and advisory services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/query" className="hover:text-white">Query</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-white text-xl"><FaFacebookF /></Link>
            <Link to="/" className="hover:text-white text-xl"><FaTwitter /></Link>
            <Link to="/" className="hover:text-white text-xl"><FaLinkedinIn /></Link>
            <Link to="/" className="hover:text-white text-xl"><FaInstagram /></Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded bg-gray-700 text-sm text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#f39c12] hover:bg-[#e67e22] text-white py-2 rounded font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2024 Niskam Bansal & Associates. All Rights Reserved.
      </div>
    </footer>
  );
}
