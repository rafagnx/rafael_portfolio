import { ArrowRight, Zap, TrendingUp, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section pt-12 md:pt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 icon-neon" />
                <span className="text-primary text-sm font-medium">Especialista em Marketing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Rafael <span className="text-primary">Alves</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Performance e Branding | Comunicação | Automação e IA
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Com mais de 15 anos de experiência em marketing estratégico, combino expertise em gestão de tráfego digital (900k+ investidos) com as tecnologias mais recentes em automação inteligente e IA generativa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Vamos Conversar
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#expertise" className="btn-secondary inline-flex items-center justify-center">
                Ver conhecimento
              </a>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">📧</span> vagasrafael@hotmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">💬</span> (22) 99986-3324
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">📍</span> Rio de Janeiro, Brasil
              </p>
            </div>
          </div>

          {/* Right - Stats with Icons */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded border border-border neon-border hover:neon-glow transition-all">
                <TrendingUp className="w-8 h-8 icon-neon mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="p-6 bg-card rounded border border-border neon-border-secondary hover:neon-glow-secondary transition-all">
                <Zap className="w-8 h-8 icon-neon-secondary mb-3" />
                <div className="text-3xl font-bold text-secondary mb-2">900k+</div>
                <p className="text-sm text-muted-foreground">Investidos em Tráfego</p>
              </div>
            </div>

            <div className="p-6 bg-card rounded border border-border neon-border">
              <Cpu className="w-8 h-8 icon-neon-accent mb-4" />
              <h4 className="font-bold mb-4 text-primary">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/rafagnx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/rafagnx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

