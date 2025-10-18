import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronDown, MapPin, Calendar, Clock, Gift, Heart, Camera } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { MusicDialog } from "@/components/MusicDialog";
import { sendRSVPEmail } from "@/services/emailService";
import mascote from "@/assets/mascote.png";
import logotipo from "@/assets/logotipo.png";
import nuvem from "@/assets/nuvem.png";
import bandeiras from "@/assets/bandeiras.png";
import sol from "@/assets/sol.png";
import bola from "@/assets/bola.png";
import girassol from "@/assets/girassol.png";
import plantinhas from "@/assets/plantinhas.png";
import pipa from "@/assets/pipa.png";
import { GuestCounter } from "@/components/GuestCounter";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    adults: 1,
    children: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attending) {
      toast({
        title: "Atenção!",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendRSVPEmail({
        name: formData.name,
        attending: formData.attending,
        adults: formData.adults,
        children: formData.children,
      });

      if (!result.success) {
        throw new Error(result.error || "Erro ao enviar e-mail");
      }

      toast({
        title: "🎉 Confirmação Enviada!",
        description: "Obrigado por confirmar sua presença! Verifique seu e-mail.",
        duration: 5000,
        className: "bg-green-500 text-white border-green-600",
      });
      
      setFormData({ name: "", attending: "", adults: 1, children: 0 });
    } catch (error) {
      console.error("Error sending RSVP:", error);
      toast({
        title: "❌ Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente em alguns instantes.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openMap = () => {
    window.open("https://maps.app.goo.gl/FKCRhhkCo4mPZiH46", "_blank");
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <MusicDialog />
      
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
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
          src={nuvem} 
          alt="" 
          className="absolute bottom-32 left-10 w-28 opacity-50 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <img 
          src={sol} 
          alt="" 
          className="absolute top-10 left-4 w-24 animate-pulse"
        />
        <img 
          src={pipa} 
          alt="" 
          className="absolute top-1/4 right-16 w-20 opacity-70 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <img 
          src={bola} 
          alt="" 
          className="absolute top-1/3 left-12 w-16 opacity-60 animate-bounce-gentle"
          style={{ animationDelay: "1.5s" }}
        />
        <img 
          src={girassol} 
          alt="" 
          className="absolute bottom-40 right-8 w-20 opacity-70 animate-float"
          style={{ animationDelay: "2.5s" }}
        />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8 animate-fade-in max-w-md mx-auto">
          <img 
            src={logotipo} 
            alt="Mundo do Bernardo" 
            className="w-56 sm:w-72 max-w-full drop-shadow-lg"
          />
          
          <img 
            src={mascote} 
            alt="Bernardo" 
            className="w-72 sm:w-80 max-w-full drop-shadow-2xl animate-bounce-gentle"
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
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-card overflow-hidden">
        <img 
          src={bandeiras} 
          alt="" 
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img 
          src={nuvem} 
          alt="" 
          className="absolute top-24 left-4 w-28 opacity-40 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <img 
          src={nuvem} 
          alt="" 
          className="absolute top-40 right-4 w-32 opacity-40 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <img 
          src={sol} 
          alt="" 
          className="absolute top-32 right-8 w-16 opacity-50 animate-pulse"
        />
        <img 
          src={bola} 
          alt="" 
          className="absolute bottom-20 left-6 w-14 opacity-30 animate-bounce-gentle"
        />
        <img 
          src={pipa} 
          alt="" 
          className="absolute bottom-32 right-6 w-16 opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />
        
        <div className="max-w-2xl mx-auto mt-12 sm:mt-16 text-center space-y-4 sm:space-y-6 animate-fade-in relative z-10 px-4">
          <div className="prose prose-sm sm:prose-base mx-auto">
            <p className="text-base sm:text-lg leading-relaxed text-foreground font-medium italic">
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
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-background overflow-hidden">
        <img 
          src={bandeiras} 
          alt="" 
          className="absolute top-0 left-0 w-full h-auto opacity-20"
        />
        <img 
          src={girassol} 
          alt="" 
          className="absolute top-16 right-8 w-24 opacity-20 animate-float"
        />
        <img 
          src={bola} 
          alt="" 
          className="absolute bottom-16 left-8 w-20 opacity-20 animate-bounce-gentle"
        />
        
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">
            Anote na Agenda!
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border flex items-start space-x-3 sm:space-x-4 animate-slide-in">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-foreground">DATA</h3>
                <p className="text-lg sm:text-xl text-muted-foreground">22 de Novembro de 2025</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border flex items-start space-x-3 sm:space-x-4 animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-secondary/30 p-2 sm:p-3 rounded-full flex-shrink-0">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-foreground">HORÁRIO</h3>
                <p className="text-lg sm:text-xl text-muted-foreground">A partir das 17:00</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                <div className="bg-accent/30 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground">LOCAL</h3>
                  <p className="text-lg sm:text-xl text-muted-foreground">Chácara Sá Menezes</p>
                </div>
              </div>
              <Button 
                onClick={openMap}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 sm:py-6 text-base sm:text-lg"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Ver no Mapa
              </Button>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-4 sm:p-6 shadow-lg border border-primary/30 animate-slide-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center justify-center space-x-3">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
                <div className="text-center">
                  <p className="text-lg sm:text-xl font-bold text-foreground">
                    Faltam <span className="text-primary">{Math.max(0, Math.ceil((new Date('2025-11-22').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))}</span> dias
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    para nos vermos!
                  </p>
                </div>
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Important Schedule Information */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-sky-50 overflow-hidden">
        <img 
          src={sol} 
          alt="" 
          className="absolute top-4 right-4 w-16 sm:w-20 opacity-30 animate-spin-slow"
        />
        <img 
          src={pipa} 
          alt="" 
          className="absolute bottom-8 left-4 w-12 sm:w-16 opacity-25 animate-float"
        />
        <img 
          src={girassol} 
          alt="" 
          className="absolute top-1/2 left-8 w-20 sm:w-24 opacity-20 animate-bounce-gentle"
        />
        
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Caros convidados, chegue cedo! 🌅
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Fotos com convidados */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-200 animate-slide-in">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-gradient-to-br from-blue-400 to-sky-400 p-3 sm:p-4 rounded-full flex-shrink-0 shadow-lg">
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
                    📸 Fotos com os Convidados
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-semibold">
                    Das 17h às 18h30
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    Não perca o momento especial de registrar a festa!
                  </p>
                </div>
              </div>
            </div>

            {/* Parabéns */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-200 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 sm:p-4 rounded-full flex-shrink-0 shadow-lg">
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
                    🎂 Os Parabéns
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-semibold">
                    Impreterivelmente às 19h00
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    Bernardo é um bebê e tem sua rotina de soninho! 😴
                  </p>
                </div>
              </div>
            </div>

            {/* Agradecimento */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-green-200 animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-400 to-blue-400 p-3 sm:p-4 rounded-full w-fit mx-auto mb-4 shadow-lg">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
                  Agradecemos a sua compreensão! 🙏
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Sua presença é muito especial para nós!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Gift Suggestions */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-card overflow-hidden">
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
        
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground px-4">
            Um Mimo para o Bernardo
          </h2>
          
          <p className="text-center text-base sm:text-lg text-muted-foreground italic px-4">
            Sua presença é nosso maior presente! Mas, se quiserem mimar nosso pequeno, aqui estão algumas ideias:
          </p>
          
          <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg border border-border space-y-4 mx-4">
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
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Vamos Celebrar Juntos?
            </h2>
            <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-4 mx-4">
              <p className="text-base sm:text-lg font-bold text-muted-foreground text-center">
                ⏰ Por favor, confirme sua presença<br />
                até o dia <span className="text-destructive font-extrabold">09 de Novembro</span>.
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl border border-border space-y-6">
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
              <div className="animate-fade-in">
                <GuestCounter
                  adults={formData.adults}
                  children={formData.children}
                  onAdultsChange={(count) => setFormData({ ...formData, adults: count })}
                  onChildrenChange={(count) => setFormData({ ...formData, children: count })}
                />
              </div>
            )}

            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Enviando...
                </>
              ) : (
                "Enviar Confirmação"
              )}
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
        </div>

        {/* Credits */}
        <div className="mt-8 text-center px-4">
          <p className="text-xs text-muted-foreground">
            Desenvolvido por Columbina Creative Designer. Quer um site igual esse?{" "}
            <a 
              href="https://wa.me/5581991057647" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              Clique aqui
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;