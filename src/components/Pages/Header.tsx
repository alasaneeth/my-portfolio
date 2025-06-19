import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      <a href="#" className="text-xl font-bold">alasaneeth</a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-gray-900 md:hidden z-40">
          <ul className="flex flex-col items-center gap-4 py-6 text-white font-medium">
            <li><a href="#" onClick={toggleMenu}>Home</a></li>
            <li><a href="#" onClick={toggleMenu}>About</a></li>
            <li><a href="#" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#" onClick={toggleMenu}>Contacts</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
