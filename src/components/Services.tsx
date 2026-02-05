import { Cloud, Database, Shield, Monitor, Smartphone, Cpu } from 'lucide-react';
import { useI18n } from '../i18n';

const Services = () => {
  const { messages } = useI18n();

  const services = [
    {
      icon: Smartphone,
      title: messages.services.items[0].title,
      description: messages.services.items[0].description
    },
    {
      icon: Monitor,
      title: messages.services.items[1].title,
      description: messages.services.items[1].description
    },
    {
      icon: Cloud,
      title: messages.services.items[2].title,
      description: messages.services.items[2].description
    },
    {
      icon: Cpu,
      title: messages.services.items[3].title,
      description: messages.services.items[3].description
    },
    {
      icon: Database,
      title: messages.services.items[4].title,
      description: messages.services.items[4].description
    },
    {
      icon: Shield,
      title: messages.services.items[5].title,
      description: messages.services.items[5].description
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-background" data-cmp="Services">
      <div className="container-1440 px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{messages.services.heading}</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            {messages.services.intro}
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