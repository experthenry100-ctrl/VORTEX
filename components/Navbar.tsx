import React from 'react';
import { ShoppingCart, Gamepad2, Home } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onNavigate, currentPage }) => {
  return (
    <nav className="sticky top-0 z-50 bg-vortex-900/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <Gamepad2 className="h-8 w-8 text-vortex-accent group-hover:text-vortex-glow transition-colors duration-300" />
            <span className="ml-2 text-xl font-bold tracking-widest text-white">
              VORTEX
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                currentPage === 'home' ? 'text-vortex-accent' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Home className="h-5 w-5 mr-1" />
              Store
            </button>

            <button 
              onClick={() => onNavigate('cart')}
              className={`relative flex items-center text-sm font-medium transition-colors duration-200 ${
                currentPage === 'cart' ? 'text-vortex-accent' : 'text-gray-300 hover:text-white'
              }`}
            >
              <ShoppingCart className="h-5 w-5 mr-1" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-vortex-glow text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
