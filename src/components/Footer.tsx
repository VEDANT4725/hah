
import React from "react";
import { Instagram, Facebook, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-800 text-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-indigo-300 transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-indigo-300 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-indigo-300 transition"
          >
            <Github size={24} />
          </a>
        </div>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Dance Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;