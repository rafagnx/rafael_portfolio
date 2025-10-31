import { CheckCircle2, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-primary">Sobre</span> Mim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              Sou um profissional versátil com mais de 15 anos de experiência em marketing estratégico, comunicação institucional e gestão de performance. Minha trajetória combina expertise em <span className="text-primary font-medium">gestão de tráfego digital</span> (900k+ investidos), <span className="text-primary font-medium">branding estratégico</span>, <span className="text-primary font-medium">automação de marketing</span> e as mais recentes tecnologias em <span className="text-primary font-medium">inteligência artificial</span> e <span className="text-primary font-medium">automação com N8N</span>.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Atualmente, estou na vanguarda da transformação digital, integrando <span className="text-accent font-medium">agentes de IA</span>, <span className="text-accent font-medium">automação inteligente</span> e <span className="text-accent font-medium">análise de dados</span> para criar estratégias de marketing mais eficientes, escaláveis e orientadas por resultados.
            </p>

            <div className="space-y-4 pt-4">
              <h4 className="font-bold text-primary">Diferenciais Principais</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Combinação rara de expertise em marketing estratégico + domínio técnico em automação e IA</span>
                </li>
                <li className="text-sm text-muted-foreground flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Todas as estratégias são mensuráveis e focadas em ROI</span>
                </li>
                <li className="text-sm text-muted-foreground flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Inovação contínua explorando novas tecnologias e metodologias</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card rounded border border-border neon-border">
              <Award className="w-8 h-8 icon-neon mb-4" />
              <h4 className="font-bold mb-4 text-primary">Formação</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">Especialização em Gestão de Marketing</p>
                  <p className="text-muted-foreground text-xs">O Novo Mercado • 2025</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Publicidade Propaganda / Produção Cultural</p>
                  <p className="text-muted-foreground text-xs">IFRJ • 2013-2014</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Comunicação Social / Jornalismo</p>
                  <p className="text-muted-foreground text-xs">UFRJ • 2009-2013</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded border border-border neon-border-secondary">
              <BookOpen className="w-8 h-8 icon-neon-secondary mb-4" />
              <h4 className="font-bold mb-4 text-secondary">Certificações</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">IA para Marketing</p>
                  <p className="text-muted-foreground text-xs">Conversion Academy • 2025</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Desenvolvimento Front-End</p>
                  <p className="text-muted-foreground text-xs">RocketSeat & OneBitCode • 2022-2023</p>
                </div>
                 <div>
                  <p className="font-medium text-foreground">Comunidade Sobral de Tráfego</p>
                  <p className="text-muted-foreground text-xs">Pedro Sobral • 2022-2023</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Conversão Extrema</p>
                  <p className="text-muted-foreground text-xs">Tiago Tessmann  • 2022-2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

