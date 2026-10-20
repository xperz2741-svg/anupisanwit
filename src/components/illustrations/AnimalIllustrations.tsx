import React from 'react';

interface IllustrationProps {
  id: string;
  isSilhouette: boolean;
}

export const AnimalIllustration: React.FC<IllustrationProps> = ({ id, isSilhouette }) => {
  const silFill = '#1e293b';

  switch (id) {
    // 1. แมว (Cat)
    case 'cat':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="50,65 35,22 72,45" />
            <polygon points="110,65 125,22 88,45" />
            <ellipse cx="80" cy="62" rx="36" ry="30" />
            <ellipse cx="80" cy="112" rx="38" ry="42" />
            <path d="M108,125 C135,125 155,100 148,72 C142,50 125,52 130,62 C135,72 135,88 116,98 Z" />
            <circle cx="62" cy="148" r="10" />
            <circle cx="98" cy="148" r="10" />
          </g>
        );
      }
      return (
        <g>
          <path d="M108,125 C135,125 155,100 148,72 C142,50 125,52 130,62 C135,72 135,88 116,98 Z" fill="#d97706" />
          <ellipse cx="80" cy="112" rx="38" ry="42" fill="#f59e0b" />
          <ellipse cx="80" cy="120" rx="20" ry="26" fill="#fef3c7" />
          <polygon points="50,65 35,22 72,45" fill="#f59e0b" />
          <polygon points="48,60 38,28 66,45" fill="#f43f5e" opacity="0.7" />
          <polygon points="110,65 125,22 88,45" fill="#f59e0b" />
          <polygon points="112,60 122,28 94,45" fill="#f43f5e" opacity="0.7" />
          <ellipse cx="80" cy="62" rx="36" ry="30" fill="#f59e0b" />
          <circle cx="56" cy="72" r="7" fill="#fb7185" opacity="0.6" />
          <circle cx="104" cy="72" r="7" fill="#fb7185" opacity="0.6" />
          <ellipse cx="66" cy="58" rx="6" ry="8" fill="#1e293b" />
          <circle cx="68" cy="56" r="2.5" fill="#ffffff" />
          <ellipse cx="94" cy="58" rx="6" ry="8" fill="#1e293b" />
          <circle cx="96" cy="56" r="2.5" fill="#ffffff" />
          <polygon points="76,66 84,66 80,71" fill="#f43f5e" />
          <path d="M75,72 Q80,77 80,72 Q80,77 85,72" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <line x1="42" y1="66" x2="22" y2="63" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="42" y1="72" x2="20" y2="74" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="118" y1="66" x2="138" y2="63" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="118" y1="72" x2="140" y2="74" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="62" cy="148" rx="12" ry="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <ellipse cx="98" cy="148" rx="12" ry="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        </g>
      );

    // 2. สุนัข (Dog)
    case 'dog':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <ellipse cx="38" cy="62" rx="14" ry="28" transform="rotate(-15 38 62)" />
            <ellipse cx="122" cy="62" rx="14" ry="28" transform="rotate(15 122 62)" />
            <circle cx="80" cy="62" r="36" />
            <ellipse cx="80" cy="115" rx="38" ry="40" />
            <path d="M110,120 Q145,115 142,85 Q135,82 130,95 Z" />
            <circle cx="60" cy="148" r="10" />
            <circle cx="100" cy="148" r="10" />
          </g>
        );
      }
      return (
        <g>
          <path d="M110,120 Q145,115 142,85 Q135,82 130,95 Z" fill="#92400e" />
          <ellipse cx="38" cy="62" rx="14" ry="28" transform="rotate(-15 38 62)" fill="#78350f" />
          <ellipse cx="122" cy="62" rx="14" ry="28" transform="rotate(15 122 62)" fill="#78350f" />
          <ellipse cx="80" cy="115" rx="38" ry="40" fill="#b45309" />
          <ellipse cx="80" cy="120" rx="20" ry="24" fill="#fef3c7" />
          <path d="M52,94 Q80,104 108,94" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
          <circle cx="80" cy="102" r="5" fill="#facc15" />
          <circle cx="80" cy="62" r="35" fill="#d97706" />
          <ellipse cx="64" cy="56" rx="12" ry="14" fill="#92400e" opacity="0.35" />
          <circle cx="66" cy="56" r="6" fill="#1e293b" />
          <circle cx="68" cy="54" r="2.5" fill="#ffffff" />
          <circle cx="94" cy="56" r="6" fill="#1e293b" />
          <circle cx="96" cy="54" r="2.5" fill="#ffffff" />
          <circle cx="52" cy="70" r="6" fill="#fb7185" opacity="0.6" />
          <circle cx="108" cy="70" r="6" fill="#fb7185" opacity="0.6" />
          <ellipse cx="80" cy="72" rx="16" ry="12" fill="#fef3c7" />
          <ellipse cx="80" cy="67" rx="7" ry="5" fill="#1e293b" />
          <path d="M80,72 L80,76 M74,76 Q80,82 86,76" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M78,78 Q80,86 84,84 Q86,81 83,78 Z" fill="#f43f5e" />
          <ellipse cx="60" cy="148" rx="12" ry="8" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
          <ellipse cx="100" cy="148" rx="12" ry="8" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
        </g>
      );

    // 3. ช้าง (Elephant)
    case 'elephant':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M80,80 Q105,82 110,65 Q115,45 102,40 Q94,38 92,48 Q94,56 82,62 Z" />
            <ellipse cx="44" cy="72" rx="26" ry="34" transform="rotate(-10 44 72)" />
            <circle cx="76" cy="70" r="32" />
            <ellipse cx="100" cy="104" rx="42" ry="36" />
            <rect x="70" y="115" width="16" height="36" rx="8" />
            <rect x="94" y="115" width="16" height="36" rx="8" />
            <rect x="120" y="115" width="16" height="36" rx="8" />
            <path d="M140,95 Q150,110 148,125" stroke={silFill} strokeWidth="5" fill="none" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          <path d="M140,95 Q150,110 148,125" stroke="#64748b" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="147" cy="126" r="3" fill="#475569" />
          <rect x="70" y="115" width="16" height="36" rx="8" fill="#64748b" />
          <rect x="94" y="115" width="16" height="36" rx="8" fill="#64748b" />
          <rect x="120" y="115" width="16" height="36" rx="8" fill="#475569" />
          <ellipse cx="100" cy="104" rx="42" ry="36" fill="#94a3b8" />
          <ellipse cx="44" cy="72" rx="26" ry="34" transform="rotate(-10 44 72)" fill="#94a3b8" />
          <ellipse cx="44" cy="72" rx="18" ry="24" transform="rotate(-10 44 72)" fill="#f472b6" opacity="0.6" />
          <circle cx="76" cy="70" r="30" fill="#94a3b8" />
          <path d="M78,82 Q88,88 92,80 Q88,78 78,76 Z" fill="#fef08a" />
          <path d="M74,74 Q98,78 104,60 Q108,44 98,40 Q90,38 90,46 Q92,54 78,58 Z" fill="#94a3b8" />
          <circle cx="68" cy="62" r="5" fill="#1e293b" />
          <circle cx="70" cy="60" r="2" fill="#ffffff" />
          <circle cx="58" cy="76" r="6" fill="#f472b6" opacity="0.6" />
        </g>
      );

    // 4. กระต่าย (Rabbit)
    case 'rabbit':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <ellipse cx="62" cy="36" rx="12" ry="32" transform="rotate(-15 62 36)" />
            <ellipse cx="98" cy="36" rx="12" ry="32" transform="rotate(15 98 36)" />
            <circle cx="80" cy="76" r="32" />
            <ellipse cx="80" cy="120" rx="36" ry="34" />
            <circle cx="118" cy="130" r="14" />
            <ellipse cx="56" cy="148" rx="14" ry="8" />
            <ellipse cx="104" cy="148" rx="14" ry="8" />
          </g>
        );
      }
      return (
        <g>
          <circle cx="118" cy="130" r="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <ellipse cx="62" cy="36" rx="12" ry="32" transform="rotate(-15 62 36)" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="62" cy="36" rx="6" ry="22" transform="rotate(-15 62 36)" fill="#fda4af" />
          <ellipse cx="98" cy="36" rx="12" ry="32" transform="rotate(15 98 36)" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="98" cy="36" rx="6" ry="22" transform="rotate(15 98 36)" fill="#fda4af" />
          <ellipse cx="80" cy="120" rx="36" ry="34" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="80" cy="122" rx="22" ry="20" fill="#fce7f3" />
          <ellipse cx="56" cy="148" rx="16" ry="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="104" cy="148" rx="16" ry="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="80" cy="76" r="32" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="68" cy="72" r="5" fill="#be185d" />
          <circle cx="70" cy="70" r="2" fill="#ffffff" />
          <circle cx="92" cy="72" r="5" fill="#be185d" />
          <circle cx="94" cy="70" r="2" fill="#ffffff" />
          <polygon points="77,78 83,78 80,82" fill="#f43f5e" />
          <circle cx="58" cy="82" r="6" fill="#f43f5e" opacity="0.5" />
          <circle cx="102" cy="82" r="6" fill="#f43f5e" opacity="0.5" />
        </g>
      );

    // 5. ปลา (Fish)
    case 'fish':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="145,55 125,80 145,105 110,80" />
            <path d="M70,55 Q85,32 105,52 Z" />
            <path d="M75,105 Q85,122 100,105 Z" />
            <ellipse cx="78" cy="80" rx="46" ry="30" />
            <ellipse cx="65" cy="84" rx="14" ry="8" transform="rotate(-20 65 84)" />
          </g>
        );
      }
      return (
        <g>
          <circle cx="28" cy="60" r="5" fill="#bae6fd" opacity="0.8" />
          <polygon points="148,52 125,80 148,108 110,80" fill="#0284c7" />
          <path d="M68,54 Q85,28 105,52 Z" fill="#0284c7" />
          <path d="M75,106 Q85,124 100,106 Z" fill="#0284c7" />
          <ellipse cx="78" cy="80" rx="46" ry="30" fill="#38bdf8" />
          <path d="M75,52 Q65,80 75,108" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
          <circle cx="48" cy="72" r="8" fill="#ffffff" />
          <circle cx="46" cy="72" r="5" fill="#0f172a" />
          <ellipse cx="65" cy="86" rx="14" ry="8" transform="rotate(-20 65 86)" fill="#facc15" />
        </g>
      );

    // 6. นก (Bird)
    case 'bird':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="55,45 62,30 70,45" />
            <polygon points="40,65 20,72 40,78" />
            <circle cx="60" cy="65" r="25" />
            <ellipse cx="85" cy="95" rx="35" ry="30" />
            <polygon points="115,100 148,110 144,124 105,115" />
            <ellipse cx="85" cy="95" rx="24" ry="16" transform="rotate(-15 85 95)" />
            <line x1="75" y1="125" x2="70" y2="148" stroke={silFill} strokeWidth="5" strokeLinecap="round" />
            <line x1="92" y1="125" x2="90" y2="148" stroke={silFill} strokeWidth="5" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          <rect x="30" y="142" width="105" height="8" rx="4" fill="#78350f" />
          <polygon points="115,100 148,110 144,124 105,115" fill="#9d174d" />
          <line x1="75" y1="125" x2="72" y2="144" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          <line x1="92" y1="125" x2="90" y2="144" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="85" cy="95" rx="35" ry="30" fill="#ec4899" />
          <ellipse cx="78" cy="102" rx="20" ry="18" fill="#fdf2f8" />
          <ellipse cx="88" cy="95" rx="22" ry="14" transform="rotate(-15 88 95)" fill="#f43f5e" />
          <polygon points="55,45 62,28 70,45" fill="#f43f5e" />
          <circle cx="60" cy="65" r="25" fill="#ec4899" />
          <polygon points="40,65 20,72 40,78" fill="#f59e0b" />
          <circle cx="52" cy="62" r="5" fill="#1e293b" />
          <circle cx="54" cy="60" r="2" fill="#ffffff" />
        </g>
      );

    // 7. ผีเสื้อ (Butterfly)
    case 'butterfly':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M78,60 Q65,30 50,32" stroke={silFill} strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="32" r="4" />
            <path d="M82,60 Q95,30 110,32" stroke={silFill} strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="110" cy="32" r="4" />
            <ellipse cx="50" cy="70" rx="36" ry="28" transform="rotate(-20 50 70)" />
            <ellipse cx="110" cy="70" rx="36" ry="28" transform="rotate(20 110 70)" />
            <ellipse cx="58" cy="110" rx="26" ry="22" transform="rotate(15 58 110)" />
            <ellipse cx="102" cy="110" rx="26" ry="22" transform="rotate(-15 102 110)" />
            <ellipse cx="80" cy="92" rx="8" ry="32" />
            <circle cx="80" cy="56" r="9" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="50" cy="70" rx="36" ry="28" transform="rotate(-20 50 70)" fill="#a855f7" />
          <circle cx="48" cy="66" r="12" fill="#fef08a" />
          <ellipse cx="110" cy="70" rx="36" ry="28" transform="rotate(20 110 70)" fill="#a855f7" />
          <circle cx="112" cy="66" r="12" fill="#fef08a" />
          <ellipse cx="58" cy="110" rx="26" ry="22" transform="rotate(15 58 110)" fill="#ec4899" />
          <circle cx="58" cy="110" r="7" fill="#67e8f9" />
          <ellipse cx="102" cy="110" rx="26" ry="22" transform="rotate(-15 102 110)" fill="#ec4899" />
          <circle cx="102" cy="110" r="7" fill="#67e8f9" />
          <ellipse cx="80" cy="92" rx="8" ry="32" fill="#3b82f6" />
          <circle cx="80" cy="56" r="9" fill="#2563eb" />
          <path d="M78,54 Q65,28 50,30" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="50" cy="30" r="4" fill="#f59e0b" />
          <path d="M82,54 Q95,28 110,30" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="110" cy="30" r="4" fill="#f59e0b" />
        </g>
      );

    // 8. เต่า (Turtle)
    case 'turtle':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <ellipse cx="45" cy="58" rx="18" ry="10" transform="rotate(-30 45 58)" />
            <ellipse cx="115" cy="58" rx="18" ry="10" transform="rotate(30 115 58)" />
            <ellipse cx="48" cy="115" rx="16" ry="9" transform="rotate(25 48 115)" />
            <ellipse cx="112" cy="115" rx="16" ry="9" transform="rotate(-25 112 115)" />
            <circle cx="80" cy="40" r="16" />
            <polygon points="76,125 84,125 80,140" />
            <ellipse cx="80" cy="88" rx="42" ry="38" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="45" cy="58" rx="18" ry="10" transform="rotate(-30 45 58)" fill="#86efac" stroke="#15803d" strokeWidth="2" />
          <ellipse cx="115" cy="58" rx="18" ry="10" transform="rotate(30 115 58)" fill="#86efac" stroke="#15803d" strokeWidth="2" />
          <ellipse cx="48" cy="115" rx="16" ry="9" transform="rotate(25 48 115)" fill="#86efac" stroke="#15803d" strokeWidth="2" />
          <ellipse cx="112" cy="115" rx="16" ry="9" transform="rotate(-25 112 115)" fill="#86efac" stroke="#15803d" strokeWidth="2" />
          <circle cx="80" cy="40" r="16" fill="#86efac" stroke="#15803d" strokeWidth="2" />
          <ellipse cx="80" cy="88" rx="42" ry="38" fill="#15803d" />
          <polygon points="80,68 95,78 95,98 80,108 65,98 65,78" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
        </g>
      );

    // 9. เป็ด (Duck)
    case 'duck':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <ellipse cx="40" cy="52" rx="18" ry="9" />
            <circle cx="62" cy="52" r="22" />
            <ellipse cx="88" cy="95" rx="42" ry="28" />
            <polygon points="120,85 145,72 135,102" />
            <rect x="35" y="118" width="105" height="14" rx="7" />
          </g>
        );
      }
      return (
        <g>
          <path d="M30,125 Q45,120 60,125 T90,125 T120,125 T145,125" stroke="#38bdf8" strokeWidth="6" fill="none" strokeLinecap="round" />
          <polygon points="120,85 145,72 135,102" fill="#eab308" />
          <ellipse cx="88" cy="95" rx="42" ry="28" fill="#fde047" />
          <ellipse cx="90" cy="94" rx="24" ry="15" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <ellipse cx="38" cy="54" rx="16" ry="8" fill="#f97316" />
          <circle cx="62" cy="52" r="22" fill="#fde047" />
          <circle cx="56" cy="48" r="4.5" fill="#1e293b" />
        </g>
      );

    // 10. ม้า (Horse)
    case 'horse':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="62,25 72,12 78,28" />
            <polygon points="76,28 85,15 90,30" />
            <polygon points="45,68 30,80 48,92 70,82" />
            <ellipse cx="68" cy="50" rx="24" ry="28" transform="rotate(-25 68 50)" />
            <polygon points="62,60 102,78 95,115 55,95" />
            <path d="M78,25 Q115,45 105,95" stroke={silFill} strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="100" cy="115" rx="36" ry="26" />
            <path d="M125,110 Q150,118 142,145 Q135,148 130,130 Z" />
          </g>
        );
      }
      return (
        <g>
          <path d="M125,110 Q150,118 142,145 Q135,148 130,130 Z" fill="#451a03" />
          <ellipse cx="100" cy="115" rx="36" ry="26" fill="#b45309" />
          <path d="M78,25 Q115,45 105,95" stroke="#451a03" strokeWidth="16" strokeLinecap="round" fill="none" />
          <polygon points="62,60 102,78 95,115 55,95" fill="#b45309" />
          <ellipse cx="68" cy="50" rx="24" ry="28" transform="rotate(-25 68 50)" fill="#b45309" />
          <polygon points="45,68 30,80 48,92 70,82" fill="#d97706" />
          <circle cx="62" cy="46" r="5" fill="#1e293b" />
        </g>
      );

    // 11. สิงโต (Lion)
    case 'lion':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Massive mane */}
            <circle cx="80" cy="65" r="48" />
            {/* Body */}
            <ellipse cx="80" cy="115" rx="38" ry="36" />
            {/* Tail with tuft */}
            <path d="M110,120 Q145,110 142,85" stroke={silFill} strokeWidth="6" fill="none" strokeLinecap="round" />
            <circle cx="140" cy="82" r="10" />
            {/* Paws */}
            <circle cx="60" cy="148" r="12" />
            <circle cx="100" cy="148" r="12" />
          </g>
        );
      }
      return (
        <g>
          {/* Tail */}
          <path d="M110,120 Q145,110 142,85" stroke="#b45309" strokeWidth="6" fill="none" strokeLinecap="round" />
          <circle cx="140" cy="82" r="10" fill="#78350f" />
          {/* Mane */}
          <circle cx="80" cy="65" r="48" fill="#b45309" />
          {/* Body */}
          <ellipse cx="80" cy="115" rx="38" ry="36" fill="#f59e0b" />
          <ellipse cx="80" cy="120" rx="20" ry="22" fill="#fef3c7" />
          {/* Head */}
          <circle cx="80" cy="65" r="30" fill="#f59e0b" />
          {/* Ears */}
          <circle cx="56" cy="45" r="10" fill="#f59e0b" />
          <circle cx="56" cy="45" r="6" fill="#fef3c7" />
          <circle cx="104" cy="45" r="10" fill="#f59e0b" />
          <circle cx="104" cy="45" r="6" fill="#fef3c7" />
          {/* Eyes */}
          <circle cx="68" cy="62" r="5" fill="#1e293b" />
          <circle cx="70" cy="60" r="2" fill="#ffffff" />
          <circle cx="92" cy="62" r="5" fill="#1e293b" />
          <circle cx="94" cy="60" r="2" fill="#ffffff" />
          {/* Nose & Mouth */}
          <polygon points="76,70 84,70 80,76" fill="#78350f" />
          <path d="M75,76 Q80,82 85,76" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="60" cy="72" r="5" fill="#fb7185" opacity="0.6" />
          <circle cx="100" cy="72" r="5" fill="#fb7185" opacity="0.6" />
          {/* Paws */}
          <ellipse cx="60" cy="148" rx="14" ry="8" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
          <ellipse cx="100" cy="148" rx="14" ry="8" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
        </g>
      );

    // 12. เสือ (Tiger)
    case 'tiger':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="55" cy="42" r="12" />
            <circle cx="105" cy="42" r="12" />
            <circle cx="80" cy="65" r="38" />
            <ellipse cx="80" cy="115" rx="38" ry="38" />
            <path d="M112,120 Q145,115 140,88" stroke={silFill} strokeWidth="8" fill="none" strokeLinecap="round" />
            <circle cx="60" cy="148" r="12" />
            <circle cx="100" cy="148" r="12" />
          </g>
        );
      }
      return (
        <g>
          {/* Tail */}
          <path d="M112,120 Q145,115 140,88" stroke="#ea580c" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M130,95 L135,100 M136,88 L142,92" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          {/* Body */}
          <ellipse cx="80" cy="115" rx="38" ry="38" fill="#ea580c" />
          <ellipse cx="80" cy="120" rx="18" ry="22" fill="#fff7ed" />
          {/* Body stripes */}
          <path d="M50,110 L62,112 M52,122 L64,124 M110,110 L98,112 M108,122 L96,124" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          {/* Ears */}
          <circle cx="55" cy="42" r="12" fill="#ea580c" />
          <circle cx="55" cy="42" r="6" fill="#fff7ed" />
          <circle cx="105" cy="42" r="12" fill="#ea580c" />
          <circle cx="105" cy="42" r="6" fill="#fff7ed" />
          {/* Head */}
          <circle cx="80" cy="65" r="36" fill="#ea580c" />
          {/* Tiger Head Stripes */}
          <polygon points="77,35 83,35 80,48" fill="#1e293b" />
          <path d="M48,58 L60,62 M48,68 L58,70 M112,58 L100,62 M112,68 L102,70" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="68" cy="62" r="5" fill="#1e293b" />
          <circle cx="70" cy="60" r="2" fill="#ffffff" />
          <circle cx="92" cy="62" r="5" fill="#1e293b" />
          <circle cx="94" cy="60" r="2" fill="#ffffff" />
          <polygon points="77,70 83,70 80,75" fill="#f43f5e" />
          <ellipse cx="60" cy="148" rx="12" ry="8" fill="#fff7ed" stroke="#c2410c" strokeWidth="2" />
          <ellipse cx="100" cy="148" rx="12" ry="8" fill="#fff7ed" stroke="#c2410c" strokeWidth="2" />
        </g>
      );

    // 13. ลิง (Monkey)
    case 'monkey':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="48" cy="65" r="16" />
            <circle cx="112" cy="65" r="16" />
            <circle cx="80" cy="65" r="32" />
            <ellipse cx="80" cy="115" rx="34" ry="36" />
            {/* Curly tail */}
            <path d="M105,125 Q145,130 145,100 Q145,75 125,75 Q115,80 120,90 Q125,95 132,92" stroke={silFill} strokeWidth="8" fill="none" strokeLinecap="round" />
            <circle cx="58" cy="148" r="10" />
            <circle cx="102" cy="148" r="10" />
          </g>
        );
      }
      return (
        <g>
          {/* Curly tail */}
          <path d="M105,125 Q145,130 145,100 Q145,75 125,75 Q115,80 120,90 Q125,95 132,92" stroke="#78350f" strokeWidth="7" fill="none" strokeLinecap="round" />
          {/* Ears */}
          <circle cx="48" cy="65" r="16" fill="#78350f" />
          <circle cx="48" cy="65" r="10" fill="#fed7aa" />
          <circle cx="112" cy="65" r="16" fill="#78350f" />
          <circle cx="112" cy="65" r="10" fill="#fed7aa" />
          {/* Body */}
          <ellipse cx="80" cy="115" rx="34" ry="36" fill="#78350f" />
          <ellipse cx="80" cy="118" rx="20" ry="24" fill="#fed7aa" />
          {/* Head */}
          <circle cx="80" cy="65" r="32" fill="#78350f" />
          {/* Face peach mask */}
          <ellipse cx="70" cy="60" rx="14" ry="12" fill="#fed7aa" />
          <ellipse cx="90" cy="60" rx="14" ry="12" fill="#fed7aa" />
          <ellipse cx="80" cy="74" rx="18" ry="12" fill="#fed7aa" />
          {/* Eyes & Smile */}
          <circle cx="70" cy="60" r="4.5" fill="#1e293b" />
          <circle cx="72" cy="58" r="1.5" fill="#ffffff" />
          <circle cx="90" cy="60" r="4.5" fill="#1e293b" />
          <circle cx="92" cy="58" r="1.5" fill="#ffffff" />
          <circle cx="80" cy="72" r="3" fill="#78350f" />
          <path d="M74,78 Q80,83 86,78" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <ellipse cx="58" cy="148" rx="12" ry="7" fill="#fed7aa" stroke="#78350f" strokeWidth="2" />
          <ellipse cx="102" cy="148" rx="12" ry="7" fill="#fed7aa" stroke="#78350f" strokeWidth="2" />
        </g>
      );

    // 14. ยีราฟ (Giraffe)
    case 'giraffe':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Horns */}
            <line x1="72" y1="20" x2="72" y2="30" stroke={silFill} strokeWidth="5" strokeLinecap="round" />
            <circle cx="72" cy="20" r="4" />
            <line x1="88" y1="20" x2="88" y2="30" stroke={silFill} strokeWidth="5" strokeLinecap="round" />
            <circle cx="88" cy="20" r="4" />
            {/* Head */}
            <circle cx="80" cy="38" r="16" />
            <ellipse cx="80" cy="46" rx="12" ry="8" />
            {/* Long Neck */}
            <polygon points="74,48 86,48 92,110 68,110" />
            {/* Body */}
            <ellipse cx="80" cy="120" rx="34" ry="24" />
            {/* Legs */}
            <rect x="62" y="130" width="8" height="26" rx="4" />
            <rect x="90" y="130" width="8" height="26" rx="4" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="80" cy="120" rx="34" ry="24" fill="#fbbf24" />
          <rect x="62" y="130" width="8" height="26" rx="4" fill="#d97706" />
          <rect x="90" y="130" width="8" height="26" rx="4" fill="#d97706" />
          {/* Long Neck */}
          <polygon points="74,48 86,48 92,110 68,110" fill="#fbbf24" />
          {/* Giraffe Spots */}
          <circle cx="78" cy="62" r="5" fill="#b45309" />
          <circle cx="82" cy="80" r="6" fill="#b45309" />
          <circle cx="76" cy="98" r="5" fill="#b45309" />
          <circle cx="88" cy="118" r="7" fill="#b45309" />
          <circle cx="70" cy="120" r="6" fill="#b45309" />
          {/* Horns */}
          <line x1="72" y1="20" x2="72" y2="30" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
          <circle cx="72" cy="20" r="4" fill="#78350f" />
          <line x1="88" y1="20" x2="88" y2="30" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
          <circle cx="88" cy="20" r="4" fill="#78350f" />
          {/* Head & Muzzle */}
          <circle cx="80" cy="38" r="16" fill="#fbbf24" />
          <ellipse cx="80" cy="46" rx="12" ry="8" fill="#fef3c7" />
          <circle cx="74" cy="36" r="3" fill="#1e293b" />
          <circle cx="86" cy="36" r="3" fill="#1e293b" />
          <circle cx="76" cy="46" r="1.5" fill="#78350f" />
          <circle cx="84" cy="46" r="1.5" fill="#78350f" />
        </g>
      );

    // 15. ม้าลาย (Zebra)
    case 'zebra':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="62,25 72,12 78,28" />
            <polygon points="76,28 85,15 90,30" />
            <polygon points="45,68 30,80 48,92 70,82" />
            <ellipse cx="68" cy="50" rx="24" ry="28" transform="rotate(-25 68 50)" />
            <polygon points="62,60 102,78 95,115 55,95" />
            <ellipse cx="100" cy="115" rx="36" ry="26" />
            <rect x="75" y="125" width="8" height="28" rx="4" />
            <rect x="110" y="125" width="8" height="28" rx="4" />
            <path d="M125,110 Q148,118 140,140" stroke={silFill} strokeWidth="5" fill="none" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          <path d="M125,110 Q148,118 140,140" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="75" y="125" width="8" height="28" rx="4" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          <rect x="110" y="125" width="8" height="28" rx="4" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          <ellipse cx="100" cy="115" rx="36" ry="26" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          <polygon points="62,60 102,78 95,115 55,95" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          {/* Mane */}
          <path d="M78,25 Q115,45 105,95" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" fill="none" />
          <ellipse cx="68" cy="50" rx="24" ry="28" transform="rotate(-25 68 50)" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          <polygon points="45,68 30,80 48,92 70,82" fill="#334155" />
          {/* Stripes */}
          <line x1="68" y1="65" x2="80" y2="78" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
          <line x1="72" y1="80" x2="86" y2="92" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
          <line x1="90" y1="105" x2="95" y2="125" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
          <line x1="105" y1="102" x2="110" y2="124" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
          <circle cx="62" cy="46" r="4.5" fill="#1e293b" />
        </g>
      );

    // 16. กบ (Frog)
    case 'frog':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Bulging Eyes on top */}
            <circle cx="56" cy="48" r="18" />
            <circle cx="104" cy="48" r="18" />
            {/* Body */}
            <ellipse cx="80" cy="85" rx="44" ry="36" />
            {/* Bent Legs */}
            <ellipse cx="38" cy="115" rx="18" ry="24" transform="rotate(-30 38 115)" />
            <ellipse cx="122" cy="115" rx="18" ry="24" transform="rotate(30 122 115)" />
            <ellipse cx="56" cy="142" rx="16" ry="8" />
            <ellipse cx="104" cy="142" rx="16" ry="8" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="38" cy="115" rx="18" ry="24" transform="rotate(-30 38 115)" fill="#16a34a" />
          <ellipse cx="122" cy="115" rx="18" ry="24" transform="rotate(30 122 115)" fill="#16a34a" />
          <ellipse cx="56" cy="142" rx="16" ry="8" fill="#22c55e" />
          <ellipse cx="104" cy="142" rx="16" ry="8" fill="#22c55e" />
          <ellipse cx="80" cy="85" rx="44" ry="36" fill="#22c55e" />
          <ellipse cx="80" cy="95" rx="26" ry="20" fill="#fef08a" />
          <circle cx="56" cy="48" r="18" fill="#22c55e" />
          <circle cx="56" cy="48" r="12" fill="#ffffff" />
          <circle cx="58" cy="48" r="6" fill="#1e293b" />
          <circle cx="104" cy="48" r="18" fill="#22c55e" />
          <circle cx="104" cy="48" r="12" fill="#ffffff" />
          <circle cx="102" cy="48" r="6" fill="#1e293b" />
          <path d="M60,82 Q80,95 100,82" stroke="#15803d" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="50" cy="85" r="6" fill="#fb7185" opacity="0.6" />
          <circle cx="110" cy="85" r="6" fill="#fb7185" opacity="0.6" />
        </g>
      );

    // 17. งู (Snake)
    case 'snake':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Wavy Coiled Body */}
            <path d="M40,135 Q55,100 80,120 Q105,140 125,115 Q145,90 120,65 Q95,40 105,25 Q115,10 130,25" stroke={silFill} strokeWidth="18" fill="none" strokeLinecap="round" />
            {/* Snake Head */}
            <ellipse cx="125" cy="28" rx="14" ry="10" transform="rotate(-20 125 28)" />
            {/* Flickering tongue */}
            <path d="M136,25 L148,22 L154,18 M148,22 L154,26" stroke={silFill} strokeWidth="3" fill="none" />
          </g>
        );
      }
      return (
        <g>
          <path d="M40,135 Q55,100 80,120 Q105,140 125,115 Q145,90 120,65 Q95,40 105,25 Q115,10 130,25" stroke="#16a34a" strokeWidth="18" fill="none" strokeLinecap="round" />
          <path d="M40,135 Q55,100 80,120 Q105,140 125,115 Q145,90 120,65 Q95,40 105,25 Q115,10 130,25" stroke="#4ade80" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.6" />
          <ellipse cx="125" cy="28" rx="14" ry="10" transform="rotate(-20 125 28)" fill="#16a34a" />
          <circle cx="124" cy="24" r="3.5" fill="#1e293b" />
          <circle cx="125" cy="23" r="1" fill="#ffffff" />
          <path d="M136,25 L148,22 L154,18 M148,22 L154,26" stroke="#f43f5e" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      );

    // 18. ปู (Crab)
    case 'crab':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Claws */}
            <circle cx="35" cy="45" r="16" />
            <path d="M35,45 Q48,25 25,30 Z" />
            <circle cx="125" cy="45" r="16" />
            <path d="M125,45 Q112,25 135,30 Z" />
            {/* Arms */}
            <path d="M50,85 Q40,60 45,50" stroke={silFill} strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M110,85 Q120,60 115,50" stroke={silFill} strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Walking legs */}
            <path d="M45,95 L25,110 M48,105 L28,125 M55,115 L35,138" stroke={silFill} strokeWidth="6" strokeLinecap="round" />
            <path d="M115,95 L135,110 M112,105 L132,125 M105,115 L125,138" stroke={silFill} strokeWidth="6" strokeLinecap="round" />
            {/* Body */}
            <ellipse cx="80" cy="100" rx="38" ry="26" />
            {/* Stalk eyes */}
            <circle cx="70" cy="72" r="7" />
            <circle cx="90" cy="72" r="7" />
          </g>
        );
      }
      return (
        <g>
          {/* Walking legs */}
          <path d="M45,95 L25,110 M48,105 L28,125 M55,115 L35,138" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
          <path d="M115,95 L135,110 M112,105 L132,125 M105,115 L125,138" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
          {/* Arms */}
          <path d="M50,85 Q40,60 45,50" stroke="#ef4444" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M110,85 Q120,60 115,50" stroke="#ef4444" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* Claws */}
          <circle cx="35" cy="45" r="16" fill="#ef4444" />
          <path d="M35,45 Q48,25 25,30 Z" fill="#b91c1c" />
          <circle cx="125" cy="45" r="16" fill="#ef4444" />
          <path d="M125,45 Q112,25 135,30 Z" fill="#b91c1c" />
          {/* Body */}
          <ellipse cx="80" cy="100" rx="38" ry="26" fill="#ef4444" />
          <ellipse cx="80" cy="104" rx="24" ry="14" fill="#fca5a5" />
          {/* Eyes on stalks */}
          <line x1="70" y1="80" x2="70" y2="72" stroke="#dc2626" strokeWidth="5" />
          <circle cx="70" cy="72" r="7" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
          <circle cx="70" cy="72" r="3.5" fill="#1e293b" />
          <line x1="90" y1="80" x2="90" y2="72" stroke="#dc2626" strokeWidth="5" />
          <circle cx="90" cy="72" r="7" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
          <circle cx="90" cy="72" r="3.5" fill="#1e293b" />
          <path d="M72,102 Q80,110 88,102" stroke="#991b1b" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      );

    // 19. โลมา (Dolphin)
    case 'dolphin':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Arched leaping body */}
            <path d="M25,95 Q55,40 105,48 Q140,55 145,95 Q125,75 90,80 Q45,85 25,95 Z" />
            {/* Snout */}
            <path d="M25,95 Q20,92 15,98 Q22,102 28,98 Z" />
            {/* Dorsal Fin */}
            <polygon points="80,50 92,28 98,52" />
            {/* Flipper */}
            <polygon points="65,75 55,95 75,85" />
            {/* Tail Fluke */}
            <polygon points="145,95 155,82 148,98 158,110 140,100" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="80,50 92,28 98,52" fill="#0284c7" />
          <polygon points="145,95 155,82 148,98 158,110 140,100" fill="#0284c7" />
          <path d="M25,95 Q55,40 105,48 Q140,55 145,95 Q125,75 90,80 Q45,85 25,95 Z" fill="#38bdf8" />
          {/* Tummy */}
          <path d="M35,92 Q70,72 105,72 Q125,75 145,95 Q125,75 90,80 Q45,85 25,95 Z" fill="#f0f9ff" />
          <polygon points="65,75 55,95 75,85" fill="#0284c7" />
          <circle cx="42" cy="80" r="4" fill="#1e293b" />
          <circle cx="43" cy="79" r="1.5" fill="#ffffff" />
        </g>
      );

    // 20. นกฮูก (Owl)
    case 'owl':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Ear tufts */}
            <polygon points="50,45 42,20 65,36" />
            <polygon points="110,45 118,20 95,36" />
            {/* Head & Body */}
            <circle cx="80" cy="58" r="32" />
            <ellipse cx="80" cy="108" rx="36" ry="38" />
            <ellipse cx="48" cy="105" rx="12" ry="24" transform="rotate(15 48 105)" />
            <ellipse cx="112" cy="105" rx="12" ry="24" transform="rotate(-15 112 105)" />
            {/* Feet on branch */}
            <circle cx="68" cy="144" r="6" />
            <circle cx="92" cy="144" r="6" />
          </g>
        );
      }
      return (
        <g>
          <rect x="30" y="142" width="100" height="8" rx="4" fill="#78350f" />
          <polygon points="50,45 42,20 65,36" fill="#78350f" />
          <polygon points="110,45 118,20 95,36" fill="#78350f" />
          <ellipse cx="80" cy="108" rx="36" ry="38" fill="#92400e" />
          <ellipse cx="80" cy="112" rx="22" ry="26" fill="#fef3c7" />
          <ellipse cx="48" cy="105" rx="12" ry="24" transform="rotate(15 48 105)" fill="#78350f" />
          <ellipse cx="112" cy="105" rx="12" ry="24" transform="rotate(-15 112 105)" fill="#78350f" />
          <circle cx="80" cy="58" r="32" fill="#92400e" />
          {/* Big Owl Eyes */}
          <circle cx="66" cy="56" r="14" fill="#fef08a" />
          <circle cx="66" cy="56" r="7" fill="#1e293b" />
          <circle cx="68" cy="54" r="2.5" fill="#ffffff" />
          <circle cx="94" cy="56" r="14" fill="#fef08a" />
          <circle cx="94" cy="56" r="7" fill="#1e293b" />
          <circle cx="96" cy="54" r="2.5" fill="#ffffff" />
          {/* Hooked Beak */}
          <polygon points="76,65 84,65 80,75" fill="#f59e0b" />
          <circle cx="68" cy="144" r="6" fill="#f59e0b" />
          <circle cx="92" cy="144" r="6" fill="#f59e0b" />
        </g>
      );

    // 21. เพนกวิน (Penguin)
    case 'penguin':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="80" cy="48" r="24" />
            <polygon points="74,52 86,52 80,62" />
            <ellipse cx="80" cy="102" rx="36" ry="44" />
            {/* Wings */}
            <ellipse cx="42" cy="98" rx="10" ry="28" transform="rotate(20 42 98)" />
            <ellipse cx="118" cy="98" rx="10" ry="28" transform="rotate(-20 118 98)" />
            {/* Webbed feet */}
            <ellipse cx="64" cy="146" rx="14" ry="7" />
            <ellipse cx="96" cy="146" rx="14" ry="7" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="64" cy="146" rx="14" ry="7" fill="#f59e0b" />
          <ellipse cx="96" cy="146" rx="14" ry="7" fill="#f59e0b" />
          <ellipse cx="42" cy="98" rx="10" ry="28" transform="rotate(20 42 98)" fill="#1e293b" />
          <ellipse cx="118" cy="98" rx="10" ry="28" transform="rotate(-20 118 98)" fill="#1e293b" />
          <ellipse cx="80" cy="102" rx="36" ry="44" fill="#1e293b" />
          {/* White Belly */}
          <ellipse cx="80" cy="108" rx="24" ry="34" fill="#ffffff" />
          <circle cx="80" cy="48" r="24" fill="#1e293b" />
          <circle cx="72" cy="45" r="4" fill="#ffffff" />
          <circle cx="73" cy="45" r="2" fill="#0f172a" />
          <circle cx="88" cy="45" r="4" fill="#ffffff" />
          <circle cx="87" cy="45" r="2" fill="#0f172a" />
          <polygon points="74,52 86,52 80,62" fill="#f59e0b" />
          <circle cx="62" cy="54" r="5" fill="#f43f5e" opacity="0.5" />
          <circle cx="98" cy="54" r="5" fill="#f43f5e" opacity="0.5" />
        </g>
      );

    // 22. ไก่ (Chicken)
    case 'chicken':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Comb */}
            <circle cx="72" cy="32" r="8" />
            <circle cx="82" cy="28" r="9" />
            <circle cx="92" cy="34" r="8" />
            {/* Beak & Wattle */}
            <polygon points="56,58 38,65 56,72" />
            <circle cx="60" cy="78" r="7" />
            {/* Head & Body */}
            <circle cx="75" cy="58" r="24" />
            <ellipse cx="90" cy="98" rx="36" ry="32" />
            {/* Tail feathers */}
            <polygon points="120,90 148,65 138,98 152,95 125,115" />
            {/* Feet */}
            <line x1="80" y1="130" x2="75" y2="148" stroke={silFill} strokeWidth="5" strokeLinecap="round" />
            <line x1="95" y1="130" x2="95" y2="148" stroke={silFill} strokeWidth="5" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          {/* Feet */}
          <line x1="80" y1="130" x2="75" y2="148" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          <line x1="95" y1="130" x2="95" y2="148" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          {/* Tail */}
          <polygon points="120,90 148,65 138,98 152,95 125,115" fill="#047857" />
          {/* Comb & Wattle */}
          <circle cx="72" cy="32" r="8" fill="#ef4444" />
          <circle cx="82" cy="28" r="9" fill="#ef4444" />
          <circle cx="92" cy="34" r="8" fill="#ef4444" />
          <circle cx="60" cy="78" r="7" fill="#ef4444" />
          {/* Body */}
          <ellipse cx="90" cy="98" rx="36" ry="32" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="92" cy="98" rx="22" ry="16" fill="#f1f5f9" />
          <circle cx="75" cy="58" r="24" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <polygon points="56,58 38,65 56,72" fill="#f59e0b" />
          <circle cx="66" cy="56" r="4.5" fill="#1e293b" />
        </g>
      );

    // 23. หมู (Pig)
    case 'pig':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Ears */}
            <polygon points="52,48 42,22 68,36" />
            <polygon points="108,48 118,22 92,36" />
            {/* Head & Body */}
            <circle cx="80" cy="65" r="34" />
            <ellipse cx="80" cy="115" rx="38" ry="36" />
            {/* Curly tail */}
            <path d="M115,120 Q140,115 135,130 Q128,142 142,138" stroke={silFill} strokeWidth="6" fill="none" strokeLinecap="round" />
            <circle cx="60" cy="148" r="10" />
            <circle cx="100" cy="148" r="10" />
          </g>
        );
      }
      return (
        <g>
          <path d="M115,120 Q140,115 135,130 Q128,142 142,138" stroke="#f472b6" strokeWidth="6" fill="none" strokeLinecap="round" />
          <polygon points="52,48 42,22 68,36" fill="#f472b6" />
          <polygon points="108,48 118,22 92,36" fill="#f472b6" />
          <ellipse cx="80" cy="115" rx="38" ry="36" fill="#fbcfe8" />
          <circle cx="80" cy="65" r="34" fill="#fbcfe8" />
          <circle cx="66" cy="60" r="5" fill="#1e293b" />
          <circle cx="94" cy="60" r="5" fill="#1e293b" />
          {/* Snout */}
          <ellipse cx="80" cy="72" rx="16" ry="11" fill="#f472b6" />
          <circle cx="75" cy="72" r="3" fill="#be185d" />
          <circle cx="85" cy="72" r="3" fill="#be185d" />
          <circle cx="56" cy="72" r="6" fill="#f43f5e" opacity="0.4" />
          <circle cx="104" cy="72" r="6" fill="#f43f5e" opacity="0.4" />
          <ellipse cx="60" cy="148" rx="12" ry="7" fill="#f472b6" />
          <ellipse cx="100" cy="148" rx="12" ry="7" fill="#f472b6" />
        </g>
      );

    // 24. วัว (Cow)
    case 'cow':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Horns */}
            <path d="M50,42 Q35,25 45,15 Q55,25 58,38" fill={silFill} />
            <path d="M110,42 Q125,25 115,15 Q105,25 102,38" fill={silFill} />
            {/* Ears */}
            <ellipse cx="44" cy="48" rx="14" ry="8" transform="rotate(-20 44 48)" />
            <ellipse cx="116" cy="48" rx="14" ry="8" transform="rotate(20 116 48)" />
            {/* Head & Body */}
            <circle cx="80" cy="58" r="30" />
            <ellipse cx="80" cy="74" rx="20" ry="14" />
            <ellipse cx="80" cy="115" rx="38" ry="34" />
            <rect x="60" y="125" width="12" height="26" rx="4" />
            <rect x="88" y="125" width="12" height="26" rx="4" />
            <path d="M115,115 Q140,125 135,145" stroke={silFill} strokeWidth="5" fill="none" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          <path d="M115,115 Q140,125 135,145" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="60" y="125" width="12" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="88" y="125" width="12" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          {/* Horns */}
          <path d="M50,42 Q35,25 45,15 Q55,25 58,38" fill="#facc15" />
          <path d="M110,42 Q125,25 115,15 Q105,25 102,38" fill="#facc15" />
          {/* Body */}
          <ellipse cx="80" cy="115" rx="38" ry="34" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="95" cy="110" r="14" fill="#1e293b" />
          <circle cx="68" cy="122" r="10" fill="#1e293b" />
          {/* Head */}
          <circle cx="80" cy="58" r="30" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="68" cy="52" rx="10" ry="12" fill="#1e293b" />
          <ellipse cx="80" cy="74" rx="20" ry="14" fill="#fbcfe8" />
          <circle cx="74" cy="74" r="3" fill="#be185d" />
          <circle cx="86" cy="74" r="3" fill="#be185d" />
          <circle cx="68" cy="54" r="4" fill="#ffffff" />
          <circle cx="92" cy="54" r="4" fill="#1e293b" />
        </g>
      );

    // 25. แกะ (Sheep)
    case 'sheep':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Woolly cloud body */}
            <circle cx="60" cy="90" r="22" />
            <circle cx="100" cy="90" r="22" />
            <circle cx="80" cy="75" r="24" />
            <circle cx="60" cy="120" r="22" />
            <circle cx="100" cy="120" r="22" />
            <circle cx="80" cy="110" r="28" />
            {/* Face */}
            <ellipse cx="80" cy="72" rx="18" ry="22" />
            {/* Droopy Ears */}
            <ellipse cx="58" cy="65" rx="12" ry="7" transform="rotate(-30 58 65)" />
            <ellipse cx="102" cy="65" rx="12" ry="7" transform="rotate(30 102 65)" />
            <rect x="64" y="135" width="8" height="18" rx="4" />
            <rect x="88" y="135" width="8" height="18" rx="4" />
          </g>
        );
      }
      return (
        <g>
          <rect x="64" y="135" width="8" height="18" rx="4" fill="#475569" />
          <rect x="88" y="135" width="8" height="18" rx="4" fill="#475569" />
          {/* Cloud wool */}
          <circle cx="60" cy="90" r="22" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="100" cy="90" r="22" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="80" cy="75" r="24" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="60" cy="120" r="22" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="100" cy="120" r="22" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="80" cy="110" r="28" fill="#f8fafc" />
          {/* Face */}
          <ellipse cx="80" cy="72" rx="18" ry="22" fill="#1e293b" />
          <ellipse cx="58" cy="65" rx="12" ry="7" transform="rotate(-30 58 65)" fill="#1e293b" />
          <ellipse cx="102" cy="65" rx="12" ry="7" transform="rotate(30 102 65)" fill="#1e293b" />
          <circle cx="74" cy="70" r="3.5" fill="#ffffff" />
          <circle cx="86" cy="70" r="3.5" fill="#ffffff" />
          <circle cx="80" cy="80" r="3" fill="#f472b6" />
        </g>
      );

    // 26. แพะ (Goat)
    case 'goat':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Backward horns */}
            <path d="M72,40 Q55,15 65,10 Q80,25 76,42" fill={silFill} />
            <path d="M88,40 Q105,15 95,10 Q80,25 84,42" fill={silFill} />
            {/* Head */}
            <polygon points="68,48 92,48 84,85 76,85" />
            {/* Beard */}
            <polygon points="76,85 84,85 80,102" />
            {/* Body */}
            <ellipse cx="80" cy="115" rx="36" ry="26" />
            <rect x="62" y="125" width="8" height="26" rx="4" />
            <rect x="90" y="125" width="8" height="26" rx="4" />
          </g>
        );
      }
      return (
        <g>
          <rect x="62" y="125" width="8" height="26" rx="4" fill="#cbd5e1" />
          <rect x="90" y="125" width="8" height="26" rx="4" fill="#cbd5e1" />
          {/* Horns */}
          <path d="M72,40 Q55,15 65,10 Q80,25 76,42" fill="#94a3b8" />
          <path d="M88,40 Q105,15 95,10 Q80,25 84,42" fill="#94a3b8" />
          {/* Body */}
          <ellipse cx="80" cy="115" rx="36" ry="26" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
          {/* Beard */}
          <polygon points="76,85 84,85 80,102" fill="#ffffff" />
          <polygon points="68,48 92,48 84,85 76,85" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="74" cy="58" r="4" fill="#1e293b" />
          <circle cx="86" cy="58" r="4" fill="#1e293b" />
        </g>
      );

    // 27. กวาง (Deer)
    case 'deer':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Antlers */}
            <path d="M68,36 L55,15 M55,24 L45,18 M68,36 L62,12" stroke={silFill} strokeWidth="5" strokeLinecap="round" />
            <path d="M92,36 L105,15 M105,24 L115,18 M92,36 L98,12" stroke={silFill} strokeWidth="5" strokeLinecap="round" />
            {/* Head */}
            <circle cx="80" cy="48" r="18" />
            <polygon points="72,55 88,55 80,68" />
            {/* Ears */}
            <ellipse cx="58" cy="44" rx="12" ry="6" transform="rotate(-30 58 44)" />
            <ellipse cx="102" cy="44" rx="12" ry="6" transform="rotate(30 102 44)" />
            {/* Body */}
            <ellipse cx="80" cy="112" rx="36" ry="28" />
            <rect x="64" y="125" width="7" height="28" rx="3" />
            <rect x="89" y="125" width="7" height="28" rx="3" />
          </g>
        );
      }
      return (
        <g>
          {/* Antlers */}
          <path d="M68,36 L55,15 M55,24 L45,18 M68,36 L62,12" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
          <path d="M92,36 L105,15 M105,24 L115,18 M92,36 L98,12" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
          <rect x="64" y="125" width="7" height="28" rx="3" fill="#b45309" />
          <rect x="89" y="125" width="7" height="28" rx="3" fill="#b45309" />
          {/* Body */}
          <ellipse cx="80" cy="112" rx="36" ry="28" fill="#d97706" />
          {/* White spots */}
          <circle cx="75" cy="104" r="3" fill="#ffffff" />
          <circle cx="88" cy="108" r="3" fill="#ffffff" />
          <circle cx="80" cy="118" r="3" fill="#ffffff" />
          {/* Head & Muzzle */}
          <circle cx="80" cy="48" r="18" fill="#d97706" />
          <polygon points="72,55 88,55 80,68" fill="#fef3c7" />
          <circle cx="80" cy="65" r="2.5" fill="#1e293b" />
          <circle cx="74" cy="48" r="3.5" fill="#1e293b" />
          <circle cx="86" cy="48" r="3.5" fill="#1e293b" />
        </g>
      );

    // 28. กระรอก (Squirrel)
    case 'squirrel':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Giant bushy tail curving over back */}
            <path d="M65,130 C45,130 20,105 25,65 C30,35 60,30 65,45 C70,60 55,85 70,110 Z" />
            {/* Body */}
            <ellipse cx="90" cy="110" rx="26" ry="32" />
            {/* Head & Ear */}
            <circle cx="92" cy="70" r="20" />
            <polygon points="86,55 92,38 98,54" />
            {/* Paws holding nut */}
            <circle cx="112" cy="98" r="10" />
            <circle cx="85" cy="144" r="10" />
          </g>
        );
      }
      return (
        <g>
          {/* Giant bushy tail */}
          <path d="M65,130 C45,130 20,105 25,65 C30,35 60,30 65,45 C70,60 55,85 70,110 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
          {/* Body */}
          <ellipse cx="90" cy="110" rx="26" ry="32" fill="#d97706" />
          <ellipse cx="94" cy="114" rx="14" ry="20" fill="#fef3c7" />
          <circle cx="92" cy="70" r="20" fill="#d97706" />
          <polygon points="86,55 92,38 98,54" fill="#b45309" />
          {/* Acorn held in hands */}
          <circle cx="112" cy="98" r="10" fill="#78350f" />
          <ellipse cx="112" cy="94" rx="8" ry="4" fill="#451a03" />
          <circle cx="98" cy="68" r="4.5" fill="#1e293b" />
          <circle cx="100" cy="66" r="1.5" fill="#ffffff" />
          <ellipse cx="85" cy="144" rx="10" ry="6" fill="#b45309" />
        </g>
      );

    // 29. หมีแพนด้า (Panda)
    case 'panda':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="50" cy="42" r="14" />
            <circle cx="110" cy="42" r="14" />
            <circle cx="80" cy="68" r="36" />
            <ellipse cx="80" cy="118" rx="40" ry="36" />
            <circle cx="56" cy="148" r="12" />
            <circle cx="104" cy="148" r="12" />
          </g>
        );
      }
      return (
        <g>
          {/* Black Ears */}
          <circle cx="50" cy="42" r="14" fill="#1e293b" />
          <circle cx="110" cy="42" r="14" fill="#1e293b" />
          {/* Body */}
          <ellipse cx="80" cy="118" rx="40" ry="36" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          {/* Black Arms / Vest */}
          <path d="M42,100 Q80,120 118,100 Q125,125 110,132 Q80,125 50,132 Z" fill="#1e293b" />
          {/* Head */}
          <circle cx="80" cy="68" r="34" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          {/* Black Eye Patches */}
          <ellipse cx="64" cy="66" rx="10" ry="12" transform="rotate(-15 64 66)" fill="#1e293b" />
          <circle cx="65" cy="66" r="3.5" fill="#ffffff" />
          <ellipse cx="96" cy="66" rx="10" ry="12" transform="rotate(15 96 66)" fill="#1e293b" />
          <circle cx="95" cy="66" r="3.5" fill="#ffffff" />
          {/* Nose */}
          <ellipse cx="80" cy="78" rx="6" ry="4" fill="#1e293b" />
          <circle cx="56" cy="148" rx="12" ry="8" fill="#1e293b" />
          <circle cx="104" cy="148" rx="12" ry="8" fill="#1e293b" />
        </g>
      );

    // 30. จระเข้ (Crocodile)
    case 'crocodile':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Long toothed snout */}
            <path d="M25,82 L85,68 L85,92 L25,82 Z" />
            {/* Spiky ridges on back */}
            <polygon points="80,68 88,55 96,68 104,55 112,68 120,55 128,70" />
            {/* Body */}
            <ellipse cx="100" cy="85" rx="36" ry="20" />
            {/* Serrated tail */}
            <path d="M130,85 Q158,85 155,115 Q145,120 135,98 Z" />
            {/* Feet */}
            <ellipse cx="78" cy="102" rx="14" ry="7" />
            <ellipse cx="118" cy="102" rx="14" ry="7" />
          </g>
        );
      }
      return (
        <g>
          {/* Spiky ridges */}
          <polygon points="80,68 88,55 96,68 104,55 112,68 120,55 128,70" fill="#14532d" />
          {/* Tail */}
          <path d="M130,85 Q158,85 155,115 Q145,120 135,98 Z" fill="#15803d" />
          {/* Body */}
          <ellipse cx="100" cy="85" rx="36" ry="20" fill="#16a34a" />
          <ellipse cx="100" cy="92" rx="28" ry="10" fill="#fef08a" />
          {/* Snout with sharp white teeth */}
          <path d="M25,82 L85,68 L85,92 L25,82 Z" fill="#16a34a" />
          <polygon points="40,82 45,86 50,82 55,86 60,82" fill="#ffffff" />
          {/* Eye */}
          <circle cx="75" cy="65" r="7" fill="#15803d" />
          <circle cx="75" cy="65" r="4" fill="#fef08a" />
          <circle cx="75" cy="65" r="2" fill="#1e293b" />
          <ellipse cx="78" cy="102" rx="14" ry="7" fill="#14532d" />
          <ellipse cx="118" cy="102" rx="14" ry="7" fill="#14532d" />
        </g>
      );

    default:
      return <circle cx="80" cy="80" r="40" fill={isSilhouette ? silFill : '#60a5fa'} />;
  }
};
