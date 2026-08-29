import React from 'react';

interface SectionHeadingProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  badge,
  title,
  subtitle,
  center = true,
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <div id={id} className={`max-w-3xl mb-12 sm:mb-16 ${center ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-3 ${
          isDark
            ? 'bg-[#5D0E11] text-[#D4AF37] border border-[#D4AF37]/50 shadow-sm'
            : 'bg-[#FFFDD0] text-[#5D0E11] border border-[#D4AF37]/40 shadow-xs'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block" />
          {badge}
        </div>
      )}

      <h2
        className={`font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          isDark ? 'text-[#FFFDD0]' : 'text-[#5D0E11]'
        }`}
      >
        {title}
      </h2>

      {/* Subtle Indian Ornamental Motif Divider with Sophisticated Gold */}
      <div className={`flex items-center gap-3 my-4 ${center ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37] shadow-sm" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      {subtitle && (
        <p
          className={`font-sans text-sm sm:text-base md:text-lg leading-relaxed ${
            isDark ? 'text-[#FFFDD0]/80' : 'text-[#4A3236]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
