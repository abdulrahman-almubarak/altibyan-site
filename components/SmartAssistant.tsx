import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Loader2, Bot, RotateCcw } from 'lucide-react';
import { STATISTICS_DATA, CONTACT_INFO, LINKS } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const SmartAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, dir, language } = useThemeLanguage();
  
  // Suggested questions based on translation
  const suggestedQuestions = [
    t.assistant.suggestions.register,
    t.assistant.suggestions.donate,
    t.assistant.suggestions.location,
    t.assistant.suggestions.mosques,
    t.assistant.suggestions.students
  ];

  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: language === 'ar' 
      ? 'حياكم الله في مجمع التبيان المركزي. أنا المساعد الذكي، جاهز للإجابة على استفساراتكم حول أنشطة المجمع، التسجيل، والمساهمة في الخير.'
      : 'Welcome to Al-Tibyan Complex. I am the Smart Assistant, ready to answer your inquiries about our activities, registration, and donations.' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Reset chat if language changes to ensure initial message is appropriate
  useEffect(() => {
     setMessages([{ role: 'model', text: language === 'ar' 
      ? 'حياكم الله في مجمع التبيان المركزي. أنا المساعد الذكي، جاهز للإجابة على استفساراتكم حول أنشطة المجمع، التسجيل، والمساهمة في الخير.'
      : 'Welcome to Al-Tibyan Complex. I am the Smart Assistant, ready to answer your inquiries about our activities, registration, and donations.' 
    }]);
    chatSessionRef.current = null; // Reset session to pick up new system instructions language preference if needed
  }, [language]);

  // Construct system instruction with comprehensive site data acting as "Answers"
  const getSystemInstruction = () => {
    // We use the localized list from 't' inside the hook
    const mosquesList = t.mosquesList.map(m => `- ${m.name} (Map: ${m.mapLink})`).join('\n');
    const statsList = STATISTICS_DATA.flatMap(s => s.items).map(item => `- ${item.label}: ${item.value}`).join('\n');
    
    return `
      You are the dedicated AI Assistant for "Al-Tibyan Central Complex" (مجمع التبيان المركزي).
      
      **STRICT RULES:**
      1. You are NOT a general AI. You only answer questions about Al-Tibyan Complex.
      2. Use the "Knowledge Base" below to answer. Do not make up facts.
      3. If the user speaks Arabic, reply in Arabic. If English, reply in English.
      4. Be polite, concise (max 3-4 sentences), and helpful.

      **KNOWLEDGE BASE:**

      [Identity]
      Name: Al-Tibyan Central Complex (مجمع التبيان المركزي).
      Supervision: Maknon Association (Riyadh).
      
      [Contact & Location]
      Main HQ: Riyadh, Al-Khaleej District, Salman Al-Farsi Mosque.
      Map Link: ${CONTACT_INFO.mainMapLink}
      Phone: ${CONTACT_INFO.phone}
      WhatsApp: ${CONTACT_INFO.whatsappLink}
      Telegram: ${CONTACT_INFO.telegramLink}

      [Registration]
      Link: ${LINKS.registration}
      Info: We accept students of all ages. Registration is online via the link.

      [Donation & Support]
      Donation Store Link: ${LINKS.donation}
      Opportunities: Sponsor a Teacher, Sponsor a Student, Sponsor a Circle, General Support.
      Values: Charity is Sadaqah Jariyah.

      [Statistics]
      ${statsList}

      [Mosques / Circles Locations]
      ${mosquesList}
    `;
  };

  // Fallback logic for when API Key is missing or API fails
  const getLocalFallbackResponse = (query: string): string => {
    const q = query.toLowerCase();
    const isAr = language === 'ar';

    // Keywords mapping
    if (q.includes('register') || q.includes('sign up') || q.includes('join') || q.includes('سجل') || q.includes('تسجيل') || q.includes('التحاق')) {
      return isAr 
        ? `يمكنك التسجيل معنا بسهولة عبر الرابط التالي:\n${LINKS.registration}\nنسعد بانضمامكم!`
        : `You can register with us easily via the following link:\n${LINKS.registration}\nWe look forward to having you!`;
    }

    if (q.includes('donate') || q.includes('support') || q.includes('give') || q.includes('تبرع') || q.includes('مساهمة') || q.includes('دعم') || q.includes('صدقة')) {
      return isAr
        ? `جزاكم الله خيراً. يمكنكم المساهمة عبر متجرنا الإلكتروني:\n${LINKS.donation}\nمساهمتكم تصنع فارقاً.`
        : `May Allah reward you. You can contribute via our online store:\n${LINKS.donation}\nYour contribution makes a difference.`;
    }

    if (q.includes('location') || q.includes('where') || q.includes('map') || q.includes('موقع') || q.includes('عنوان') || q.includes('مكان') || q.includes('خريطة')) {
      return isAr
        ? `يقع مقرنا الرئيسي في الرياض، حي الخليج، جامع سلمان الفارسي.\nموقعنا على الخريطة: ${CONTACT_INFO.mainMapLink}`
        : `Our headquarters is in Riyadh, Al-Khaleej District, Salman Al-Farsi Mosque.\nLocation Map: ${CONTACT_INFO.mainMapLink}`;
    }

    if (q.includes('student') || q.includes('number') || q.includes('many') || q.includes('طالب') || q.includes('عدد') || q.includes('احصائيات')) {
      const students = STATISTICS_DATA.flatMap(s => s.items).find(item => item.key === 'totalStudents')?.value || 675;
      return isAr
        ? `يضم المجمع حالياً أكثر من ${students} طالب وطالبة، ولله الحمد.`
        : `The complex currently serves over ${students} students, Al-Hamdulillah.`;
    }
    
    if (q.includes('mosque') || q.includes('circle') || q.includes('masjid') || q.includes('مسجد') || q.includes('مساجد') || q.includes('حلقات')) {
       return isAr
        ? `لدينا حلقات في عدة مساجد منها: جامع سلمان الفارسي، جامع الملك عبدالله، وغيرها. يمكنك الاطلاع على القائمة الكاملة في قسم "مساجدنا" في الصفحة الرئيسية.`
        : `We have circles in several mosques including Salman Al-Farsi Mosque, King Abdullah Mosque, and others. You can view the full list in the "Mosques" section on the home page.`;
    }

    // Default Fallback
    return isAr 
      ? "أهلاً بك. يمكنك سؤالي عن التسجيل، التبرع، أو موقع المجمع. كما يمكنك التواصل معنا مباشرة عبر الواتساب: " + CONTACT_INFO.whatsappLink
      : "Welcome. You can ask me about registration, donations, or our location. You can also contact us directly via WhatsApp: " + CONTACT_INFO.whatsappLink;
  };

  const handleReset = () => {
    setMessages([{ role: 'model', text: language === 'ar' 
      ? 'حياكم الله في مجمع التبيان المركزي. أنا المساعد الذكي، جاهز للإجابة على استفساراتكم حول أنشطة المجمع، التسجيل، والمساهمة في الخير.'
      : 'Welcome to Al-Tibyan Complex. I am the Smart Assistant, ready to answer your inquiries about our activities, registration, and donations.' 
    }]);
    chatSessionRef.current = null;
    setInput('');
    setIsLoading(false);
  };

  const sendMessageToGemini = async (userMessage: string) => {
    setIsLoading(true);
    let usedFallback = false;

    try {
        // Safe access to API Key
        // @ts-ignore
        const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ? process.env.API_KEY : '';
        
        // If no key, throw immediately to trigger fallback
        if (!apiKey) {
           console.warn("Gemini API Key missing, switching to local fallback.");
           throw new Error("No API Key");
        }

        // Dynamically import GoogleGenAI
        const { GoogleGenAI } = await import("@google/genai");

        // Initialize chat session if not exists or if checking for new key
        if (!chatSessionRef.current) {
          const ai = new GoogleGenAI({ apiKey });
          chatSessionRef.current = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
              systemInstruction: getSystemInstruction(),
              temperature: 0.3, // Low temperature for factual answers
            },
          });
        }

        const result = await chatSessionRef.current.sendMessage({ message: userMessage });
        const responseText = result.text;
        
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error) {
      console.log("Using fallback response due to error:", error);
      usedFallback = true;
      
      // Artificial delay for better UX if it was instant fail
      await new Promise(resolve => setTimeout(resolve, 600));

      const localResponse = getLocalFallbackResponse(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: localResponse }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    await sendMessageToGemini(userMessage);
  };

  const handleSuggestionClick = (question: string) => {
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    sendMessageToGemini(question);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center border-2 border-white/20 ${
          isOpen ? 'bg-secondary rotate-90' : 'bg-primary animate-pulse-slow'
        }`}
        aria-label="المساعد الذكي"
      >
        {isOpen ? <X className="text-white" size={28} /> : <Sparkles className="text-white" size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 max-h-[600px] h-[500px]`}>
          {/* Header */}
          <div className="bg-primary dark:bg-primary/90 p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full ring-2 ring-white/30">
                <Bot className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{language === 'ar' ? 'المساعد الذكي' : 'Smart Assistant'}</h3>
                <div className="flex items-center gap-1.5">
                   <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                   <p className="text-white/90 text-xs">{language === 'ar' ? 'متصل الآن' : 'Online'}</p>
                </div>
              </div>
            </div>
            
            {/* Reset/Back Button */}
            <button 
              onClick={handleReset}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title={language === 'ar' ? 'بدء محادثة جديدة' : 'Start new conversation'}
              aria-label="Reset Chat"
            >
              <RotateCcw size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 chat-scroll">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                {msg.role === 'model' && (
                   <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center ml-2 dark:ml-0 dark:mr-2 flex-shrink-0">
                      <Bot size={16} className="text-primary dark:text-secondary" />
                   </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none'
                  }`}
                >
                  {msg.text // Render links as clickable if present (basic handling)
                    .split(/(https?:\/\/[^\s]+)/g)
                    .map((part, i) => 
                      part.match(/https?:\/\/[^\s]+/) ? (
                        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-yellow-600 break-all">
                          {part}
                        </a>
                      ) : (
                        part
                      )
                    )}
                </div>
              </div>
            ))}
            
            {/* Suggested Questions (only show if few messages) */}
            {messages.length < 3 && !isLoading && (
              <div className="mt-4 flex flex-wrap gap-2 justify-end">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(q)}
                    className="text-xs bg-white dark:bg-gray-700 border border-secondary/30 text-primary dark:text-secondary px-3 py-1.5 rounded-full hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-white transition-colors duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-end mb-4">
                 <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-2">
                    <Loader2 className="animate-spin text-primary dark:text-secondary" size={16} />
                    <span className="text-xs text-gray-400 dark:text-gray-500">{t.assistant.typing}</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.assistant.placeholder}
              className={`flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
              dir={dir}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white p-2.5 rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send size={18} className={isLoading ? 'opacity-0' : ''} /> 
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SmartAssistant;