import React from 'react';

interface MascotProps {
  className?: string;
  size?: number | string;
  mood?: 'happy' | 'thinking' | 'celebrating';
}

export const MascotIllustration: React.FC<MascotProps> = ({
  className = '',
  size = 180,
  mood = 'happy'
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`select-none ${className}`}
    >
      <defs>
        <linearGradient id="mascotSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
        <linearGradient id="mascotShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="detectiveHat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Sparkles if celebrating */}
      {mood === 'celebrating' && (
        <g>
          <polygon points="30,40 33,48 42,48 35,53 38,62 30,56 22,62 25,53 18,48 27,48" fill="#facc15" />
          <polygon points="170,45 173,53 182,53 175,58 178,67 170,61 162,67 165,58 158,53 167,53" fill="#facc15" />
          <circle cx="45" cy="85" r="4" fill="#f43f5e" />
          <circle cx="160" cy="90" r="4" fill="#3b82f6" />
        </g>
      )}

      {/* Shoulders & Shirt */}
      <path d="M55,190 C55,145 145,145 145,190 Z" fill="url(#mascotShirt)" />
      {/* Shirt collar */}
      <polygon points="100,165 85,145 115,145" fill="#f8fafc" />

      {/* Face & Head */}
      <ellipse cx="100" cy="115" rx="42" ry="40" fill="url(#mascotSkin)" />
      {/* Ears */}
      <circle cx="58" cy="118" r="10" fill="url(#mascotSkin)" />
      <circle cx="58" cy="118" r="5" fill="#f472b6" opacity="0.4" />
      <circle cx="142" cy="118" r="10" fill="url(#mascotSkin)" />
      <circle cx="142" cy="118" r="5" fill="#f472b6" opacity="0.4" />

      {/* Rosy Cheeks */}
      <circle cx="75" cy="126" r="8" fill="#fb7185" opacity="0.6" />
      <circle cx="125" cy="126" r="8" fill="#fb7185" opacity="0.6" />

      {/* Big cartoon eyes */}
      <ellipse cx="80" cy="112" rx="7" ry="10" fill="#1e293b" />
      <circle cx="82" cy="108" r="3.5" fill="#ffffff" />
      <circle cx="78" cy="114" r="1.5" fill="#ffffff" />

      <ellipse cx="120" cy="112" rx="7" ry="10" fill="#1e293b" />
      <circle cx="122" cy="108" r="3.5" fill="#ffffff" />
      <circle cx="118" cy="114" r="1.5" fill="#ffffff" />

      {/* Eyebrows */}
      {mood === 'thinking' ? (
        <>
          <path d="M72,98 Q80,94 88,98" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M112,96 Q120,102 128,100" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M72,96 Q80,92 88,96" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M112,96 Q120,92 128,96" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      )}

      {/* Smile */}
      {mood === 'celebrating' ? (
        <path d="M86,128 Q100,146 114,128 Z" fill="#e11d48" stroke="#9f1239" strokeWidth="2" />
      ) : mood === 'thinking' ? (
        <path d="M92,132 Q100,136 108,130" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M88,128 Q100,142 112,128" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
      )}

      {/* Hair Tuft peeking from hat */}
      <path d="M68,88 Q80,82 85,88 Q95,78 108,86 Q115,80 128,88" stroke="#78350f" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Detective Beret / Hat */}
      <ellipse cx="100" cy="78" rx="52" ry="24" fill="url(#detectiveHat)" />
      <ellipse cx="100" cy="74" rx="42" ry="18" fill="#f59e0b" />
      {/* Hat brim curve */}
      <path d="M50,82 Q100,68 150,82" stroke="#b45309" strokeWidth="3.5" fill="none" />
      <circle cx="100" cy="56" r="5" fill="#b45309" />

      {/* Magnifying Glass held in hand */}
      <g transform="translate(115, 105) rotate(25)">
        {/* Handle */}
        <rect x="25" y="22" width="10" height="42" rx="4" fill="#92400e" stroke="#78350f" strokeWidth="2" />
        {/* Rim */}
        <circle cx="30" cy="18" r="24" fill="#e0f2fe" fillOpacity="0.45" stroke="#f59e0b" strokeWidth="6" />
        {/* Glass Glare */}
        <path d="M18,8 A20,20 0 0,1 40,8" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
      </g>
    </svg>
  );
};
