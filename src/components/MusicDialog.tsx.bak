import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX } from "lucide-react";
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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-md bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2 text-2xl">
              <Music className="w-8 h-8 text-primary animate-bounce-gentle" />
              Música de Fundo
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-4">
              Gostaria de ouvir uma música especial enquanto navega pela festa do Bernardo?
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4 justify-center pt-4">
            <Button
              onClick={handlePlay}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Sim, quero ouvir! 🎵
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              size="lg"
            >
              Não, obrigado
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {!isOpen && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </button>
      )}
    </>
  );
};
