import { ArrowRight, Smartphone, Car, Monitor, Cpu } from 'lucide-react';
import { useI18n } from '../i18n';

const Hero = () => {
  const { messages } = useI18n();

  return (
    <section id="home" className="relative pt-20 pb-12 md:pt-24 md:pb-20 overflow-hidden bg-secondary/30" data-cmp="Hero">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container-1440 px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            {messages.hero.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            {messages.hero.titleLine1}
            <br />
            <span className="text-accent">{messages.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {messages.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
            >
              {messages.hero.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Service Tags */}
        <div className="flex-1 w-full relative">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Mobile App Development */}
            <div className="group relative p-3 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <Smartphone className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{messages.hero.tags[0].title}</h3>
              <p className="text-xs text-muted-foreground">{messages.hero.tags[0].description}</p>
            </div>

            {/* Vehicle System Development */}
            <div className="group relative p-3 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <Car className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{messages.hero.tags[1].title}</h3>
              <p className="text-xs text-muted-foreground">{messages.hero.tags[1].description}</p>
            </div>

            {/* Desktop Application */}
            <div className="group relative p-3 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <Monitor className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{messages.hero.tags[2].title}</h3>
              <p className="text-xs text-muted-foreground">{messages.hero.tags[2].description}</p>
            </div>

            {/* Embedded Systems */}
            <div className="group relative p-3 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <Cpu className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{messages.hero.tags[3].title}</h3>
              <p className="text-xs text-muted-foreground">{messages.hero.tags[3].description}</p>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mt-4 bg-background p-6 min-h-[140px] flex flex-col justify-center rounded-lg shadow-custom border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">{messages.hero.audienceTitle}</h3>
            <div className="grid grid-cols-3 gap-4">
              {messages.hero.audiences.map((audience) => (
                <div key={audience.title} className="text-center">
                  <div className="text-2xl mb-2">{audience.emoji}</div>
                  <p className="text-base font-semibold text-foreground mb-1">{audience.title}</p>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;