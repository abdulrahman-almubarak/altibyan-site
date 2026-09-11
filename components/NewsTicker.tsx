import React from 'react';
import { Megaphone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

interface NewsTickerProps {
  isScrolled: boolean;
}

const NewsTicker: React.FC<NewsTickerProps> = ({ isScrolled }) => {
  const { language, dir, t } = useThemeLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const newsItems = t.adsList.map(ad => ad.title);

  const isSolid = isScrolled || location.pathname !== '/';

  return (
    <div 
      onClick={() => navigate('/ads')}
      className={`fixed left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-secondary/20 py-2.5 z-40 overflow-hidden shadow-sm transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/95 ${isSolid ? 'top-20 md:top-24' : 'top-0'}`} 
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Label */}
        <div className="flex items-center gap-2 bg-secondary text-white px-3 py-1.5 rounded-lg text-xs font-bold z-10 shadow-sm whitespace-nowrap">
          <Megaphone size={14} className="animate-bounce" />
          <span>{language === 'ar' ? 'آخر الأخبار' : 'Latest News'}</span>
        </div>

        {/* Scrolling Content */}
        <div className="flex-1 overflow-hidden relative h-6 mx-4" dir="ltr">
          <div className="absolute whitespace-nowrap animate-marquee flex items-center gap-8 top-0 left-0 h-full">
            {/* Set 1 */}
            {newsItems.map((item, index) => (
              <span key={`s1-${index}`} dir={dir} className="text-primary dark:text-accent font-bold text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-sm"></span>
                {item}
              </span>
            ))}
            {/* Set 2 */}
            {newsItems.map((item, index) => (
              <span key={`s2-${index}`} dir={dir} className="text-primary dark:text-accent font-bold text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-sm"></span>
                {item}
              </span>
            ))}
            {/* Set 3 */}
            {newsItems.map((item, index) => (
              <span key={`s3-${index}`} dir={dir} className="text-primary dark:text-accent font-bold text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-sm"></span>
                {item}
              </span>
            ))}
            {/* Set 4 */}
            {newsItems.map((item, index) => (
              <span key={`s4-${index}`} dir={dir} className="text-primary dark:text-accent font-bold text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-sm"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;
