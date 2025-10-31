import { TrendingUp, Zap, Brain, BarChart3, Code2, Lightbulb, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Expertise() {
  const [expandedArea, setExpandedArea] = useState<number | null>(0);

  const expertiseAreas = [
    {
      icon: TrendingUp,
      title: 'Marketing Performance & Growth',
      description: 'Gestão estratégica de tráfego pago e otimização de conversões',
      iconClass: 'icon-neon',
      details: [
        'Google Ads e Meta Ads com 8+ anos de experiência',
        'Otimização de conversões e redução de CPL',
        'Especialização em setores de alta complexidade (clínicas médicas, consultórios)',
        'Aumento de 50% em leads qualificados e redução de 20% em custos',
        'Domínio em Google Analytics 4, GTM e Semrush',
        'Expertise em funis de conversão e remarketing estratégico',
        'Testes A/B contínuos e otimização em tempo real',
        'Landing pages e otimização de UX orientada por dados'
      ],
    },
    {
      icon: Zap,
      title: 'Automação Inteligente & N8N',
      description: 'Fluxos de automação avançados e integração omnichannel',
      iconClass: 'icon-neon-secondary',
      details: [
        'Fluxos de automação complexos com N8N',
        'Integração de múltiplos sistemas (CRM, e-mail, redes sociais, APIs)',
        'Integração omnichannel: e-mail, WhatsApp, SMS, redes sociais',
        'Processamento e enriquecimento de dados em tempo real',
        'Webhooks e APIs para ecossistemas de marketing automatizados',
        'Redução de tarefas manuais em 70%+ através de automação',
        'Integração com Google Sheets, Zapier, Make e ferramentas CRM',
        'Automação de campanhas coordenadas e workflows inteligentes'
      ],
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial & Agentes de IA',
      description: 'IA generativa e agentes autônomos para marketing',
      iconClass: 'icon-neon-accent',
      details: [
        'Agentes de IA para análise de concorrência e otimização de campanhas',
        'IA generativa: ChatGPT, Claude, Gemini',
        'Prompt engineering avançado para máximo valor de LLMs',
        'Criação de conteúdo e copywriting estratégico com IA',
        'Análise de dados e geração de insights com modelos de IA',
        'Large Language Models para personalização em escala',
        'Segmentação de audiência e recomendações com IA',
        'Análise preditiva e otimização de orçamento com machine learning'
      ],
    },
    {
      icon: BarChart3,
      title: 'Análise de Dados & Business Intelligence',
      description: 'Interpretação de dados para insights acionáveis',
      iconClass: 'icon-neon',
      details: [
        'Google Analytics 4 e GTM (Google Tag Manager)',
        'Semrush e Ahrefs para análise competitiva',
        'Data Studio para criação de dashboards',
        'SQL básico para análise de dados',
        'Excel e Google Sheets para análise avançada',
        'Pensamento sistêmico e otimização de sistemas complexos',
        'Análise crítica para gerar insights acionáveis',
        'Abordagem estruturada para diagnosticar desafios'
      ],
    },
    {
      icon: Code2,
      title: 'Desenvolvimento Frontend & Tecnologia',
      description: 'Conhecimentos técnicos para colaboração efetiva',
      iconClass: 'icon-neon-secondary',
      details: [
        'HTML5, CSS3 e JavaScript moderno',
        'React e Tailwind CSS',
        'Git e GitHub para versionamento',
        'APIs REST e integração de sistemas',
        'Otimização de landing pages com UX',
        'Implementação de rastreamento avançado',
        'Pixel tracking e eventos customizados',
        'Prototipagem rápida de campanhas'
      ],
    },
    {
      icon: Lightbulb,
      title: 'Soft Skills Estratégicos',
      description: 'Competências essenciais para liderança e estratégia',
      iconClass: 'icon-neon-accent',
      details: [
        'Pensamento estratégico e tradução de objetivos em estratégias mensuráveis',
        'Storytelling e copywriting persuasivo',
        'Análise de concorrência e mapeamento de posicionamento',
        'Gestão de stakeholders e comunicação com C-suite',
        'Liderança de projetos e coordenação de equipes',
        'Resolução de problemas com abordagem criativa',
        'Aprendizado contínuo e engajamento com novas tecnologias',
        'Capacidade de traduzir conceitos complexos em linguagem acessível'
      ],
    },
  ];

  const tools = {
    'Tráfego Pago': ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads'],
    'Análise & Dados': ['Google Analytics 4', 'GTM', 'Semrush', 'Ahrefs', 'Data Studio'],
    'Automação': ['N8N', 'Zapier', 'Make', 'RD Station', 'ActiveCampaign'],
    'IA & LLMs': ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering'],
    'Frontend': ['React', 'Tailwind CSS', 'JavaScript', 'Git', 'HTML5', 'CSS3'],
    'Design & Conteúdo': ['Figma', 'Canva', 'Adobe Creative Suite'],
  };

  return (
    <section id="expertise" className="section border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-primary">Áreas de</span> Expertise
        </h2>

        {/* Expertise Grid */}
        <div className="space-y-4 mb-12">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const isExpanded = expandedArea === index;
            return (
              <div
                key={index}
                className="p-6 bg-card rounded border border-border neon-border hover:neon-glow transition-all cursor-pointer"
                onClick={() => setExpandedArea(isExpanded ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <Icon className={`w-8 h-8 flex-shrink-0 mt-1 ${area.iconClass}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{area.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{area.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>

                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-border space-y-3">
                        {area.details.map((detail, idx) => (
                          <div key={idx} className="flex gap-3">
                            <span className="text-primary font-bold flex-shrink-0 text-sm">→</span>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-8">
            <span className="text-primary">Ferramentas</span> & Tecnologias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(tools).map(([category, toolList], idx) => (
              <div key={category} className="p-4 bg-card rounded border border-border neon-border hover:neon-glow transition-all">
                <h4 className="font-bold text-sm mb-3 text-primary">
                  {category}
                </h4>
                <div className="space-y-2">
                  {toolList.map((tool, toolIdx) => (
                    <p key={toolIdx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">→</span>
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div className="border-t border-border mt-12 pt-12">
          <h3 className="text-2xl font-bold mb-8">
            <span className="text-primary">Diferenciais</span> & Visão
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded border border-border neon-border">
              <h4 className="font-bold text-primary mb-4">O Que Me Diferencia</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">1.</span>
                  <span><strong>Combinação Rara:</strong> Expertise em marketing estratégico + domínio técnico em automação e IA</span>
                </li>
                <li className="text-sm text-muted-foreground flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">2.</span>
                  <span><strong>Orientação por Resultados:</strong> Todas as estratégias são mensuráveis e focadas em ROI</span>
                </li>
                <li className="text-sm text-muted-foreground flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">3.</span>
                  <span><strong>Inovação Contínua:</strong> Sempre explorando novas tecnologias para criar vantagem competitiva</span>
                </li>
                <li className="text-sm text-muted-foreground flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">4.</span>
                  <span><strong>Comunicação Clara:</strong> Tradução de conceitos complexos em linguagem acessível</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded border border-border neon-border-secondary">
              <h4 className="font-bold text-secondary mb-4">Visão Futura</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Posicionado para liderar a próxima geração de marketing, onde <strong>automação inteligente</strong>, <strong>IA generativa</strong> e <strong>análise preditiva</strong> serão o padrão.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span><strong>Automatizar</strong> processos repetitivos</span>
                </li>
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span><strong>Personalizar</strong> experiências em escala</span>
                </li>
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span><strong>Otimizar</strong> com aprendizado de máquina</span>
                </li>
                <li className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span><strong>Inovar</strong> mantendo-se à frente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

