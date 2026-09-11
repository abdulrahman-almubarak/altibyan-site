import React from 'react';
import { UserCheck, GraduationCap, Users, HandHeart } from 'lucide-react';
import { LINKS } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const DonationOpportunities: React.FC = () => {
  const { t, dir } = useThemeLanguage();

  const getIcon = (iconStr: string) => {
    switch (iconStr) {
      case 'student': return <GraduationCap size={32} />;
      case 'teacher': return <UserCheck size={32} />;
      case 'circle': return <Users size={32} />;
      default: return <HandHeart size={32} />;
    }
  };

  const getColor = (iconStr: string) => {
    switch (iconStr) {
      case 'student': return "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";
      case 'teacher': return "bg-secondary/10 text-secondary dark:bg-secondary/20";
      case 'circle': return "bg-accent/20 text-secondary dark:text-accent";
      default: return "bg-primary/10 text-primary dark:bg-primary/20 dark:text-teal-300";
    }
  };

  const getButtonColor = (iconStr: string) => {
    switch (iconStr) {
      case 'student': return "bg-emerald-600 hover:bg-emerald-700 text-white";
      case 'teacher': return "bg-secondary hover:bg-yellow-600 text-white";
      case 'circle': return "bg-accent hover:bg-secondary text-primary hover:text-white transition-colors";
      default: return "bg-primary hover:bg-primary/90 text-white";
    }
  };

  const ArrowIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={dir === 'rtl' ? '' : 'rotate-180'}>
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
     </svg>
  );

  return (
    <section id="donate" className="py-20 bg-gray-50/90 dark:bg-gray-900/90 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">{t.donation.tag}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-gray-100 mb-4">{t.donation.title}</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t.donation.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {t.donation.packages.map((item: any, index: number) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${getColor(item.icon)} transition-transform group-hover:scale-110 duration-300`}>
                {getIcon(item.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              {item.desc && (
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium">
                  {item.desc}
                </p>
              )}
              
              <div className="mt-auto mb-6">
                <span className="text-3xl font-extrabold text-primary dark:text-secondary">{item.price}</span>
              </div>
              
              <a 
                href={LINKS.donation} 
                target="_blank" 
                rel="noreferrer"
                className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md ${getButtonColor(item.icon)}`}
              >
                <span>{t.donation.donateBtn}</span>
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-l from-primary to-primary/90 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
            
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.donation.storeTitle}</h3>
                <p className="text-blue-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                    {t.donation.storeSubtitle}
                </p>
                <a 
                    href={LINKS.donation} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    <span>{t.donation.storeBtn}</span>
                    <ArrowIcon />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DonationOpportunities;