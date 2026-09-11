import React, { useState } from 'react';
import { Calendar, Megaphone, ArrowLeft, X, CheckCircle2 } from 'lucide-react';
import { AdItem } from '../types';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Advertisements: React.FC = () => {
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

  const ads = [...t.adsList].sort((a, b) => parseDateScore(b.date) - parseDateScore(a.date));
  const [selectedAd, setSelectedAd] = useState<AdItem | null>(null);

  const renderItemWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const phoneRegex = /(05\d{8})/g; // Regex for Saudi mobile numbers (05xxxxxxxx)

    // Split text by URLs first
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      // If it's a URL
      if (part.match(urlRegex)) {
        return (
          <a 
            key={`url-${index}`} 
            href={part} 
            target="_blank" 
            rel="noreferrer" 
            className="text-primary dark:text-secondary underline hover:text-yellow-600 dark:hover:text-yellow-400 break-all transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }

      // If text, check for phone numbers
      const subParts = part.split(phoneRegex);
      if (subParts.length > 1) {
        return (
          <span key={`text-${index}`}>
            {subParts.map((subPart, subIndex) => {
              if (subPart.match(phoneRegex)) {
                // Convert 05xxxxxxxx to 9665xxxxxxxx for WhatsApp
                const waNumber = '966' + subPart.substring(1);
                return (
                  <a 
                    key={`phone-${subIndex}`}
                    href={`https://wa.me/${waNumber}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-green-600 dark:text-green-400 font-bold hover:underline mx-1 inline-block ltr"
                    dir="ltr"
                    onClick={(e) => e.stopPropagation()}
                    title={t.nav.whatsapp}
                  >
                    {subPart}
                  </a>
                );
              }
              return <span key={`sub-${subIndex}`}>{subPart}</span>;
            })}
          </span>
        );
      }
      
      return <span key={`text-${index}`}>{part}</span>;
    });
  };

  return (
    <section id="ads" className="py-20 bg-gray-50/90 dark:bg-gray-900/90 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 rounded-full bg-secondary/10 text-secondary mb-4">
             <Megaphone size={28} />
          </div>
          <h2 className="text-3xl font-bold text-primary dark:text-gray-100 mb-4">{t.ads.title}</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.ads.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ads.map((ad) => (
            <div 
              key={ad.id} 
              className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden group transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-2">
                <img 
                  src={ad.image} 
                  alt={ad.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary dark:text-secondary flex items-center gap-1.5 shadow-sm">
                   <Calendar size={14} />
                   <span>{ad.date}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {ad.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {ad.description}
                </p>
                <div className="pt-4 border-t border-gray-50 dark:border-gray-700">
                  <button 
                    onClick={() => setSelectedAd(ad)}
                    className="flex items-center gap-2 text-primary dark:text-secondary font-bold text-sm hover:gap-3 transition-all"
                  >
                     {t.common.readMore}
                     <ArrowLeft size={16} className={dir === 'rtl' ? '' : 'rotate-180'} />
                  </button>
                </div>
              </div>

              {/* In-Card Overlay Details */}
              <div 
                className={`absolute inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col transition-transform duration-300 ease-in-out ${
                  selectedAd?.id === ad.id ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                {selectedAd?.id === ad.id && (
                  <>
                    <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between shadow-sm">
                      <h3 className="font-bold text-primary dark:text-secondary truncate pr-4">{ad.title}</h3>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAd(null);
                        }}
                        className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 transition-colors shrink-0"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="overflow-y-auto flex-1 p-6">
                      <div className="w-full bg-gray-100 dark:bg-black/20 flex items-center justify-center p-4 rounded-xl mb-6">
                        <img 
                          src={ad.image} 
                          alt={ad.title} 
                          className="max-w-full max-h-[40vh] object-contain rounded-lg shadow-sm" 
                        />
                      </div>

                      <div className="mb-6 flex items-center justify-between">
                         <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-2 py-1 rounded">{t.common.siteName}</span>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-sm">
                             <Calendar size={16} />
                             <span>{ad.date}</span>
                         </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-base">
                        {ad.description}
                      </p>

                      {ad.details && (
                        <div className="grid grid-cols-1 gap-6 mb-8">
                          {ad.details.sections.map((section, sIdx) => (
                            <div key={sIdx}>
                              <h4 className="font-bold text-primary dark:text-secondary border-b border-gray-100 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                    <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-1" />
                                    <span className="flex-1 leading-relaxed">
                                       {renderItemWithLinks(item)}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-4 flex flex-col gap-3 pb-4">
                        {ad.buttons ? (
                          ad.buttons.map((btn, idx) => (
                            <a 
                              key={idx}
                              href={btn.link}
                              target="_blank" 
                              rel="noreferrer"
                              onClick={() => setSelectedAd(null)}
                              className={`w-full py-3.5 text-white text-center rounded-xl font-bold transition-colors text-sm ${idx === 0 ? 'bg-secondary hover:bg-yellow-600' : 'bg-primary hover:bg-primary/90'}`}
                            >
                              {btn.text}
                            </a>
                          ))
                        ) : (
                          ad.link && (
                            <a 
                              href={ad.link}
                              target="_blank" 
                              rel="noreferrer"
                              onClick={() => setSelectedAd(null)}
                              className="w-full py-3.5 bg-primary text-white text-center rounded-xl font-bold hover:bg-primary/90 transition-colors text-sm"
                            >
                              {t.hero.register}
                            </a>
                          )
                        )}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedAd(null);
                          }}
                          className="w-full py-3.5 bg-gray-100 dark:bg-gray-800 rounded-xl font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
                        >
                          {t.common.close}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertisements;