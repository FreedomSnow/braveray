import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cases = [
    {
      id: 1,
      client: "FinTech Global",
      industry: "金融科技",
      title: "重构核心交易系统，实现毫秒级响应",
      description: "面对日均百万级的交易请求，我们为 FinTech Global 重构了核心交易引擎。采用微服务架构与高性能消息队列，将系统吞吐量提升了 300%，平均响应时间降低至 5ms 以内，确保了金融级的高可用性与数据一致性。",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
    },
    {
      id: 2,
      client: "EcoRetail Inc.",
      industry: "智慧零售",
      title: "全渠道零售数据中台建设",
      description: "打通线上商城与线下 200+ 门店的数据孤岛。通过构建统一的数据中台，实现了库存实时共享、会员权益互通以及精准的个性化推荐。项目上线后，客户复购率提升了 25%，库存周转效率提高了 40%。",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      client: "MediCare Plus",
      industry: "医疗健康",
      title: "基于 AI 的医疗影像辅助诊断平台",
      description: "结合深度学习技术，开发了辅助医生诊断肺部影像的 AI 平台。系统对早期病灶的识别准确率达到 94%，大幅缩短了医生的阅片时间，有效缓解了医疗资源紧张的问题，目前已在 15 家三甲医院试点应用。",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">成功案例</h2>
            <div className="w-16 h-1 bg-accent mb-6"></div>
            <p className="text-lg text-muted-foreground">
              见证我们如何与客户携手，解决复杂挑战，创造真实价值。
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-border bg-background hover:bg-white hover:border-accent text-foreground transition-all"
              aria-label="Previous case"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-border bg-background hover:bg-white hover:border-accent text-foreground transition-all"
              aria-label="Next case"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-card shadow-custom">
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
                    查看完整案例 <ArrowRight size={18} className="ml-2" />
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