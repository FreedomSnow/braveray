import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-12 md:pt-24 md:pb-20 overflow-hidden bg-secondary/30" data-cmp="Hero">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container-1440 px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            专业软件开发服务
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            专业软件开发<br/>
            <span className="text-accent">定制您的解决方案</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            我们提供移动应用、车机应用、上位机、嵌入式等全方位软件开发服务，致力于为每个客户提供专业、可靠的定制化解决方案，建立长期合作关系。
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
            >
              立即咨询
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="flex-1 w-full relative">
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-accent/80 p-1">
            <div className="absolute inset-0 bg-background/10 backdrop-blur-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Technology Team" 
              className="w-full h-full object-cover rounded-xl"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-background p-6 rounded-lg shadow-custom max-w-[200px] border border-border">
              <div className="text-4xl font-bold text-accent mb-1">98%</div>
              <p className="text-sm text-muted-foreground font-medium">客户满意度<br/>基于 500+ 项目交付</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;