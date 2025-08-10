import { Link } from "react-router-dom";
import { FiHome, FiBarChart2, FiClock, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../../assets/FT.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="FinTrack Logo" className="h-8 w-8" />
        <span className="text-2xl font-bold text-blue-600">FinTrack</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center text-sm font-medium">
        <Link
          to="/"
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
        >
          <FiHome className="text-lg" />
          Home
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
        >
          <FiBarChart2 className="text-lg" />
          Dashboard
        </Link>
        <Link
          to="/history"
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
        >
          <FiClock className="text-lg" />
          History
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md flex flex-col gap-4 px-6 py-4 md:hidden z-50">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <FiHome /> Home
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <FiBarChart2 /> Dashboard
          </Link>
          <Link
            to="/history"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <FiClock /> History
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
