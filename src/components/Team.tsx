import { Mail } from 'lucide-react';
import { useI18n } from '../i18n';

const Team = () => {
  const { messages } = useI18n();
  const baseUrl = import.meta.env.BASE_URL;
  const members = [
    { ...messages.team.members[0], image: `${baseUrl}webp/arch.webp` },
    { ...messages.team.members[1], image: `${baseUrl}webp/developer0.webp` },
    { ...messages.team.members[2], image: `${baseUrl}webp/developer1.webp` },
    { ...messages.team.members[3], image: `${baseUrl}webp/pm.webp` }
  ];

  return (
    <section id="team" className="py-12 md:py-20 bg-background" data-cmp="Team">
      <div className="container-1440 px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{messages.team.heading}</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            {messages.team.intro}
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
                  <a href="#contact" className="p-2 bg-white/20 hover:bg-accent rounded text-white backdrop-blur-sm transition-colors" aria-label={messages.team.contactLabel}>
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