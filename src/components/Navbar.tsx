import { Link } from 'react-router-dom';
import { Menu as MenuIcon, MapPin, Download, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#DA291C] rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#FFC72C]" fill="currentColor">
              <path d="M12 18.5c-1.5 0-2.8-.5-3.8-1.4-1-.9-1.6-2.1-1.6-3.6V6c0-.6.4-1 1-1s1 .4 1 1v7.5c0 1 .4 1.8 1 2.5.7.6 1.5 1 2.4 1s1.7-.4 2.4-1c.7-.6 1-1.5 1-2.5V6c0-.6.4-1 1-1s1 .4 1 1v7.5c0 1.5-.6 2.7-1.6 3.6-1 .9-2.3 1.4-3.8 1.4z" />
              <path d="M6.6 17.1c-.8 0-1.5-.3-2.1-.8-.6-.5-.9-1.2-.9-2.1V6c0-.6.4-1 1-1s1 .4 1 1v8.2c0 .5.2.9.5 1.2.3.3.7.5 1 .5s.7-.2 1-.5c.3-.3.5-.7.5-1.2V6c0-.6.4-1 1-1s1 .4 1 1v8.2c0 .9-.3 1.6-.9 2.1-.6.5-1.3.8-2.1.8z" />
              <path d="M17.4 17.1c-.8 0-1.5-.3-2.1-.8-.6-.5-.9-1.2-.9-2.1V6c0-.6.4-1 1-1s1 .4 1 1v8.2c0 .5.2.9.5 1.2.3.3.7.5 1 .5s.7-.2 1-.5c.3-.3.5-.7.5-1.2V6c0-.6.4-1 1-1s1 .4 1 1v8.2c0 .9-.3 1.6-.9 2.1-.6.5-1.3.8-2.1.8z" />
            </svg>
          </div>
          <span className="font-bold text-xl hidden sm:block">McDonald's</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          <Link to="/menu" className="hover:text-[#DA291C] transition-colors">Our Menu</Link>
          <Link to="/deals" className="hover:text-[#DA291C] transition-colors">Deals</Link>
          <Link to="/app" className="hover:text-[#DA291C] transition-colors flex items-center gap-1">
            <Download className="w-4 h-4" /> App
          </Link>
          <Link to="/locator" className="hover:text-[#DA291C] transition-colors flex items-center gap-1">
            <MapPin className="w-4 h-4" /> Locate
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/order" className="bg-[#FFC72C] hover:bg-[#ffb700] text-black px-4 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Order Now</span>
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4 font-medium">
          <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Our Menu</Link>
          <Link to="/deals" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Deals</Link>
          <Link to="/app" onClick={() => setIsMenuOpen(false)} className="py-2 border-b flex items-center gap-2">
            <Download className="w-5 h-5" /> Download App
          </Link>
          <Link to="/locator" onClick={() => setIsMenuOpen(false)} className="py-2 border-b flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Locate
          </Link>
          <button className="py-2 flex items-center gap-2 text-left">
            <User className="w-5 h-5" /> Sign In
          </button>
        </div>
      )}
    </header>
  );
}
