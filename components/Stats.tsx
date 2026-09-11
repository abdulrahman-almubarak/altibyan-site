import React, { useEffect, useState, useRef } from 'react';
import { Users, BookOpen, Home, Award, UserCheck, Briefcase, Scroll, Mic2, Baby, Globe } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { STATISTICS_DATA } from '../constants';

const CountUp: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeValue = 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeValue));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

const Stats: React.FC = () => {
  const { t } = useThemeLanguage();

  const getIcon = (key: string) => {
    switch (key) {
      case 'mosques': return <Home size={32} />;
      case 'supervisors':
      case 'totalStudents':
      case 'adults':
      case 'elementary':
        return <Users size={32} />;
      case 'admins': return <Briefcase size={32} />;
      case 'reciters':
      case 'tilawa':
      case 'recitedPages':
      case 'maqari': return <Mic2 size={32} />;
      case 'certifiedTeachers':
      case 'certified': return <Scroll size={32} />;
      case 'qiraat':
      case 'quranCircles':
      case 'tajweed':
      case 'dabt':
      case 'memorizedPages': return <BookOpen size={32} />;
      case 'universityStudents':
      case 'highschool': return <Award size={32} />;
      case 'intermediate': return <Users size={32} />;
      case 'tilawaCorrection':
      case 'fatihaCorrection': return <UserCheck size={32} />;
      case 'fatihaExpats': return <Globe size={32} />;
      case 'revision':
      case 'reviewedPages': return <BookOpen size={32} />;
      case 'noorAlbayanCircles':
      case 'noorAlbayan': return <Baby size={32} />;
      case 'khatmati':
      case 'khatmeen': return <Award size={32} />;
      case 'summerCourse':
      case 'ramadanCourse': return <Users size={32} />;
      default: return <Users size={32} />;
    }
  };

  return (
    <section id="stats" className="py-20 bg-white/90 dark:bg-gray-800/90 relative transition-colors duration-300 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 dark:bg-secondary/10 rounded-tr-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-gray-100 mb-4">{t.stats.title}</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.stats.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {STATISTICS_DATA.map((section) => (
            <div key={section.id} className="relative">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center border-b border-gray-200 dark:border-gray-700 pb-4">
                {t.stats[section.titleKey as keyof typeof t.stats] || section.titleKey}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                {section.items.map((stat) => (
                  <div 
                      key={stat.id} 
                      className="bg-white dark:bg-gray-700/50 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group flex flex-col items-center justify-center min-h-[180px]"
                  >
                    <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {getIcon(stat.key)}
                    </div>
                    <div className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2 font-mono flex items-center justify-center gap-1">
                      <CountUp end={stat.value} />
                      <span className="text-lg align-top text-secondary">+</span>
                    </div>
                    <h4 className="text-base font-medium text-gray-600 dark:text-gray-300">
                      {t.stats[stat.key as keyof typeof t.stats] || stat.label}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;