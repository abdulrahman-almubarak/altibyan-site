import React from 'react';
import { Heart } from 'lucide-react';
import { LINKS } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Hero: React.FC = () => {
  const { t, dir } = useThemeLanguage();

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://i.postimg.cc/bNSjSLw5/IMG-20260217-WA0000.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/80 to-secondary/90 mix-blend-multiply dark:from-gray-900/95 dark:via-gray-900/80 dark:to-gray-900/90" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="mb-8 relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-2xl bg-white animate-in zoom-in duration-700 flex items-center justify-center p-0">
           <img 
             src="https://i.postimg.cc/PJfw2r5n/IMG_20260212_WA0017.jpg" 
             alt="شعار مجمع التبيان" 
             className="w-full h-full object-cover rounded-full"
           />
        </div>

        <h1 className="text-4xl sm:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg animate-in slide-in-from-bottom-5 duration-700">
          {t.hero.title}
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-100 mb-12 max-w-3xl font-medium leading-relaxed animate-in slide-in-from-bottom-10 duration-1000">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center animate-in slide-in-from-bottom-20 duration-1000">
            <a 
                href={LINKS.registration}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
                <span>{t.hero.register}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
            </a>
            
            <a 
                href={LINKS.donation}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-accent text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
                <Heart className="group-hover:text-red-500 transition-colors" size={20} />
                <span>{t.hero.donate}</span>
            </a>
        </div>

        <div className="mt-16 w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 animate-in slide-in-from-bottom-24 duration-1000 bg-black flex items-center justify-center">
          <video 
            src="https://www.image2url.com/r2/default/videos/1783079301075-12224ade-8fb3-4e3e-a889-23a6d940f41b.mp4#t=0.001" 
            controls 
            preload="metadata"
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>
    </div>
  );
};

export default Hero;