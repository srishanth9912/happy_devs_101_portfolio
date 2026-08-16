import React from 'react';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  separator?: string;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  reverse = false,
  separator = '✦',
  className = ''
}) => {
  const content = items.map((item, i) => (
    <React.Fragment key={i}>
      <span className="text-[#FAFAFA]/80 font-heading font-semibold text-sm sm:text-base uppercase tracking-[0.2em]">
        {item}
      </span>
      <span className="text-[#CCFF00] text-xs">{separator}</span>
    </React.Fragment>
  ));

  return (
    <div className={`overflow-hidden py-5 border-y border-white/[0.04] ${className}`}>
      <div className={`marquee-track ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <div className="marquee-content">{content}</div>
        <div className="marquee-content" aria-hidden="true">{content}</div>
      </div>
    </div>
  );
};
