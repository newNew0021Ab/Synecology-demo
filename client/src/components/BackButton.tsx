
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigateBack } from '@/lib/navigation';

interface BackButtonProps {
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  text?: string;
  showIcon?: boolean;
}

export function BackButton({ 
  className = '', 
  variant = 'ghost',
  size = 'default',
  text = 'Назад',
  showIcon = true
}: BackButtonProps) {
  const handleBack = () => {
    navigateBack();
  };

  return (
    <Button
      onClick={handleBack}
      variant={variant}
      size={size}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {showIcon && <ArrowLeft className="w-4 h-4" />}
      {text}
    </Button>
  );
}
