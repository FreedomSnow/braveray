import { ArrowRight, Smartphone, Car, Monitor, Cpu } from 'lucide-react';

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
            我们致力于为每个客户提供专业、可靠的定制化解决方案，建立长期合作关系。
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

        {/* Service Tags */}
        <div className="flex-1 w-full relative">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Mobile App Development */}
            <div className="group relative p-3 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <Smartphone className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">移动应用开发</h3>
              <p className="text-xs text-muted-foreground">iOS / Android / 跨平台</p>
            </div>

            {/* Vehicle System Development */}
            <div className="group relative p-3 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <Car className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">车机应用开发</h3>
              <p className="text-xs text-muted-foreground">智能车载系统</p>
            </div>

            {/* Desktop Application */}
            <div className="group relative p-3 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <Monitor className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">上位机开发</h3>
              <p className="text-xs text-muted-foreground">桌面应用 / 工控软件</p>
            </div>

            {/* Embedded Systems */}
            <div className="group relative p-3 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <Cpu className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">嵌入式开发</h3>
              <p className="text-xs text-muted-foreground">硬件控制 / 物联网</p>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mt-4 bg-background p-6 min-h-[140px] flex flex-col justify-center rounded-lg shadow-custom border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">适合人群</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <p className="text-base font-semibold text-foreground mb-1">创业者</p>
                <p className="text-sm text-muted-foreground">快速实现产品想法</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏢</div>
                <p className="text-base font-semibold text-foreground mb-1">企业外包</p>
                <p className="text-sm text-muted-foreground">专业团队协作</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💼</div>
                <p className="text-base font-semibold text-foreground mb-1">兼职合作</p>
                <p className="text-sm text-muted-foreground">灵活项目支持</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;