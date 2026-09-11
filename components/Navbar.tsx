import React, { useState } from 'react';
import { Menu, X, Heart, Phone, Home, Info, BarChart3, MapPin, Moon, Sun, Globe, Megaphone, Music, LayoutGrid } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LINKS } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled: parentScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, toggleLanguage, t } = useThemeLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t.nav.home, href: '/', icon: <Home size={18} /> },
    { name: t.nav.about, href: '/about', icon: <Info size={18} /> },
    { name: t.nav.circleTypes, href: '/circle-types', icon: <LayoutGrid size={18} /> },
    { name: t.nav.ads, href: '/ads', icon: <Megaphone size={18} /> },
    { name: t.nav.recitations, href: '/recitations', icon: <Music size={18} /> },
    { name: t.nav.donate, href: '/donate', icon: <Heart size={18} /> },
    { name: t.nav.stats, href: '/stats', icon: <BarChart3 size={18} /> },
    { name: t.nav.mosques, href: '/mosques', icon: <MapPin size={18} /> },
    { name: t.nav.contact, href: '/contact', icon: <Phone size={18} /> },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const isSolid = parentScrolled || isOpen || location.pathname !== '/';

  const textClass = isSolid 
    ? 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary' 
    : 'text-white hover:bg-white/10';

  const mobileBgClass = 'bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800';
  const mobileTextClass = 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white dark:bg-gray-900 shadow-lg py-1 top-0' : 'bg-transparent py-4 top-12 md:top-14'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300">
          <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0">
             <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden shadow-md bg-white flex items-center justify-center p-0 transform hover:scale-110 transition-transform duration-300 shrink-0">
                <img 
                  src="https://i.postimg.cc/PJfw2r5n/IMG_20260212_WA0017.jpg" 
                  alt="شعار مجمع التبيان" 
                  className="w-full h-full object-cover rounded-full"
                />
             </div>
             <div className={`text-base md:text-xl font-bold tracking-tight transition-colors duration-300 truncate ${isSolid ? 'text-primary' : 'text-white'}`}>
                {t.common.siteName}
             </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <div className={`mr-4 ml-4 flex items-baseline space-x-1 ${language === 'en' ? 'space-x-reverse' : ''}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${textClass} ${location.pathname === link.href ? 'text-primary dark:text-secondary' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
                <button 
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors ${isSolid ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300' : 'hover:bg-white/10 text-white'}`}
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button 
                  onClick={toggleLanguage}
                  className={`p-2 rounded-full flex items-center gap-1 font-bold text-xs transition-colors ${isSolid ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300' : 'hover:bg-white/10 text-white'}`}
                  aria-label="Toggle Language"
                >
                   <Globe size={18} />
                   <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
                </button>

                <a 
                  href={LINKS.donation}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-md ${
                    isSolid 
                      ? 'bg-secondary text-white hover:bg-yellow-600' 
                      : 'bg-white text-primary hover:bg-gray-100'
                  }`}
                >
                  <Heart size={16} className="fill-current" />
                  <span>{t.nav.donateButton}</span>
                </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2 sm:gap-3 shrink-0">
             <button 
                  onClick={toggleTheme}
                  className={`p-1.5 rounded-full ${isSolid ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}
              >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
             <button 
                  onClick={toggleLanguage}
                  className={`p-1.5 font-bold text-xs ${isSolid ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}
              >
                  {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isSolid ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:bg-opacity-20 hover:bg-white/20 focus:outline-none transition-colors`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden shadow-xl absolute w-full top-full right-0 border-t flex flex-col animate-in slide-in-from-top-2 duration-200 h-[calc(100vh-80px)] overflow-y-auto ${mobileBgClass}`}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium transition-colors border-b border-gray-50 dark:border-gray-800 last:border-0 ${mobileTextClass} ${location.pathname === link.href ? 'text-primary dark:text-secondary' : ''}`}
              >
                <span className="text-secondary">{link.icon}</span>
                {link.name}
              </Link>
            ))}
             <a
                href={LINKS.donation}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block w-full text-center bg-secondary text-white px-3 py-3 rounded-md text-base font-bold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
              >
                <Heart size={18} />
                {t.nav.donate}
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;