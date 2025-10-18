import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface GuestCounterProps {
  adults: number;
  children: number;
  onAdultsChange: (count: number) => void;
  onChildrenChange: (count: number) => void;
}

export const GuestCounter: React.FC<GuestCounterProps> = ({
  adults,
  children,
  onAdultsChange,
  onChildrenChange,
}) => {
  const handleAdultsIncrement = () => {
    onAdultsChange(adults + 1);
  };

  const handleAdultsDecrement = () => {
    if (adults > 0) {
      onAdultsChange(adults - 1);
    }
  };

  const handleChildrenIncrement = () => {
    onChildrenChange(children + 1);
  };

  const handleChildrenDecrement = () => {
    if (children > 0) {
      onChildrenChange(children - 1);
    }
  };

  return (
    <div className="space-y-6">
      <Label className="text-base font-semibold">
        Quantas pessoas (incluindo você)?
      </Label>
      
      {/* Adultos */}
      <div className="flex items-center justify-between bg-background p-4 rounded-lg border border-border">
        <div className="flex-1">
          <Label className="text-base font-semibold text-gray-800">
            Adultos
          </Label>
          <p className="text-sm text-gray-500 mt-1">
            Faixa etária: (Acima de 8 anos)
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleAdultsDecrement}
            disabled={adults === 0}
            className="h-10 w-10 rounded-full border-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg font-medium">-</span>
          </Button>
          <div className="w-16 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg bg-white">
            <span className="text-base font-medium text-gray-800">{adults}</span>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleAdultsIncrement}
            className="h-10 w-10 rounded-full border-2 hover:bg-gray-50"
          >
            <span className="text-lg font-medium">+</span>
          </Button>
        </div>
      </div>

      {/* Crianças */}
      <div className="flex items-center justify-between bg-background p-4 rounded-lg border border-border">
        <div className="flex-1">
          <Label className="text-base font-semibold text-gray-800">
            Crianças
          </Label>
          <p className="text-sm text-gray-500 mt-1">
            Faixa etária: (Até 7 anos)
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleChildrenDecrement}
            disabled={children === 0}
            className="h-10 w-10 rounded-full border-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg font-medium">-</span>
          </Button>
          <div className="w-16 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg bg-white">
            <span className="text-base font-medium text-gray-800">{children}</span>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleChildrenIncrement}
            className="h-10 w-10 rounded-full border-2 hover:bg-gray-50"
          >
            <span className="text-lg font-medium">+</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
