import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX, X } from "lucide-react";
import backgroundMusic from "@/assets/background-music.mp3";

export const MusicDialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(backgroundMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    setIsOpen(false);
  };

  const handleDecline = () => {
    setIsOpen(false);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleDecline}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white border-2 border-primary/20 rounded-2xl p-4 sm:p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleDecline}
              className="absolute right-3 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </button>
            
            {/* Header */}
            <div className="space-y-3 pr-8">
              <h2 className="flex items-center justify-center gap-2 text-lg sm:text-2xl font-semibold leading-none tracking-tight text-gray-800">
                <Music className="w-5 h-5 sm:w-8 sm:h-8 text-primary animate-bounce-gentle" />
                Música de Fundo
              </h2>
              <p className="text-center text-sm sm:text-base text-gray-600 px-1">
                Gostaria de ouvir uma música especial enquanto navega pela festa do Bernardo?
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                onClick={handlePlay}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base py-3"
              >
                Sim, quero ouvir! 🎵
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                size="lg"
                className="text-sm sm:text-base py-3"
              >
                Não, obrigado
              </Button>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-3 sm:p-4 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      )}
    </>
  );
};
