import React, { useState } from 'react';
import { Baby, School, Backpack, GraduationCap, Briefcase, Mic2, Clock, CheckCircle2, BookOpen, X, Info, Users } from 'lucide-react';
import { CIRCLE_TYPES } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const CircleTypes: React.FC = () => {
  const { t, dir } = useThemeLanguage();
  const [selectedType, setSelectedType] = useState<typeof CIRCLE_TYPES[0] | null>(null);

  const getIcon = (name: string, size = 32) => {
    switch (name) {
      case 'Baby': return <Baby size={size} />;
      case 'School': return <School size={size} />;
      case 'Backpack': return <Backpack size={size} />;
      case 'GraduationCap': return <GraduationCap size={size} />;
      case 'Briefcase': return <Briefcase size={size} />;
      case 'Mic2': return <Mic2 size={size} />;
      case 'Users': return <Users size={size} />;
      default: return <School size={size} />;
    }
  };

  const renderAgeRange = (type: typeof CIRCLE_TYPES[0]) => {
    if (!type.ageRange) return null;

    // Handle "All Ages" / "لكل السنوات" / "الكل" cases
    if (['correction', 'online', 'general'].includes(type.id)) {
      return t.circleTypes.allAges;
    }

    if (type.id === 'adults') {
      return `${type.ageRange} ${t.circleTypes.above}`;
    }

    return `${type.ageRange} ${t.circleTypes.years}`;
  };

  return (
    <section id="circle-types" className="py-20 bg-white/90 dark:bg-gray-800/90 transition-colors duration-300 relative overflow-hidden backdrop-blur-sm">
      {/* Decorative background Islamic pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1F5F65 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-gray-100 mb-4">{t.circleTypes.title}</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t.circleTypes.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CIRCLE_TYPES.map((type) => (
            <div 
              key={type.id} 
              className="relative group bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-secondary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl text-primary dark:text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {getIcon(type.iconName)}
                </div>
                {type.ageRange && (
                  <div className="flex items-center gap-1.5 text-xs font-bold bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20">
                     <Clock size={12} />
                     <span>
                        {t.circleTypes.age}: {renderAgeRange(type)}
                     </span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                {t.circleTypes.types[type.id as keyof typeof t.circleTypes.types]}
              </h3>
              
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
                {t.circleTypes.desc[type.id as keyof typeof t.circleTypes.desc]}
              </p>

              <button 
                onClick={() => setSelectedType(type)}
                className="mt-auto flex items-center gap-2 text-primary dark:text-secondary font-bold text-sm group-hover:gap-3 transition-all"
              >
                <Info size={16} />
                <span>{t.common.readMore}</span>
              </button>

              <div className="mt-4 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>

              {/* In-Card Overlay Details */}
              <div 
                className={`absolute inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col transition-transform duration-300 ease-in-out ${
                  selectedType?.id === type.id ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                {selectedType?.id === type.id && (
                  <>
                    <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between shadow-sm">
                      <h3 className="font-bold text-primary dark:text-secondary truncate pr-4">
                        {t.circleTypes.types[type.id as keyof typeof t.circleTypes.types]}
                      </h3>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedType(null);
                        }}
                        className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 transition-colors shrink-0"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="overflow-y-auto flex-1 p-6">
                      <div className="flex flex-col gap-6">
                        {/* Benefits Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-4 text-primary dark:text-secondary font-bold text-sm">
                            <CheckCircle2 size={16} />
                            <h4>{t.common.benefits}</h4>
                          </div>
                          <ul className="space-y-2">
                            {(t.circleTypes.benefits[type.id as keyof typeof t.circleTypes.benefits] as string[]).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Curriculum Section */}
                        <div>
                          <div className="flex items-center gap-2 mb-4 text-primary dark:text-secondary font-bold text-sm">
                            <BookOpen size={16} />
                            <h4>{t.common.curriculum}</h4>
                          </div>
                          <ul className="space-y-2">
                            {(t.circleTypes.curriculum[type.id as keyof typeof t.circleTypes.curriculum] as string[]).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pb-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedType(null);
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

export default CircleTypes;