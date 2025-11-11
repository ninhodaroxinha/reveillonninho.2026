import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, MapPin, Users, Music, Phone, Calendar, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import logoFooter from "@/assets/logoroxinha.png";
import heroImage from "@/assets/hero-reveillon.jpg";
import venueImage from "@/assets/venue-aerial.png";
import fireworksImage from "@/assets/celebration-fireworks.jpg";
import venueInteriorImage from "@/assets/venue-interior.png";
import foodDrinksImage from "@/assets/food-drinks.png";

const Index = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=552732531516&text=Ol%C3%A1,%20realizei%20a%20compra%20de%20ingresso%20para%20o%20%2AR%C3%A9veillon%2A%20e%20gostaria%20de%20confirmar%20minha%20mesa.%0A%0ANome%20completo%20do%20comprador:%0ANome%20dos%20convidados:%0AQuantidade%20de%20ingressos%20inteiros:%0AQuantidade%20de%20crian%C3%A7as%20meia:%20(7%20a%2012%20anos):%0AQuantidade%20de%20crian%C3%A7as%20isentas%20(0%20a%206%20anos):";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logo} alt="Ninho da Roxinha" className="h-12 w-auto" />
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('evento')}
              className="hidden md:inline-block text-foreground hover:text-primary transition-colors"
            >
              O Evento
            </button>
            <button 
              onClick={() => scrollToSection('local')}
              className="hidden md:inline-block text-foreground hover:text-primary transition-colors"
            >
              O Local
            </button>
            <Button 
              asChild
              className="bg-gradient-gold hover:scale-105 transition-transform shadow-glow animate-glow"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                🎟️ Garantir Ingresso
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-24 text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-white animate-float" />
            <span className="text-white text-lg font-semibold">31 de Dezembro, 2025</span>
            <Sparkles className="w-8 h-8 text-white animate-float" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            Réveillon no Ninho
            <span className="block text-white mt-2">2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Celebre o Ano Novo em um lugar mágico!
          </p>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Vista do mar, música de qualidade e momentos inesquecíveis te esperam no alto da colina
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-gold hover:scale-105 transition-all shadow-glow font-bold animate-glow"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                🎟️ Garanta seu Ingresso Agora
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all"
            >
              <a href="https://ninhodaroxinha.com.br/ingressos/reveillon" target="_blank" rel="noopener noreferrer">
                Veja o que está incluso
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Nova Almeida, ES</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>31/12/2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>Vagas Limitadas</span>
            </div>
          </div>
        </div>

      </section>

      {/* About Event Section */}
      <section id="evento" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Uma Noite para Brilhar e Celebrar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Receba o Ano Novo com energia positiva, natureza exuberante e vista privilegiada do mar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src={fireworksImage} 
                alt="Fogos de artifício sobre a praia" 
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
              />
            </div>

            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Experiência Única</h3>
                  <p className="text-muted-foreground">
                    Celebre o Ano Novo em uma casa encantadora localizada no alto de uma colina com vista para as praias de Nova Almeida.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-purple flex items-center justify-center flex-shrink-0 shadow-purple">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Música e Alegria</h3>
                  <p className="text-muted-foreground">
                    Boa música, ambiente acolhedor e a energia perfeita para criar memórias inesquecíveis sob o céu estrelado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-festive flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Vista do Mar</h3>
                  <p className="text-muted-foreground">
                    Brinde ao Ano Novo com vista panorâmica do oceano, brisa marinha e um ambiente repleto de charme natural.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Venue Section */}
      <section id="local" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O Local
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um espaço acolhedor e mágico, perfeito para celebrar com alma
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1 space-y-6 animate-fade-in-up">
                <Card className="p-6 bg-gradient-to-br from-card to-muted border-border shadow-elegant">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Ninho da Roxinha</h3>
                  <p className="text-muted-foreground mb-4">
                    Nascido de um amor nos anos 1980, o Ninho da Roxinha é uma charmosa casa de madeira projetada pelo renomado arquiteto Zanine Caldas. O que era casa de veraneio da família Muroni se tornou o cenário perfeito para a realização de sonhos.
                  </p>
                  <p className="text-muted-foreground">
                    Com visual privilegiado, o Ninho encanta pela beleza única do ambiente, gastronomia de qualidade e atendimento atencioso.
                  </p>
                </Card>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">Nova Almeida, Espírito Santo</span>
                </div>
              </div>

              <div className="order-1 md:order-2 animate-fade-in">
                <img 
                  src={venueImage} 
                  alt="Vista do Ninho da Roxinha com oceano ao fundo" 
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 animate-fade-in-up">
              <Card className="p-6 bg-gradient-gold shadow-glow max-w-2xl w-full">
                <div className="flex items-center gap-3 mb-3 justify-center">
                  <Users className="w-8 h-8 text-white" />
                  <h4 className="text-xl font-bold text-white">Capacidade</h4>
                </div>
                <p className="text-white text-lg text-center">
                  Espaço acolhedor para 50 a 500 pessoas, com áreas internas e externas cercadas por natureza e brisa do mar.
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 w-full">
                <img 
                  src={venueInteriorImage} 
                  alt="Interior do Ninho da Roxinha" 
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
                <img 
                  src={foodDrinksImage} 
                  alt="Gastronomia do Ninho da Roxinha" 
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Vibes Section */}
      <section className="py-20 bg-gradient-festive">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
            <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8">
              "Um Réveillon cheio de alma, natureza e boas vibrações!"
            </blockquote>
            <p className="text-xl text-white/90 mb-8">
              Venha celebrar conosco o início de um novo ciclo em um dos lugares mais especiais do Espírito Santo
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">✨ Vista do Mar</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">🎵 Música ao Vivo</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">🥂 Open Bar</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">🎆 Fogos de Artifício</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">🌟 Energia Positiva</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card via-muted to-card border-primary/20 shadow-elegant text-center animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-10 h-10 text-primary animate-float" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Vagas Limitadas!
              </h2>
              <Sparkles className="w-10 h-10 text-primary animate-float" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Garanta seu lugar nesta celebração inesquecível
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-gold hover:scale-105 transition-all shadow-glow font-bold w-full sm:w-auto"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Reserve pelo WhatsApp
                </a>
              </Button>

              <Button 
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 w-full sm:w-auto bg-[#673437] text-white border-[#673437] hover:bg-[#673437]/90"
              >
                <a href="https://ninhodaroxinha.com.br/ingressos/reveillon" target="_blank" rel="noopener noreferrer">
                  Ver Ingressos Disponíveis
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Entre em contato agora e garanta sua vaga para o Réveillon no Ninho 2026! 🎉
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#673437] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <img src={logoFooter} alt="Ninho da Roxinha" className="h-16 w-auto" />
            
            <div className="text-white">
              <p className="mb-2">📍 Nova Almeida, Espírito Santo</p>
              <p className="mb-2">📅 31 de Dezembro, 2025</p>
              <a 
                href="https://www.ninhodaroxinha.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                www.ninhodaroxinha.com.br
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            <p>© 2024 Ninho da Roxinha. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
