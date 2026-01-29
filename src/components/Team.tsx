import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const members = [
    {
      name: "张伟",
      role: "首席执行官 & 创始人",
      bio: "拥有 15 年企业级软件服务经验，曾在多家全球 500 强科技公司担任高管，致力于通过技术驱动商业变革。",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "李娜",
      role: "首席技术官",
      bio: "清华大学计算机博士，人工智能与大数据领域专家，主导过多个国家级科研项目及大型分布式系统架构设计。",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "产品总监",
      bio: "专注于用户体验与产品创新，擅长将复杂的业务需求转化为优雅的产品解决方案，多次获得国际设计大奖。",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "赵强",
      role: "解决方案架构师",
      bio: "拥有丰富的云原生架构落地经验，帮助过 50+ 传统企业成功实现数字化转型，深谙企业业务痛点。",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-12 md:py-20 bg-background" data-cmp="Team">
      <div className="container-1440 px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">专家团队</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            我们是一群对技术充满热情的专家，汇聚了行业顶尖人才，为您提供最专业的服务。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-custom hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 py-4 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="p-2 bg-white/20 hover:bg-accent rounded text-white backdrop-blur-sm transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="p-2 bg-white/20 hover:bg-accent rounded text-white backdrop-blur-sm transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <div className="text-accent text-sm font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;