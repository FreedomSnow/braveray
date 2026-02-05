import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n';

const CaseStudies = () => {
  const { messages } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const baseUrl = import.meta.env.BASE_URL;
  const caseImages = ["webp/im-iphone.webp", "webp/mediaplayer-car.webp", "webp/medical.webp"];
  const cases = messages.caseStudies.cases.map((item, index) => ({
    id: index + 1,
    ...item,
    image: `${baseUrl}${caseImages[index]}`
  }));

  // useEffect必须在cases声明之后
  useEffect(() => {
    if (!isFocused) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
      }, 4000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isFocused, cases.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  return (
    <section id="cases" className="py-12 md:py-20 bg-secondary/50" data-cmp="CaseStudies">
      <div className="container-1440 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{messages.caseStudies.heading}</h2>
            <div className="w-16 h-1 bg-accent mb-6"></div>
            <p className="text-lg text-muted-foreground">
              {messages.caseStudies.intro}
            </p>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl bg-card shadow-custom"
          tabIndex={0}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <button
            onClick={prevSlide}
            className="flex items-center justify-center absolute left-2 md:left-0 top-[45%] -translate-y-1/2 z-20 p-2 md:p-4 rounded-full border-2 border-accent bg-white text-accent shadow-lg hover:bg-accent hover:text-white transition-all"
            aria-label={messages.caseStudies.prevLabel}
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          >
            <ChevronLeft size={24} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center absolute right-2 md:right-0 top-[45%] -translate-y-1/2 z-20 p-2 md:p-4 rounded-full border-2 border-accent bg-white text-accent shadow-lg hover:bg-accent hover:text-white transition-all"
            aria-label={messages.caseStudies.nextLabel}
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          >
            <ChevronRight size={24} className="md:w-6 md:h-6" />
          </button>
          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
               <div key={cases[activeIndex].image} className="animate-fadeIn w-full h-full">
                <img 
                  src={cases[activeIndex].image} 
                  alt={cases[activeIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
               </div>
               <div className="absolute top-6 left-6 bg-background/90 backdrop-blur px-4 py-1.5 rounded text-sm font-semibold text-foreground border border-border/50">
                 {cases[activeIndex].industry}
               </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div className="animate-fadeInRight">
                <div className="text-accent font-semibold mb-2">{cases[activeIndex].client}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                  {cases[activeIndex].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {cases[activeIndex].description}
                </p>
                <div className="pt-8 border-t border-border">
                  <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                    {messages.caseStudies.viewCase} <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {cases.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;