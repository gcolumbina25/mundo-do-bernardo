import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronDown, MapPin, Calendar, Clock, Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import mascote from "@/assets/mascote.png";
import logotipo from "@/assets/logotipo.png";
import nuvem from "@/assets/nuvem.png";
import bandeiras from "@/assets/bandeiras.png";
import sol from "@/assets/sol.png";
import bola from "@/assets/bola.png";
import girassol from "@/assets/girassol.png";
import plantinhas from "@/assets/plantinhas.png";
import pipa from "@/assets/pipa.png";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    guests: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attending) {
      toast({
        title: "Atenção!",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Confirmação Enviada! 🎉",
      description: "Obrigado por confirmar sua presença!",
    });
    
    // Reset form
    setFormData({ name: "", attending: "", guests: "1" });
  };

  const openMap = () => {
    window.open("https://www.google.com/maps/search/Chácara+Sá+Menezes", "_blank");
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
        <img 
          src={nuvem} 
          alt="" 
          className="absolute top-10 left-0 w-32 opacity-60 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <img 
          src={nuvem} 
          alt="" 
          className="absolute top-20 right-0 w-40 opacity-60 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <img 
          src={sol} 
          alt="" 
          className="absolute top-10 right-10 w-20 animate-spin-slow"
        />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-8 animate-fade-in">
          <img 
            src={logotipo} 
            alt="Mundo do Bernardo" 
            className="w-72 max-w-full drop-shadow-lg"
          />
          
          <img 
            src={mascote} 
            alt="Bernardo" 
            className="w-80 max-w-full drop-shadow-2xl animate-bounce-gentle"
          />
          
          <div className="flex flex-col items-center space-y-2 animate-pulse">
            <p className="text-foreground/70 font-medium">Role para baixo e entre nessa festa!</p>
            <ChevronDown 
              className="w-8 h-8 text-primary cursor-pointer hover:scale-110 transition-transform"
              onClick={scrollToNext}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Invitation */}
      <section className="relative py-16 px-6 bg-card">
        <img 
          src={bandeiras} 
          alt="" 
          className="absolute top-0 left-0 w-full h-auto"
        />
        
        <div className="max-w-2xl mx-auto mt-16 text-center space-y-6 animate-fade-in">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed text-foreground font-medium italic">
              Era uma vez um garotinho sorridente,<br />
              Que chegou trazendo amor de repente!<br />
              Com seus olhinhos brilhantes de alegria,<br />
              Encheu nossos corações de luz todo dia.<br />
              <br />
              Um ano se passou num piscar de olhos,<br />
              E agora é hora de celebrar com orgulho!<br />
              Venha fazer parte dessa história tão doce,<br />
              Onde cada sorriso é um presente que nos move.<br />
              <br />
              No "Mundo do Bernardo", vamos festejar,<br />
              Com muita diversão e amor pra compartilhar!<br />
              <br />
              <span className="text-base not-italic">
                Com amor,<br />
                <strong>Cibelly, Rogério e Arthur Gabriel</strong>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Event Details */}
      <section className="relative py-16 px-6 bg-background">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Anote na Agenda!
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border flex items-start space-x-4 animate-slide-in">
              <div className="bg-primary/20 p-3 rounded-full">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">DATA</h3>
                <p className="text-xl text-muted-foreground">22 de Novembro de 2025</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border flex items-start space-x-4 animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-secondary/30 p-3 rounded-full">
                <Clock className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">HORÁRIO</h3>
                <p className="text-xl text-muted-foreground">A partir das 17:00</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-accent/30 p-3 rounded-full">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">LOCAL</h3>
                  <p className="text-xl text-muted-foreground">Chácara Sá Menezes</p>
                </div>
              </div>
              <Button 
                onClick={openMap}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Ver no Mapa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Gift Suggestions */}
      <section className="relative py-16 px-6 bg-card overflow-hidden">
        <img 
          src={pipa} 
          alt="" 
          className="absolute top-10 right-4 w-24 opacity-40 animate-float"
        />
        <img 
          src={bola} 
          alt="" 
          className="absolute bottom-10 left-4 w-20 opacity-40 animate-bounce-gentle"
        />
        
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl font-bold text-center text-foreground">
            Um Mimo para o Bernardo
          </h2>
          
          <p className="text-center text-lg text-muted-foreground italic">
            Sua presença é nosso maior presente! Mas, se quiserem mimar nosso pequeno, aqui estão algumas ideias:
          </p>
          
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">👕</span>
              <div>
                <p className="font-semibold text-foreground">Roupas</p>
                <p className="text-muted-foreground">Tam. 1 ou 2 anos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-3xl">👟</span>
              <div>
                <p className="font-semibold text-foreground">Calçados</p>
                <p className="text-muted-foreground">Nº 21 ou 22</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🧸</span>
              <div>
                <p className="font-semibold text-foreground">Brinquedos Educativos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-3xl">✨</span>
              <div>
                <p className="font-semibold text-foreground">Perfume</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: RSVP Form */}
      <section className="relative py-16 px-6 bg-background">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Vamos Celebrar Juntos?
            </h2>
            <p className="text-xl font-bold text-primary">
              Por favor, confirme sua presença até o dia 09 de Novembro.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl border border-border space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                Seu nome completo *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 text-base"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Vai comparecer à festa? *
              </Label>
              <RadioGroup 
                value={formData.attending}
                onValueChange={(value) => setFormData({ ...formData, attending: value })}
                required
              >
                <div className="flex items-center space-x-3 bg-background p-4 rounded-lg border border-border hover:border-primary transition-colors">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="text-base cursor-pointer flex-1">
                    Sim, com certeza! 🎉
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background p-4 rounded-lg border border-border hover:border-primary transition-colors">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="text-base cursor-pointer flex-1">
                    Infelizmente, não poderei. 😢
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attending === "yes" && (
              <div className="space-y-2 animate-fade-in">
                <Label htmlFor="guests" className="text-base font-semibold">
                  Quantas pessoas (incluindo você)?
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="h-12 text-base"
                />
              </div>
            )}

            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg shadow-lg"
            >
              Enviar Confirmação
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-16 relative">
          <img 
            src={plantinhas} 
            alt="" 
            className="w-full h-auto opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={girassol} 
              alt="" 
              className="w-16 h-auto animate-spin-slow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;