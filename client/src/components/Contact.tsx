import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section border-t border-border">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-primary">Vamos</span> Conversar
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="w-5 h-5 icon-neon flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-foreground mb-1">E-mail</p>
                <a href="mailto:vagasrafael@hotmail.com" className="text-sm text-primary hover:text-accent transition-colors">
                  vagasrafael@hotmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 icon-neon-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-foreground mb-1">WhatsApp</p>
                <a href="https://wa.me/5522999863324" className="text-sm text-primary hover:text-accent transition-colors">
                  (22) 99986-3324
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-5 h-5 icon-neon-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-foreground mb-1">Localização</p>
                <p className="text-sm text-muted-foreground">Rio de Janeiro, Brasil</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="font-medium text-foreground mb-4">Redes Sociais</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/rafagnx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/rafagnx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Sua mensagem aqui..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 rounded bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex gap-2">
                <span>✓</span>
                <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex gap-2">
                <span>✗</span>
                <span>Erro ao enviar mensagem. Tente novamente ou envie um e-mail direto.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Enviando...' : <>
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

