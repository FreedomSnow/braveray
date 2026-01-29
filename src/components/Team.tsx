import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const members = [
    {
      name: "Yunni",
      role: "架构师兼首席技术官",
      bio: "拥有 15 年软件服务经验，曾在多家全球 500 强科技公司担任技术架构师，致力于通过技术驱动应用变革。",
      image: `${baseUrl}arch.png`
    },
    {
      name: "张伟",
      role: "资深安卓开发工程师",
      bio: "拥有丰富的安卓开发经验，熟悉多种安卓框架和工具，致力于打造高质量的移动应用。",
      image: `${baseUrl}developer0.png`
    },
    {
      name: "Jane",
      role: "软件开发工程师",
      bio: "拥有10年软件开发经验，精通多种编程语言，擅长构建高性能、可扩展的软件系统。",
      image: `${baseUrl}developer1.png`
    },
    {
      name: "Chase",
      role: "产品经理",
      bio: "拥有丰富的产品管理经验，擅长需求分析与用户体验设计，致力于推动产品创新与市场成功。",
      image: `${baseUrl}pm.png`
    }
  ];

  return (
    <section id="team" className="py-12 md:py-20 bg-background" data-cmp="Team">
      <div className="container-1440 px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">开发团队</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            我们是一群对技术充满热情的开发者，为您提供最专业的服务。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-custom hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 py-4 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#contact" className="p-2 bg-white/20 hover:bg-accent rounded text-white backdrop-blur-sm transition-colors" aria-label="联系团队">
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