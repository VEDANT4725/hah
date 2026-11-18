
import React, { useState } from "react";
import { Home, Info, Users, Calendar, User, Mail } from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", icon: <Home size={18} />, href: "#home" },
    { label: "About", icon: <Info size={18} />, href: "#about" },
    { label: "Classes", icon: <Users size={18} />, href: "#classes" },
    { label: "Schedule", icon: <Calendar size={18} />, href: "#schedule" },
    { label: "Instructors", icon: <User size={18} />, href: "#instructors" },
    { label: "Contact", icon: <Mail size={18} />, href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-indigo-600">
          Dance Studio
        </a>
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;