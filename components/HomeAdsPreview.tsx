import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { Calendar, ArrowLeft, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeAdsPreview: React.FC = () => {
  const { t, dir } = useThemeLanguage();

  const arMonths = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
  const enMonths = ['Muharram', 'Safar', 'Rabi', 'Rabi', 'Jumada', 'Jumada', 'Rajab', "Sha'ban", 'Ramadan', 'Shawwal', 'Dhu al-Qi', 'Dhu al-Hijjah'];

  const parseDateScore = (dateStr: string) => {
    if (!dateStr || dateStr.includes('مفتوح') || dateStr.includes('Open')) return 0;
    
    let year = 1447;
    let month = 0;
    let day = 0;

    const normalizedStr = dateStr.replace(/[\u0660-\u0669]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x0660 + 48));

    const yearMatch = normalizedStr.match(/14\d\d/);
    if (yearMatch) {
      year = parseInt(yearMatch[0], 10);
    }

    const dayMatch = normalizedStr.match(/\d+/);
    if (dayMatch && parseInt(dayMatch[0], 10) < 100) {
      day = parseInt(dayMatch[0], 10);
    }

    for (let i = 0; i < arMonths.length; i++) {
      if (dateStr.includes(arMonths[i]) || dateStr.toLowerCase().includes(enMonths[i].toLowerCase())) {
        month = i + 1;
        break;
      }
    }

    return year * 10000 + month * 100 + day;
  };

  // Get all ads sorted by date
  const adsToDisplay = [...t.adsList].sort((a, b) => parseDateScore(b.date) - parseDateScore(a.date));
  
  // Duplicate for infinite marquee
  const marqueeItems = [...adsToDisplay, ...adsToDisplay];

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 40s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="inline-flex p-3 rounded-full bg-secondary/10 text-secondary mb-4">
               <Megaphone size={28} />
            </div>
            <h2 className="text-3xl font-bold text-primary dark:text-gray-100">{t.ads.title}</h2>
          </div>
          <Link 
            to="/ads" 
            className="hidden md:flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors"
          >
            {t.common.readMore}
            <ArrowLeft size={20} className={dir === 'rtl' ? '' : 'rotate-180'} />
          </Link>
        </div>
      </div>

      <div className="w-full relative">
        <div className={`flex w-max gap-6 ${dir === 'rtl' ? 'animate-marquee-rtl pr-4 sm:pr-6 lg:pr-8' : 'animate-marquee-ltr pl-4 sm:pl-6 lg:pl-8'} pause-on-hover`}>
          {marqueeItems.map((ad, index) => (
            <Link 
              key={`${ad.id}-${index}`} 
              to="/ads"
              className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center p-2">
                <img 
                  src={ad.image} 
                  alt={ad.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary dark:text-secondary flex items-center gap-1 shadow-sm">
                   <Calendar size={12} />
                   <span>{ad.date}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors line-clamp-2">
                  {ad.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {ad.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-secondary font-semibold text-sm pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span>{t.common.readMore}</span>
                  <ArrowLeft size={16} className={dir === 'rtl' ? '' : 'rotate-180'} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-10 text-center md:hidden px-4">
        <Link 
          to="/ads" 
          className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-primary transition-colors"
        >
          {t.common.readMore}
        </Link>
      </div>
    </section>
  );
};

export default HomeAdsPreview;
