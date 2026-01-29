import { Cloud, Database, Shield, Monitor, Smartphone, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "移动应用开发",
      description: "专业开发 iOS 与 Android 原生及跨平台移动应用，为您打造流畅、稳定的移动端解决方案。"
    },
    {
      icon: Monitor,
      title: "车机应用开发",
      description: "提供车载系统应用定制开发，针对车机环境优化交互体验，实现智能化车载功能。"
    },
    {
      icon: Cloud,
      title: "上位机开发",
      description: "开发功能强大的上位机软件系统，实现设备监控、数据采集与分析，提升工业自动化水平。"
    },
    {
      icon: Cpu,
      title: "嵌入式开发",
      description: "专注嵌入式系统软件开发，从底层驱动到应用层实现，为硬件设备赋予智能化能力。"
    },
    {
      icon: Database,
      title: "应用维护及二次开发",
      description: "为现有系统提供专业维护、升级及功能扩展服务，确保应用持续稳定运行并满足新需求。"
    },
    {
      icon: Shield,
      title: "应用定制",
      description: "根据客户独特需求量身定制软件解决方案，完美契合业务流程，实现个性化功能需求。"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-background" data-cmp="Services">
      <div className="container-1440 px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">核心开发服务</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            100%热忱投入每个开发项目，认真负责对待每一行代码，用专业和诚信赢得客户信任。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 border border-border rounded-xl bg-card hover:shadow-custom hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;