// src/components/RubyText.tsx
import React from 'react';

interface FuriganaProps {
  kanji: string;
  reading: string;
}

// src/components/RubyText.tsx
export const RubyText: React.FC<FuriganaProps> = ({ kanji, reading }) => {
  return (
    <ruby className="ruby-position select-all">
      {kanji}
      <rp className="hidden">(</rp>
      {/* 💡 Adding ruby-position class and a condition handles empty values gracefully */}
      {reading && (
        <rt className="text-[10px] sm:text-xs font-serif tracking-normal text-[#A84848]/80 pb-1 select-none">
          {reading}
        </rt>
      )}
      <rp className="hidden">)</rp>
    </ruby>
  );
};