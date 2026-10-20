import React from 'react';

interface IllustrationProps {
  id: string;
  isSilhouette: boolean;
}

export const NatureIllustration: React.FC<IllustrationProps> = ({ id, isSilhouette }) => {
  const silFill = '#1e293b';

  switch (id) {
    // 1. ต้นไม้ (Tree)
    case 'tree':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="70,95 62,145 98,145 90,95" />
            <circle cx="80" cy="52" r="32" />
            <circle cx="52" cy="74" r="26" />
            <circle cx="108" cy="74" r="26" />
            <ellipse cx="80" cy="84" rx="42" ry="22" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="70,95 62,148 98,148 90,95" fill="#92400e" />
          <ellipse cx="80" cy="84" rx="42" ry="22" fill="#15803d" />
          <circle cx="52" cy="74" r="26" fill="#22c55e" />
          <circle cx="108" cy="74" r="26" fill="#22c55e" />
          <circle cx="80" cy="52" r="32" fill="#4ade80" />
          <circle cx="64" cy="62" r="5" fill="#ef4444" />
          <circle cx="95" cy="56" r="5" fill="#ef4444" />
          <circle cx="78" cy="78" r="5" fill="#ef4444" />
        </g>
      );

    // 2. ดอกไม้ (Flower)
    case 'flower':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M80,80 L80,146" stroke={silFill} strokeWidth="8" strokeLinecap="round" />
            <ellipse cx="60" cy="115" rx="16" ry="8" transform="rotate(-30 60 115)" />
            <ellipse cx="100" cy="118" rx="16" ry="8" transform="rotate(30 100 118)" />
            <circle cx="80" cy="38" r="18" />
            <circle cx="112" cy="54" r="18" />
            <circle cx="104" cy="90" r="18" />
            <circle cx="56" cy="90" r="18" />
            <circle cx="48" cy="54" r="18" />
            <circle cx="80" cy="65" r="18" />
          </g>
        );
      }
      return (
        <g>
          <path d="M80,75 L80,148" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" />
          <ellipse cx="58" cy="115" rx="18" ry="8" transform="rotate(-30 58 115)" fill="#22c55e" />
          <ellipse cx="102" cy="120" rx="18" ry="8" transform="rotate(30 102 120)" fill="#22c55e" />
          <circle cx="80" cy="38" r="18" fill="#ec4899" />
          <circle cx="112" cy="54" r="18" fill="#ec4899" />
          <circle cx="104" cy="90" r="18" fill="#ec4899" />
          <circle cx="56" cy="90" r="18" fill="#ec4899" />
          <circle cx="48" cy="54" r="18" fill="#ec4899" />
          <circle cx="80" cy="65" r="20" fill="#facc15" stroke="#eab308" strokeWidth="2" />
          <circle cx="73" cy="62" r="2.5" fill="#78350f" />
          <circle cx="87" cy="62" r="2.5" fill="#78350f" />
          <path d="M74,68 Q80,74 86,68" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      );

    // 3. ภูเขา (Mountain)
    case 'mountain':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="105,60 148,135 62,135" />
            <polygon points="65,40 115,135 15,135" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="108,60 152,135 64,135" fill="#475569" />
          <polygon points="108,60 122,86 112,82 108,86 102,82 94,86" fill="#f1f5f9" />
          <polygon points="65,40 115,135 15,135" fill="#2563eb" />
          <polygon points="65,40 82,75 72,70 65,76 58,70 48,75" fill="#ffffff" />
          <polygon points="40,125 45,135 35,135" fill="#15803d" />
          <polygon points="85,122 92,135 78,135" fill="#15803d" />
        </g>
      );

    // 4. เมฆ (Cloud)
    case 'cloud':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="58" cy="85" r="28" />
            <circle cx="85" cy="65" r="32" />
            <circle cx="112" cy="85" r="26" />
            <rect x="52" y="85" width="62" height="30" />
          </g>
        );
      }
      return (
        <g>
          <rect x="52" y="85" width="62" height="30" fill="#ffffff" />
          <circle cx="56" cy="86" r="28" fill="#ffffff" stroke="#bae6fd" strokeWidth="2" />
          <circle cx="112" cy="86" r="26" fill="#ffffff" stroke="#bae6fd" strokeWidth="2" />
          <circle cx="85" cy="65" r="32" fill="#ffffff" stroke="#bae6fd" strokeWidth="2" />
          <circle cx="76" cy="74" r="3" fill="#0369a1" />
          <circle cx="94" cy="74" r="3" fill="#0369a1" />
          <path d="M80,82 Q85,87 90,82" stroke="#0369a1" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="70" cy="80" r="4" fill="#f472b6" opacity="0.5" />
          <circle cx="100" cy="80" r="4" fill="#f472b6" opacity="0.5" />
        </g>
      );

    // 5. ดวงอาทิตย์ (Sun)
    case 'sun':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x="75"
                y="18"
                width="10"
                height="22"
                rx="5"
                transform={`rotate(${angle} 80 80)`}
              />
            ))}
            <circle cx="80" cy="80" r="36" />
          </g>
        );
      }
      return (
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <polygon
              key={i}
              points="75,20 85,20 80,10"
              fill="#f59e0b"
              transform={`rotate(${angle} 80 80)`}
            />
          ))}
          <circle cx="80" cy="80" r="38" fill="#f97316" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="70" cy="74" r="4.5" fill="#78350f" />
          <circle cx="72" cy="72" r="1.5" fill="#ffffff" />
          <circle cx="90" cy="74" r="4.5" fill="#78350f" />
          <circle cx="92" cy="72" r="1.5" fill="#ffffff" />
          <path d="M72,84 Q80,94 88,84" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="64" cy="82" r="5" fill="#ef4444" opacity="0.6" />
          <circle cx="96" cy="82" r="5" fill="#ef4444" opacity="0.6" />
        </g>
      );

    // 6. พระจันทร์ (Moon)
    case 'moon':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M85,25 C115,35 125,75 110,110 C95,140 55,145 35,128 C75,132 105,95 85,25 Z" />
            <polygon points="125,40 128,48 136,49 130,55 132,63 125,58 118,63 120,55 114,49 122,48" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="125,40 128,48 136,49 130,55 132,63 125,58 118,63 120,55 114,49 122,48" fill="#fde047" />
          <path
            d="M85,25 C115,35 125,75 110,110 C95,140 55,145 35,128 C75,132 105,95 85,25 Z"
            fill="#facc15"
            stroke="#eab308"
            strokeWidth="2.5"
          />
          <path d="M82,72 Q88,78 94,72" stroke="#854d0e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M86,88 Q92,94 96,88" stroke="#854d0e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="82" cy="82" r="5" fill="#f43f5e" opacity="0.5" />
        </g>
      );

    // 7. ดาว (Star)
    case 'star':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="80,20 96,58 138,62 106,92 115,135 80,112 45,135 54,92 22,62 64,58" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="80,20 96,58 138,62 106,92 115,135 80,112 45,135 54,92 22,62 64,58" fill="#facc15" stroke="#eab308" strokeWidth="3" />
          {/* Cute Face on star */}
          <circle cx="72" cy="75" r="4" fill="#78350f" />
          <circle cx="88" cy="75" r="4" fill="#78350f" />
          <path d="M74,84 Q80,90 86,84" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="66" cy="82" r="3.5" fill="#fb923c" opacity="0.6" />
          <circle cx="94" cy="82" r="3.5" fill="#fb923c" opacity="0.6" />
        </g>
      );

    // 8. สายรุ้ง (Rainbow)
    case 'rainbow':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M25,120 A55,55 0 0,1 135,120 L120,120 A40,40 0 0,0 40,120 Z" />
            <circle cx="30" cy="122" r="16" />
            <circle cx="130" cy="122" r="16" />
          </g>
        );
      }
      return (
        <g>
          {/* Arches */}
          <path d="M25,120 A55,55 0 0,1 135,120" stroke="#ef4444" strokeWidth="9" fill="none" />
          <path d="M32,120 A48,48 0 0,1 128,120" stroke="#f97316" strokeWidth="9" fill="none" />
          <path d="M39,120 A41,41 0 0,1 121,120" stroke="#facc15" strokeWidth="9" fill="none" />
          <path d="M46,120 A34,34 0 0,1 114,120" stroke="#22c55e" strokeWidth="9" fill="none" />
          <path d="M53,120 A27,27 0 0,1 107,120" stroke="#3b82f6" strokeWidth="9" fill="none" />
          <path d="M60,120 A20,20 0 0,1 100,120" stroke="#a855f7" strokeWidth="9" fill="none" />
          {/* Fluffy clouds at base */}
          <circle cx="30" cy="122" r="16" fill="#ffffff" stroke="#bae6fd" strokeWidth="2" />
          <circle cx="130" cy="122" r="16" fill="#ffffff" stroke="#bae6fd" strokeWidth="2" />
        </g>
      );

    // 9. ใบไม้ (Leaf)
    case 'leaf':
      if (isSilhouette) {
        return (
          <g fill={silFill} transform="rotate(-30 80 80)">
            <path d="M80,120 L80,150" stroke={silFill} strokeWidth="6" strokeLinecap="round" />
            <path d="M80,20 C115,45 115,95 80,125 C45,95 45,45 80,20 Z" />
          </g>
        );
      }
      return (
        <g transform="rotate(-30 80 80)">
          <path d="M80,120 L80,150" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
          <path d="M80,20 C115,45 115,95 80,125 C45,95 45,45 80,20 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2.5" />
          <line x1="80" y1="30" x2="80" y2="124" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="50" x2="98" y2="44" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
          <line x1="80" y1="50" x2="62" y2="44" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
        </g>
      );

    // 10. เห็ด (Mushroom)
    case 'mushroom':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M30,85 C30,35 130,35 130,85 Z" />
            <rect x="65" y="85" width="30" height="50" rx="8" />
          </g>
        );
      }
      return (
        <g>
          <rect x="65" y="85" width="30" height="50" rx="8" fill="#fef3c7" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M30,85 C30,35 130,35 130,85 Z" fill="#ef4444" />
          {/* White spots */}
          <circle cx="55" cy="62" r="8" fill="#ffffff" />
          <circle cx="80" cy="50" r="10" fill="#ffffff" />
          <circle cx="105" cy="65" r="8" fill="#ffffff" />
          {/* Eyes on stalk */}
          <circle cx="74" cy="105" r="3" fill="#1e293b" />
          <circle cx="86" cy="105" r="3" fill="#1e293b" />
        </g>
      );

    // 11. ก้อนหิน (Rock)
    case 'rock':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="35,125 30,85 55,50 110,45 135,75 130,125" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="35,125 30,85 55,50 110,45 135,75 130,125" fill="#64748b" stroke="#334155" strokeWidth="3" />
          <polygon points="55,50 110,45 95,85 45,85" fill="#94a3b8" />
          {/* Grass sprout */}
          <path d="M125,120 Q135,105 142,112" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      );

    // 12. ภูเขาไฟ (Volcano)
    case 'volcano':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="65,72 95,72 135,135 25,135" />
            {/* Erupting smoke cloud */}
            <circle cx="80" cy="45" r="24" />
            <circle cx="62" cy="52" r="16" />
            <circle cx="98" cy="52" r="16" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="65,72 95,72 135,135 25,135" fill="#78350f" />
          {/* Smoke */}
          <circle cx="80" cy="45" r="24" fill="#94a3b8" />
          <circle cx="62" cy="52" r="16" fill="#cbd5e1" />
          <circle cx="98" cy="52" r="16" fill="#cbd5e1" />
          {/* Red lava erupting */}
          <path d="M68,72 L80,50 L92,72" fill="#ef4444" />
          <path d="M80,72 L80,95 M72,72 L68,85 M88,72 L92,85" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
        </g>
      );

    // 13. น้ำตก (Waterfall)
    case 'waterfall':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Cliffs */}
            <polygon points="20,40 50,40 50,135 20,135" />
            <polygon points="110,40 140,40 140,135 110,135" />
            {/* Water flow and pool */}
            <rect x="48" y="45" width="64" height="80" />
            <ellipse cx="80" cy="130" rx="55" ry="14" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="20,40 50,40 50,135 20,135" fill="#475569" />
          <polygon points="110,40 140,40 140,135 110,135" fill="#475569" />
          <rect x="50" y="45" width="60" height="78" fill="#38bdf8" />
          <line x1="62" y1="45" x2="62" y2="120" stroke="#ffffff" strokeWidth="3" />
          <line x1="80" y1="45" x2="80" y2="120" stroke="#ffffff" strokeWidth="3" />
          <line x1="98" y1="45" x2="98" y2="120" stroke="#ffffff" strokeWidth="3" />
          <ellipse cx="80" cy="130" rx="55" ry="14" fill="#0284c7" />
          <ellipse cx="80" cy="126" rx="35" ry="6" fill="#e0f2fe" opacity="0.6" />
        </g>
      );

    // 14. คลื่นทะเล (Sea Wave)
    case 'sea_wave':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M20,130 C45,130 65,110 75,90 C85,65 110,45 135,60 C145,68 135,85 120,80 C110,75 105,82 100,95 C90,120 70,130 20,130 Z" />
          </g>
        );
      }
      return (
        <g>
          <path d="M20,130 C45,130 65,110 75,90 C85,65 110,45 135,60 C145,68 135,85 120,80 C110,75 105,82 100,95 C90,120 70,130 20,130 Z" fill="#0284c7" />
          {/* White foam crest */}
          <path d="M110,50 Q135,55 135,65 Q135,78 120,78 Q110,70 110,50 Z" fill="#ffffff" />
          <circle cx="120" cy="85" r="4" fill="#ffffff" />
          <circle cx="105" cy="98" r="4" fill="#ffffff" />
        </g>
      );

    // 15. ต้นมะพร้าว (Palm Tree)
    case 'palm_tree':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Curved trunk */}
            <path d="M70,145 Q85,100 80,55 L90,55 Q95,100 82,145 Z" />
            {/* Fronds */}
            <path d="M80,55 Q50,30 30,55" stroke={silFill} strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M80,55 Q110,30 130,55" stroke={silFill} strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M80,55 Q40,55 25,85" stroke={silFill} strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M80,55 Q120,55 135,85" stroke={silFill} strokeWidth="10" strokeLinecap="round" fill="none" />
            <circle cx="74" cy="62" r="7" />
            <circle cx="86" cy="62" r="7" />
          </g>
        );
      }
      return (
        <g>
          <path d="M70,145 Q85,100 80,55 L90,55 Q95,100 82,145 Z" fill="#92400e" />
          <path d="M80,55 Q50,30 30,55" stroke="#15803d" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M80,55 Q110,30 130,55" stroke="#15803d" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M80,55 Q40,55 25,85" stroke="#15803d" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M80,55 Q120,55 135,85" stroke="#15803d" strokeWidth="8" strokeLinecap="round" fill="none" />
          <circle cx="74" cy="62" r="7" fill="#78350f" />
          <circle cx="86" cy="62" r="7" fill="#78350f" />
        </g>
      );

    // 16. ต้นกระบองเพชร (Cactus)
    case 'cactus':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Main stem */}
            <rect x="68" y="35" width="24" height="105" rx="12" />
            {/* Left arm */}
            <path d="M72,85 L45,85 L45,60" stroke={silFill} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Right arm */}
            <path d="M88,95 L115,95 L115,70" stroke={silFill} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        );
      }
      return (
        <g>
          <path d="M72,85 L45,85 L45,60" stroke="#15803d" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M88,95 L115,95 L115,70" stroke="#15803d" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="68" y="35" width="24" height="105" rx="12" fill="#16a34a" />
          {/* Flower on top */}
          <circle cx="80" cy="30" r="7" fill="#f43f5e" />
        </g>
      );

    // 17. แอปเปิล (Apple)
    case 'apple':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="68" cy="85" r="34" />
            <circle cx="92" cy="85" r="34" />
            <path d="M80,55 L82,32" stroke={silFill} strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="94" cy="40" rx="12" ry="6" transform="rotate(-25 94 40)" />
          </g>
        );
      }
      return (
        <g>
          <path d="M80,55 L82,32" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="94" cy="40" rx="12" ry="6" transform="rotate(-25 94 40)" fill="#22c55e" />
          <circle cx="68" cy="85" r="34" fill="#ef4444" />
          <circle cx="92" cy="85" r="34" fill="#dc2626" />
          <ellipse cx="62" cy="72" rx="8" ry="14" transform="rotate(-30 62 72)" fill="#ffffff" opacity="0.6" />
        </g>
      );

    // 18. กล้วย (Banana)
    case 'banana':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M45,45 C75,55 125,75 115,125 C105,100 80,75 45,45 Z" />
            <path d="M35,65 C65,75 115,95 105,145 C95,120 70,95 35,65 Z" />
          </g>
        );
      }
      return (
        <g>
          <path d="M45,45 C75,55 125,75 115,125 C105,100 80,75 45,45 Z" fill="#eab308" />
          <path d="M35,65 C65,75 115,95 105,145 C95,120 70,95 35,65 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          <circle cx="35" cy="65" r="4" fill="#65a30d" />
        </g>
      );

    // 19. แตงโม (Watermelon)
    case 'watermelon':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M30,55 L130,55 C125,125 35,125 30,55 Z" />
          </g>
        );
      }
      return (
        <g>
          <path d="M30,55 L130,55 C125,125 35,125 30,55 Z" fill="#15803d" />
          <path d="M35,55 L125,55 C120,118 40,118 35,55 Z" fill="#ef4444" />
          {/* Black seeds */}
          <circle cx="60" cy="72" r="3" fill="#1e293b" />
          <circle cx="80" cy="78" r="3" fill="#1e293b" />
          <circle cx="100" cy="72" r="3" fill="#1e293b" />
          <circle cx="70" cy="90" r="3" fill="#1e293b" />
          <circle cx="90" cy="90" r="3" fill="#1e293b" />
        </g>
      );

    // 20. สับปะรด (Pineapple)
    case 'pineapple':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Spiky crown */}
            <polygon points="80,20 70,55 60,30 65,60 95,60 100,30 90,55" />
            <ellipse cx="80" cy="98" rx="36" ry="44" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="80,20 70,55 60,30 65,60 95,60 100,30 90,55" fill="#15803d" />
          <ellipse cx="80" cy="98" rx="36" ry="44" fill="#f59e0b" />
          {/* Diamond crisscross */}
          <line x1="55" y1="75" x2="105" y2="120" stroke="#b45309" strokeWidth="2.5" />
          <line x1="55" y1="120" x2="105" y2="75" stroke="#b45309" strokeWidth="2.5" />
        </g>
      );

    // 21. มะม่วง (Mango)
    case 'mango':
      if (isSilhouette) {
        return (
          <g fill={silFill} transform="rotate(25 80 80)">
            <path d="M80,35 C115,45 125,95 95,125 C65,145 45,105 55,75 C60,55 70,40 80,35 Z" />
            <rect x="78" y="22" width="5" height="15" rx="2" />
          </g>
        );
      }
      return (
        <g transform="rotate(25 80 80)">
          <rect x="78" y="22" width="5" height="15" rx="2" fill="#78350f" />
          <path d="M80,35 C115,45 125,95 95,125 C65,145 45,105 55,75 C60,55 70,40 80,35 Z" fill="#facc15" stroke="#eab308" strokeWidth="2" />
          <ellipse cx="70" cy="65" rx="8" ry="14" transform="rotate(-20 70 65)" fill="#ffffff" opacity="0.6" />
        </g>
      );

    // 22. ส้ม (Orange)
    case 'orange':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="80" cy="85" r="46" />
            <rect x="78" y="32" width="5" height="12" rx="2" />
            <ellipse cx="94" cy="38" rx="12" ry="6" transform="rotate(-20 94 38)" />
          </g>
        );
      }
      return (
        <g>
          <rect x="78" y="32" width="5" height="12" rx="2" fill="#78350f" />
          <ellipse cx="94" cy="38" rx="12" ry="6" transform="rotate(-20 94 38)" fill="#22c55e" />
          <circle cx="80" cy="85" r="46" fill="#f97316" stroke="#ea580c" strokeWidth="2" />
          <ellipse cx="65" cy="68" rx="8" ry="14" transform="rotate(-30 65 68)" fill="#ffffff" opacity="0.5" />
        </g>
      );

    // 23. องุ่น (Grapes)
    case 'grapes':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="78" y="25" width="5" height="15" rx="2" />
            {/* Grape cluster circles */}
            <circle cx="65" cy="55" r="14" />
            <circle cx="95" cy="55" r="14" />
            <circle cx="80" cy="52" r="14" />
            <circle cx="55" cy="78" r="14" />
            <circle cx="80" cy="78" r="14" />
            <circle cx="105" cy="78" r="14" />
            <circle cx="68" cy="102" r="14" />
            <circle cx="92" cy="102" r="14" />
            <circle cx="80" cy="122" r="14" />
          </g>
        );
      }
      return (
        <g>
          <rect x="78" y="25" width="5" height="15" rx="2" fill="#78350f" />
          <circle cx="65" cy="55" r="14" fill="#a855f7" />
          <circle cx="95" cy="55" r="14" fill="#a855f7" />
          <circle cx="80" cy="52" r="14" fill="#9333ea" />
          <circle cx="55" cy="78" r="14" fill="#9333ea" />
          <circle cx="80" cy="78" r="14" fill="#7e22ce" />
          <circle cx="105" cy="78" r="14" fill="#9333ea" />
          <circle cx="68" cy="102" r="14" fill="#7e22ce" />
          <circle cx="92" cy="102" r="14" fill="#7e22ce" />
          <circle cx="80" cy="122" r="14" fill="#6b21a8" />
        </g>
      );

    // 24. สตรอว์เบอร์รี (Strawberry)
    case 'strawberry':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="80,25 70,45 50,35 65,55 95,55 110,35 90,45" />
            <path d="M45,55 C40,95 70,135 80,140 C90,135 120,95 115,55 Z" />
          </g>
        );
      }
      return (
        <g>
          <path d="M45,55 C40,95 70,135 80,140 C90,135 120,95 115,55 Z" fill="#ef4444" />
          <polygon points="80,25 70,45 50,35 65,55 95,55 110,35 90,45" fill="#22c55e" />
          {/* Seeds */}
          <circle cx="65" cy="70" r="2.5" fill="#fef08a" />
          <circle cx="80" cy="75" r="2.5" fill="#fef08a" />
          <circle cx="95" cy="70" r="2.5" fill="#fef08a" />
          <circle cx="72" cy="95" r="2.5" fill="#fef08a" />
          <circle cx="88" cy="95" r="2.5" fill="#fef08a" />
          <circle cx="80" cy="115" r="2.5" fill="#fef08a" />
        </g>
      );

    // 25. ฟักทอง (Pumpkin)
    case 'pumpkin':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M78,45 Q75,25 88,25 L88,40" stroke={silFill} strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="60" cy="90" rx="26" ry="38" />
            <ellipse cx="100" cy="90" rx="26" ry="38" />
            <ellipse cx="80" cy="90" rx="30" ry="40" />
          </g>
        );
      }
      return (
        <g>
          <path d="M78,45 Q75,25 88,25 L88,40" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="60" cy="90" rx="26" ry="38" fill="#ea580c" />
          <ellipse cx="100" cy="90" rx="26" ry="38" fill="#ea580c" />
          <ellipse cx="80" cy="90" rx="30" ry="40" fill="#f97316" stroke="#ea580c" strokeWidth="2" />
        </g>
      );

    // 26. แครอต (Carrot)
    case 'carrot':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="76,45 65,15 78,35 82,15 84,35 95,15 84,45" />
            <polygon points="62,45 98,45 80,145" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="76,45 65,15 78,35 82,15 84,35 95,15 84,45" fill="#22c55e" />
          <polygon points="62,45 98,45 80,145" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
          <line x1="70" y1="65" x2="85" y2="65" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="75" y1="85" x2="90" y2="85" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );

    // 27. ข้าวโพด (Corn)
    case 'corn':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <ellipse cx="80" cy="75" rx="24" ry="48" />
            {/* Husk leaves */}
            <path d="M50,135 Q55,95 72,95" stroke={silFill} strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M110,135 Q105,95 88,95" stroke={silFill} strokeWidth="10" strokeLinecap="round" fill="none" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="80" cy="75" rx="24" ry="48" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          {/* Kernels grid */}
          <line x1="72" y1="40" x2="72" y2="110" stroke="#ca8a04" strokeWidth="2" />
          <line x1="88" y1="40" x2="88" y2="110" stroke="#ca8a04" strokeWidth="2" />
          <path d="M50,135 Q55,95 72,95" stroke="#16a34a" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M110,135 Q105,95 88,95" stroke="#16a34a" strokeWidth="10" strokeLinecap="round" fill="none" />
        </g>
      );

    // 28. มะเขือเทศ (Tomato)
    case 'tomato':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="80,35 72,48 55,42 68,55 58,68 75,62 80,72 85,62 102,68 92,55 105,42 88,48" />
            <circle cx="80" cy="85" r="44" />
          </g>
        );
      }
      return (
        <g>
          <circle cx="80" cy="85" r="44" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
          <ellipse cx="65" cy="70" rx="8" ry="14" transform="rotate(-30 65 70)" fill="#ffffff" opacity="0.6" />
          <polygon points="80,35 72,48 55,42 68,55 58,68 75,62 80,72 85,62 102,68 92,55 105,42 88,48" fill="#22c55e" />
        </g>
      );

    // 29. มะนาว (Lemon)
    case 'lemon':
      if (isSilhouette) {
        return (
          <g fill={silFill} transform="rotate(30 80 80)">
            <ellipse cx="80" cy="80" rx="46" ry="32" />
            <polygon points="32,80 38,74 38,86" />
            <polygon points="128,80 122,74 122,86" />
          </g>
        );
      }
      return (
        <g transform="rotate(30 80 80)">
          <polygon points="32,80 38,74 38,86" fill="#84cc16" />
          <polygon points="128,80 122,74 122,86" fill="#84cc16" />
          <ellipse cx="80" cy="80" rx="46" ry="32" fill="#84cc16" stroke="#65a30d" strokeWidth="2" />
          <ellipse cx="75" cy="70" rx="16" ry="8" fill="#bef264" opacity="0.6" />
        </g>
      );

    // 30. มะพร้าว (Coconut)
    case 'coconut':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="80" cy="85" r="46" />
            {/* 3 germination pores */}
            <circle cx="70" cy="65" r="4" fill="#ffffff" />
            <circle cx="90" cy="65" r="4" fill="#ffffff" />
            <circle cx="80" cy="80" r="4" fill="#ffffff" />
          </g>
        );
      }
      return (
        <g>
          <circle cx="80" cy="85" r="46" fill="#78350f" stroke="#451a03" strokeWidth="3" />
          <circle cx="70" cy="65" r="4" fill="#451a03" />
          <circle cx="90" cy="65" r="4" fill="#451a03" />
          <circle cx="80" cy="80" r="4" fill="#451a03" />
          <ellipse cx="65" cy="95" rx="12" ry="6" transform="rotate(-20 65 95)" fill="#92400e" />
        </g>
      );

    default:
      return <circle cx="80" cy="80" r="40" fill={isSilhouette ? silFill : '#60a5fa'} />;
  }
};
