import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CircleTypes from './components/CircleTypes';
import Advertisements from './components/Advertisements';
import HomeAdsPreview from './components/HomeAdsPreview';
import StudentRecitations from './components/StudentRecitations';
import Stats from './components/Stats';
import Mosques from './components/Mosques';
import Contact from './components/Contact';
import DonationOpportunities from './components/DonationOpportunities';
import Supporters from './components/Supporters';
import WhatsAppButton from './components/WhatsAppButton';
import NewsTicker from './components/NewsTicker';
import SmartAssistant from './components/SmartAssistant';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext';
import { Info, LayoutGrid, Megaphone, Music, Heart, BarChart3, MapPin, Phone, Users } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  const { t } = useThemeLanguage();

  const sections = [
    { name: t.nav.about, href: '/about', icon: <Info size={24} /> },
    { name: t.nav.circleTypes, href: '/circle-types', icon: <LayoutGrid size={24} /> },
    { name: t.nav.ads, href: '/ads', icon: <Megaphone size={24} /> },
    { name: t.nav.donate, href: '/donate', icon: <Heart size={24} /> },
    { name: t.nav.stats, href: '/stats', icon: <BarChart3 size={24} /> },
    { name: t.nav.recitations, href: '/recitations', icon: <Music size={24} /> },
    { name: t.nav.mosques, href: '/mosques', icon: <MapPin size={24} /> },
    { name: t.supporters?.title || "شريك النجاح", href: '/supporters', icon: <Users size={24} /> },
    { name: t.nav.contact, href: '/contact', icon: <Phone size={24} /> },
  ];

  return (
    <>
      <Hero />
      <HomeAdsPreview />
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.common.featuredSections}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t.common.chooseSection}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {sections.map((section) => (
              <Link 
                key={section.name} 
                to={section.href}
                className="flex items-center gap-4 px-6 py-5 rounded-xl text-lg font-medium transition-colors bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <span className="text-secondary">{section.icon}</span>
                <span>{section.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function AppContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative flex flex-col">
      <ScrollToTop />
      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar isScrolled={isScrolled} />
        <NewsTicker isScrolled={isScrolled} />
        <div className={`flex-grow ${location.pathname !== '/' ? 'pt-[124px] md:pt-[140px]' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/circle-types" element={<CircleTypes />} />
            <Route path="/ads" element={<Advertisements />} />
            <Route path="/donate" element={<DonationOpportunities />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/recitations" element={<StudentRecitations />} />
            <Route path="/mosques" element={<Mosques />} />
            <Route path="/supporters" element={<Supporters />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <SmartAssistant />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeLanguageProvider>
        <AppContent />
      </ThemeLanguageProvider>
    </BrowserRouter>
  );
}

export default App;