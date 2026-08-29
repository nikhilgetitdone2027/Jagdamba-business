import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gold';
  customImageSrc?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'gold',
  customImageSrc,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl',
  };

  // If a custom image is provided or dropped in assets, render the image cleanly
  if (customImageSrc) {
    return (
      <div className={`relative rounded-full overflow-hidden shrink-0 border-2 border-[#C5A059] shadow-md ${sizeClasses[size]} ${className}`}>
        <img
          src={customImageSrc}
          alt="Jagdamba Caterer & Event Planner Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    );
  }

  // High-craft SVG circular emblem with Royal Indian filigree and monogram
  return (
    <div
      className={`relative rounded-full shrink-0 flex items-center justify-center select-none shadow-lg transition-transform duration-300 hover:scale-105 ${sizeClasses[size]} ${className}`}
      title="Jagdamba Caterer & Event Planner"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDD0" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA7C11" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <linearGradient id="burgundyBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5D0E11" />
            <stop offset="100%" stopColor="#1A0307" />
          </linearGradient>
        </defs>

        {/* Outer Ring with Gold Border */}
        <circle cx="50" cy="50" r="47" fill="url(#burgundyBg)" stroke="url(#goldGradient)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="43" stroke="url(#goldGradient)" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Decorative Ornamental Dots */}
        <circle cx="50" cy="8" r="1.5" fill="url(#goldGradient)" />
        <circle cx="50" cy="92" r="1.5" fill="url(#goldGradient)" />
        <circle cx="8" cy="50" r="1.5" fill="url(#goldGradient)" />
        <circle cx="92" cy="50" r="1.5" fill="url(#goldGradient)" />

        {/* Central Mandala / Lotus Accent Motif */}
        <path
          d="M50 20 C46 28, 40 32, 35 34 C42 37, 45 42, 45 48 C48 42, 52 42, 55 48 C55 42, 58 37, 65 34 C60 32, 54 28, 50 20 Z"
          fill="url(#goldGradient)"
          opacity="0.3"
        />

        {/* Brand Initial Monogram: J C */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="url(#goldGradient)"
          fontFamily="Cinzel, 'Playfair Display', serif"
          fontWeight="bold"
          fontSize="24"
          letterSpacing="1"
        >
          JC
        </text>

        {/* Bottom Arc Text / Subtitle */}
        <text
          x="50"
          y="72"
          textAnchor="middle"
          fill="#FFFDD0"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fontSize="5.5"
          letterSpacing="2"
        >
          JAGDAMBA
        </text>
        <text
          x="50"
          y="79"
          textAnchor="middle"
          fill="#D4AF37"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="600"
          fontSize="4"
          letterSpacing="1.5"
        >
          EST. 1996 • 30+ YRS
        </text>
      </svg>
    </div>
  );
};
