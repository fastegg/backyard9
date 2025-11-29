import React, { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { GithubConfig } from '../types';

interface Props {
  onOpenSettings: () => void;
}

const Layout: React.FC<Props> = ({ onOpenSettings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Goals', path: '/goals' },
    { name: 'Planning', path: '/planning' },
    { name: 'Building', path: '/building' },
    { name: 'Playing', path: '/playing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="w-8 h-8 bg-golf-600 rounded-full flex items-center justify-center text-white font-bold font-serif border-2 border-golf-800 shadow-inner">
                  9
                </span>
                <span className="text-xl font-bold font-serif text-golf-900 tracking-tight">Backyard 9</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-golf-700 border-b-2 border-golf-600'
                        : 'text-stone-600 hover:text-golf-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button 
                onClick={onOpenSettings}
                className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
                title="Configure GitHub Source"
              >
                <Settings size={18} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
               <button 
                onClick={onOpenSettings}
                className="p-2 mr-2 text-stone-400 hover:text-stone-600"
              >
                <Settings size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-stone-600 hover:text-golf-600 hover:bg-stone-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-golf-50 text-golf-700'
                        : 'text-stone-600 hover:text-golf-600 hover:bg-stone-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span className="font-serif text-lg text-stone-200">Backyard 9</span>
            <p className="text-sm mt-1 text-stone-500 max-w-md">Tee Time in a Tiny Space: A dad's guide to building the backyard golf simulator.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="mailto:fastegg@gmail.com" className="hover:text-white transition-colors">Contact</a>
            <span className="text-stone-600">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;