import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChefHat, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المينيو', path: '/menu' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'آراء الزبناء', path: '/reviews' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-rose-100 p-2 rounded-full group-hover:bg-rose-200 transition-colors">
              <ChefHat className="h-8 w-8 text-brand-darkPink" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-slate-800 tracking-wide">Fifi Maison</span>
              <span className="text-xs text-rose-500 font-medium">أكل منزلي راقي</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-darkPink bg-rose-50'
                    : 'text-slate-600 hover:text-brand-darkPink hover:bg-rose-50/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call To Action & Cart (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
             <Link to="/cart" className="relative p-2 text-slate-600 hover:text-brand-darkPink transition-colors">
               <ShoppingBag className="h-6 w-6" />
               {cartCount > 0 && (
                 <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-darkPink rounded-full">
                   {cartCount}
                 </span>
               )}
             </Link>
             <Link to="/order" className="bg-brand-darkPink text-white px-6 py-2.5 rounded-full shadow-lg hover:bg-rose-800 transition-all transform hover:-translate-y-0.5 text-sm font-bold">
               اطلب الآن
             </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-slate-600 hover:text-brand-darkPink transition-colors">
               <ShoppingBag className="h-6 w-6" />
               {cartCount > 0 && (
                 <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-darkPink rounded-full">
                   {cartCount}
                 </span>
               )}
             </Link>
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-rose-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-rose-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium text-center ${
                  isActive(link.path)
                    ? 'text-brand-darkPink bg-rose-50'
                    : 'text-slate-600 hover:text-brand-darkPink hover:bg-rose-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link 
                to="/order" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-brand-darkPink text-white px-3 py-3 rounded-md font-bold"
             >
               اطلب الآن
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
