import { Briefcase, TrendingUp, Users, Zap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: Zap,
      company: 'Orofacial Clinic',
      period: '2023 - 2025',
      role: 'Especialista em Mídia Paga & Performance',
      description: 'Liderou estratégias de tráfego pago em Google Ads e Meta Ads para clínica odontológica de alta performance.',
      achievements: [
        'Aumento de 50% em leads qualificados',
        'Redução de 20% em CPL',
        'Aumento de 25% em receita',
        'Superação de expectativas em 18%',
      ],
    },
    {
      icon: TrendingUp,
      company: 'Agência Descomplica',
      period: '2021 - 2024',
      role: 'Gestor de Tráfego & Performance',
      description: 'Gerenciou campanhas de performance e growth para múltiplos clientes, com foco em ROI e escalabilidade.',
      achievements: [
        'Planejamento e implementação de campanhas em Google Ads e Facebook Ads',
        'Otimização de campanhas para maximizar ROI',
        'Implementação de estratégias omnichannel',
        'Desenvolvimento de funnels de conversão eficazes',
      ],
    },
    {
      icon: Users,
      company: 'Câmara Municipal de Nova Friburgo',
      period: '2013 - 2016',
      role: 'Dirigente do Serviço Público Federal',
      description: 'Liderou comunicação institucional e gestão de performance governamental.',
      achievements: [
        'Captação de R$ 15 milhões em emendas parlamentares',
        'Aumento de 25% em engajamento comunitário',
        'Melhoria de 30% na execução de projetos',
        'Facilitação de comunicação entre vereadores e deputados',
      ],
    },
    {
      icon: Briefcase,
      company: 'Claro Brasil',
      period: '2010 - 2012',
      role: 'Líder em Comunicação Multicanal',
      description: 'Gerenciou identidade visual e performance da marca em múltiplos canais.',
      achievements: [
        'Supervisionava identidade visual da marca',
        'Gerenciava materiais de merchandising',
        'Definia estratégias de mídia regionais',
        'Coordenava campanhas digitais integradas',
      ],
    },
  ];

  const iconColors = [
    'icon-neon',
    'icon-neon-secondary',
    'icon-neon-accent',
    'icon-neon',
  ];

  return (
    <section id="experience" className="section border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-primary">Experiência</span> Profissional
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="p-6 bg-card rounded border border-border neon-border hover:neon-glow transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                  <div className="flex gap-4">
                    <Icon className={`w-6 h-6 flex-shrink-0 ${iconColors[index]}`} />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                      <p className="text-sm text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap mt-2 md:mt-0">{exp.period}</p>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span>{achievement}</span>
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

