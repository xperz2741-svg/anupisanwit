import React from 'react';

interface IllustrationProps {
  id: string;
  isSilhouette: boolean;
}

export const ObjectIllustration: React.FC<IllustrationProps> = ({ id, isSilhouette }) => {
  const silFill = '#1e293b';

  switch (id) {
    // 1. ลูกบอล (Ball)
    case 'ball':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="80" cy="80" r="54" />
          </g>
        );
      }
      return (
        <g>
          <circle cx="80" cy="80" r="54" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" />
          <path d="M80,26 C105,45 105,115 80,134 C55,115 55,45 80,26 Z" fill="#3b82f6" />
          <path d="M80,26 C68,45 68,115 80,134 C40,110 32,55 80,26 Z" fill="#facc15" />
          <path d="M80,26 C92,45 92,115 80,134 C120,110 128,55 80,26 Z" fill="#22c55e" />
          <circle cx="80" cy="80" r="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="60" cy="52" rx="14" ry="7" transform="rotate(-30 60 52)" fill="#ffffff" opacity="0.6" />
        </g>
      );

    // 2. รถยนต์ (Car)
    case 'car':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M42,92 L55,56 C62,48 95,48 108,56 L122,92 Z" />
            <rect x="25" y="85" width="112" height="34" rx="10" />
            <circle cx="52" cy="122" r="16" />
            <circle cx="110" cy="122" r="16" />
          </g>
        );
      }
      return (
        <g>
          <path d="M42,92 L55,56 C62,48 95,48 108,56 L122,92 Z" fill="#0284c7" />
          <path d="M57,60 L76,60 L76,88 L46,88 Z" fill="#e0f2fe" />
          <path d="M82,60 L105,60 L116,88 L82,88 Z" fill="#e0f2fe" />
          <rect x="25" y="85" width="112" height="32" rx="10" fill="#38bdf8" />
          <circle cx="28" cy="98" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="134" cy="98" r="5" fill="#f87171" stroke="#dc2626" strokeWidth="1.5" />
          <circle cx="52" cy="122" r="16" fill="#1e293b" />
          <circle cx="52" cy="122" r="8" fill="#94a3b8" />
          <circle cx="52" cy="122" r="3" fill="#ffffff" />
          <circle cx="110" cy="122" r="16" fill="#1e293b" />
          <circle cx="110" cy="122" r="8" fill="#94a3b8" />
          <circle cx="110" cy="122" r="3" fill="#ffffff" />
        </g>
      );

    // 3. จักรยาน (Bicycle)
    case 'bicycle':
      if (isSilhouette) {
        return (
          <g fill={silFill} stroke={silFill} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="45" cy="110" r="28" fill="none" strokeWidth="7" />
            <circle cx="115" cy="110" r="28" fill="none" strokeWidth="7" />
            <line x1="45" y1="110" x2="72" y2="110" />
            <line x1="72" y1="110" x2="62" y2="72" />
            <line x1="62" y1="72" x2="45" y2="110" />
            <line x1="72" y1="110" x2="105" y2="72" />
            <line x1="62" y1="72" x2="105" y2="72" />
            <line x1="105" y1="72" x2="115" y2="110" />
            <line x1="105" y1="72" x2="108" y2="52" />
            <line x1="98" y1="52" x2="115" y2="52" strokeWidth="8" />
            <line x1="62" y1="72" x2="60" y2="62" />
            <line x1="52" y1="62" x2="68" y2="62" strokeWidth="8" />
          </g>
        );
      }
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle cx="45" cy="110" r="28" fill="none" stroke="#64748b" strokeWidth="6" />
          <circle cx="45" cy="110" r="4" fill="#334155" />
          <circle cx="115" cy="110" r="28" fill="none" stroke="#64748b" strokeWidth="6" />
          <circle cx="115" cy="110" r="4" fill="#334155" />
          <line x1="45" y1="82" x2="45" y2="138" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="17" y1="110" x2="73" y2="110" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="115" y1="82" x2="115" y2="138" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="87" y1="110" x2="143" y2="110" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="45" y1="110" x2="72" y2="110" stroke="#ea580c" strokeWidth="6" />
          <line x1="72" y1="110" x2="62" y2="72" stroke="#ea580c" strokeWidth="6" />
          <line x1="62" y1="72" x2="45" y2="110" stroke="#ea580c" strokeWidth="6" />
          <line x1="72" y1="110" x2="105" y2="72" stroke="#ea580c" strokeWidth="6" />
          <line x1="62" y1="72" x2="105" y2="72" stroke="#ea580c" strokeWidth="6" />
          <line x1="105" y1="72" x2="115" y2="110" stroke="#ea580c" strokeWidth="6" />
          <line x1="105" y1="72" x2="108" y2="52" stroke="#94a3b8" strokeWidth="5" />
          <path d="M96,52 L116,52 Q120,52 120,58" stroke="#0f172a" strokeWidth="6" fill="none" />
          <line x1="62" y1="72" x2="60" y2="60" stroke="#94a3b8" strokeWidth="5" />
          <path d="M50,60 Q62,56 72,60" stroke="#0f172a" strokeWidth="7" fill="none" />
          <circle cx="72" cy="110" r="7" fill="#cbd5e1" />
          <line x1="72" y1="110" x2="72" y2="124" stroke="#475569" strokeWidth="3" />
          <rect x="66" y="122" width="12" height="4" rx="2" fill="#0f172a" />
        </g>
      );

    // 4. ดินสอ (Pencil)
    case 'pencil':
      if (isSilhouette) {
        return (
          <g fill={silFill} transform="rotate(-35 80 80)">
            <rect x="70" y="20" width="20" height="22" rx="6" />
            <rect x="70" y="42" width="20" height="75" />
            <polygon points="70,117 90,117 80,145" />
          </g>
        );
      }
      return (
        <g transform="rotate(-35 80 80)">
          <rect x="70" y="20" width="20" height="22" rx="6" fill="#fb7185" />
          <rect x="69" y="38" width="22" height="10" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <rect x="70" y="48" width="20" height="70" fill="#facc15" />
          <rect x="70" y="48" width="7" height="70" fill="#eab308" />
          <rect x="83" y="48" width="7" height="70" fill="#fde047" />
          <polygon points="70,118 90,118 80,145" fill="#fed7aa" />
          <polygon points="76,134 84,134 80,145" fill="#334155" />
        </g>
      );

    // 5. หนังสือ (Book)
    case 'book':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M80,56 C95,48 120,48 142,54 L142,122 C120,116 95,116 80,126 C65,116 40,116 18,122 L18,54 C40,48 65,48 80,56 Z" />
            <polygon points="77,126 83,126 83,144 80,138 77,144" />
          </g>
        );
      }
      return (
        <g>
          <path d="M80,54 C95,46 120,46 144,52 L144,124 C120,118 95,118 80,128 C65,118 40,118 16,124 L16,52 C40,46 65,46 80,54 Z" fill="#4338ca" />
          <path d="M80,58 C66,50 42,50 22,56 L22,120 C42,114 66,114 80,122 Z" fill="#ffffff" stroke="#e0e7ff" strokeWidth="2" />
          <path d="M80,58 C94,50 118,50 138,56 L138,120 C118,114 94,114 80,122 Z" fill="#ffffff" stroke="#e0e7ff" strokeWidth="2" />
          <line x1="32" y1="72" x2="70" y2="72" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="84" x2="68" y2="84" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="90" y1="72" x2="128" y2="72" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="90" y1="84" x2="128" y2="84" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="77,58 83,58 83,144 80,138 77,144" fill="#f43f5e" />
        </g>
      );

    // 6. ร่ม (Umbrella)
    case 'umbrella':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="78" y="22" width="4" height="14" rx="2" />
            <path d="M80,34 C120,34 145,72 145,86 C134,80 122,80 112,86 C102,80 90,80 80,86 C70,80 58,80 48,86 C38,80 26,80 15,86 C15,72 40,34 80,34 Z" />
            <path d="M80,84 L80,128 C80,140 68,140 68,132" stroke={silFill} strokeWidth="6" fill="none" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          <rect x="78" y="22" width="4" height="14" rx="2" fill="#cbd5e1" />
          <path d="M80,34 C120,34 145,72 145,86 C134,80 122,80 112,86 C102,80 90,80 80,86 C70,80 58,80 48,86 C38,80 26,80 15,86 C15,72 40,34 80,34 Z" fill="#e11d48" />
          <path d="M80,34 C60,45 52,65 48,86 C58,80 70,80 80,86 Z" fill="#38bdf8" />
          <path d="M80,34 C100,45 108,65 112,86 C102,80 90,80 80,86 Z" fill="#facc15" />
          <path d="M80,84 L80,128 C80,140 68,140 68,132" stroke="#94a3b8" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M80,122 C80,140 68,140 68,132" stroke="#78350f" strokeWidth="8" fill="none" strokeLinecap="round" />
        </g>
      );

    // 7. ถ้วย (Cup)
    case 'cup':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M60,35 Q65,22 58,15" stroke={silFill} strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M80,35 Q85,20 78,12" stroke={silFill} strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M100,35 Q105,22 98,15" stroke={silFill} strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M105,58 C135,58 135,108 105,108" stroke={silFill} strokeWidth="14" fill="none" strokeLinecap="round" />
            <path d="M38,50 L46,120 C48,130 102,130 104,120 L112,50 Z" />
          </g>
        );
      }
      return (
        <g>
          <path d="M60,35 Q65,22 58,15" stroke="#93c5fd" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M80,35 Q85,20 78,12" stroke="#93c5fd" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M100,35 Q105,22 98,15" stroke="#93c5fd" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M105,58 C135,58 135,108 105,108" stroke="#0284c7" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M105,58 C135,58 135,108 105,108" stroke="#38bdf8" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M38,50 L46,120 C48,130 102,130 104,120 L112,50 Z" fill="#38bdf8" />
          <ellipse cx="75" cy="50" rx="37" ry="9" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
          <ellipse cx="75" cy="50" rx="33" ry="7" fill="#78350f" />
          <path d="M75,90 C75,90 62,80 62,72 C62,65 69,64 75,70 C81,64 88,65 88,72 C88,80 75,90 75,90 Z" fill="#ffffff" />
        </g>
      );

    // 8. ช้อน (Spoon)
    case 'spoon':
      if (isSilhouette) {
        return (
          <g fill={silFill} transform="rotate(-30 80 80)">
            <ellipse cx="80" cy="40" rx="22" ry="30" />
            <path d="M76,68 L73,138 C73,148 87,148 87,138 L84,68 Z" />
          </g>
        );
      }
      return (
        <g transform="rotate(-30 80 80)">
          <path d="M76,68 L73,138 C73,148 87,148 87,138 L84,68 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
          <ellipse cx="80" cy="40" rx="22" ry="30" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
          <ellipse cx="78" cy="40" rx="14" ry="20" fill="#f1f5f9" opacity="0.6" />
        </g>
      );

    // 9. กรรไกร (Scissors)
    case 'scissors':
      if (isSilhouette) {
        return (
          <g fill={silFill} stroke={silFill} strokeLinecap="round" strokeLinejoin="round">
            <polygon points="76,80 40,24 55,24 82,75" />
            <polygon points="84,80 120,24 105,24 78,75" />
            <circle cx="56" cy="125" r="20" strokeWidth="10" fill="none" />
            <circle cx="104" cy="125" r="20" strokeWidth="10" fill="none" />
            <line x1="77" y1="78" x2="60" y2="108" strokeWidth="12" />
            <line x1="83" y1="78" x2="100" y2="108" strokeWidth="12" />
          </g>
        );
      }
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <polygon points="76,80 42,24 54,24 82,75" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="84,80 118,24 106,24 78,75" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="80" cy="78" r="5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
          <circle cx="56" cy="125" r="18" stroke="#3b82f6" strokeWidth="10" fill="none" />
          <line x1="77" y1="78" x2="60" y2="108" stroke="#3b82f6" strokeWidth="12" />
          <circle cx="104" cy="125" r="18" stroke="#f43f5e" strokeWidth="10" fill="none" />
          <line x1="83" y1="78" x2="100" y2="108" stroke="#f43f5e" strokeWidth="12" />
        </g>
      );

    // 10. นาฬิกา (Clock)
    case 'clock':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <ellipse cx="44" cy="38" rx="16" ry="12" transform="rotate(-35 44 38)" />
            <ellipse cx="116" cy="38" rx="16" ry="12" transform="rotate(35 116 38)" />
            <rect x="76" y="24" width="8" height="14" rx="2" />
            <polygon points="40,128 32,145 46,145" />
            <polygon points="120,128 114,145 128,145" />
            <circle cx="80" cy="85" r="46" />
          </g>
        );
      }
      return (
        <g>
          <rect x="77" y="24" width="6" height="14" rx="2" fill="#94a3b8" />
          <circle cx="80" cy="24" r="5" fill="#64748b" />
          <ellipse cx="44" cy="38" rx="16" ry="12" transform="rotate(-35 44 38)" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <ellipse cx="116" cy="38" rx="16" ry="12" transform="rotate(35 116 38)" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <polygon points="40,126 30,146 44,146" fill="#64748b" />
          <polygon points="120,126 116,146 130,146" fill="#64748b" />
          <circle cx="80" cy="85" r="46" fill="#f43f5e" stroke="#881337" strokeWidth="3" />
          <circle cx="80" cy="85" r="36" fill="#ffffff" />
          <circle cx="80" cy="55" r="2.5" fill="#1e293b" />
          <circle cx="110" cy="85" r="2.5" fill="#1e293b" />
          <circle cx="80" cy="115" r="2.5" fill="#1e293b" />
          <circle cx="50" cy="85" r="2.5" fill="#1e293b" />
          <line x1="80" y1="85" x2="62" y2="68" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
          <line x1="80" y1="85" x2="102" y2="68" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="80" cy="85" r="4" fill="#f43f5e" />
        </g>
      );

    // 11. กระเป๋านักเรียน (Schoolbag)
    case 'schoolbag':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M68,36 C68,26 92,26 92,36" stroke={silFill} strokeWidth="6" fill="none" strokeLinecap="round" />
            <rect x="42" y="38" width="76" height="95" rx="18" />
            <rect x="50" y="80" width="60" height="42" rx="10" />
            <path d="M38,55 L32,110" stroke={silFill} strokeWidth="8" strokeLinecap="round" />
            <path d="M122,55 L128,110" stroke={silFill} strokeWidth="8" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          <path d="M68,36 C68,26 92,26 92,36" stroke="#4338ca" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M38,55 L32,110" stroke="#3730a3" strokeWidth="8" strokeLinecap="round" />
          <path d="M122,55 L128,110" stroke="#3730a3" strokeWidth="8" strokeLinecap="round" />
          <rect x="42" y="38" width="76" height="95" rx="18" fill="#4f46e5" />
          <path d="M42,52 L118,52" stroke="#6366f1" strokeWidth="3" />
          <rect x="50" y="80" width="60" height="42" rx="10" fill="#f59e0b" />
          <rect x="74" y="86" width="12" height="6" rx="2" fill="#cbd5e1" />
        </g>
      );

    // 12. รองเท้า (Shoes)
    case 'shoes':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M35,115 C35,85 55,68 80,68 C95,68 105,82 120,88 C138,94 145,110 145,125 L25,125 C25,120 30,118 35,115 Z" />
            <rect x="22" y="125" width="125" height="16" rx="6" />
          </g>
        );
      }
      return (
        <g>
          <rect x="22" y="125" width="125" height="16" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M35,115 C35,85 55,68 80,68 C95,68 105,82 120,88 C138,94 145,110 145,125 L25,125 C25,120 30,118 35,115 Z" fill="#ef4444" />
          <ellipse cx="132" cy="116" rx="12" ry="9" fill="#ffffff" />
          <line x1="72" y1="80" x2="88" y2="80" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <line x1="78" y1="88" x2="94" y2="88" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <line x1="84" y1="96" x2="100" y2="96" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        </g>
      );

    // 13. หมวก (Hat)
    case 'hat':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <path d="M50,95 C50,55 110,55 110,95 Z" />
            <ellipse cx="80" cy="98" rx="65" ry="18" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="80" cy="98" rx="65" ry="18" fill="#f59e0b" />
          <path d="M50,95 C50,55 110,55 110,95 Z" fill="#fbbf24" />
          <rect x="49" y="86" width="62" height="10" fill="#dc2626" />
        </g>
      );

    // 14. แว่นตา (Glasses)
    case 'glasses':
      if (isSilhouette) {
        return (
          <g fill={silFill} stroke={silFill} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="80" r="26" />
            <circle cx="110" cy="80" r="26" />
            <line x1="76" y1="80" x2="84" y2="80" />
            <line x1="24" y1="75" x2="10" y2="65" />
            <line x1="136" y1="75" x2="150" y2="65" />
          </g>
        );
      }
      return (
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="80" r="26" fill="#e0f2fe" stroke="#0284c7" strokeWidth="7" />
          <circle cx="110" cy="80" r="26" fill="#e0f2fe" stroke="#0284c7" strokeWidth="7" />
          <line x1="76" y1="80" x2="84" y2="80" stroke="#0284c7" strokeWidth="7" />
          <line x1="24" y1="75" x2="10" y2="65" stroke="#0284c7" strokeWidth="6" />
          <line x1="136" y1="75" x2="150" y2="65" stroke="#0284c7" strokeWidth="6" />
          <ellipse cx="42" cy="74" rx="8" ry="4" transform="rotate(-30 42 74)" fill="#ffffff" opacity="0.7" />
          <ellipse cx="102" cy="74" rx="8" ry="4" transform="rotate(-30 102 74)" fill="#ffffff" opacity="0.7" />
        </g>
      );

    // 15. แปรงสีฟัน (Toothbrush)
    case 'toothbrush':
      if (isSilhouette) {
        return (
          <g fill={silFill} transform="rotate(45 80 80)">
            <rect x="74" y="25" width="12" height="110" rx="6" />
            <rect x="68" y="25" width="8" height="32" rx="2" />
          </g>
        );
      }
      return (
        <g transform="rotate(45 80 80)">
          <rect x="74" y="25" width="12" height="110" rx="6" fill="#38bdf8" />
          <rect x="68" y="25" width="8" height="32" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M64,28 Q70,22 72,28" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      );

    // 16. เก้าอี้ (Chair)
    case 'chair':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="45" y="25" width="10" height="75" rx="4" />
            <rect x="45" y="35" width="45" height="8" rx="2" />
            <rect x="45" y="55" width="45" height="8" rx="2" />
            <rect x="40" y="85" width="75" height="14" rx="4" />
            <rect x="45" y="99" width="8" height="42" rx="3" />
            <rect x="100" y="99" width="8" height="42" rx="3" />
          </g>
        );
      }
      return (
        <g>
          <rect x="45" y="25" width="10" height="75" rx="4" fill="#b45309" />
          <rect x="45" y="35" width="45" height="8" rx="2" fill="#d97706" />
          <rect x="45" y="55" width="45" height="8" rx="2" fill="#d97706" />
          <rect x="40" y="85" width="75" height="14" rx="4" fill="#f59e0b" />
          <rect x="45" y="99" width="8" height="42" rx="3" fill="#b45309" />
          <rect x="100" y="99" width="8" height="42" rx="3" fill="#b45309" />
        </g>
      );

    // 17. โต๊ะ (Table)
    case 'table':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="25" y="65" width="110" height="16" rx="6" />
            <rect x="35" y="81" width="10" height="58" rx="4" />
            <rect x="115" y="81" width="10" height="58" rx="4" />
          </g>
        );
      }
      return (
        <g>
          <rect x="25" y="65" width="110" height="16" rx="6" fill="#f59e0b" />
          <rect x="35" y="81" width="10" height="58" rx="4" fill="#b45309" />
          <rect x="115" y="81" width="10" height="58" rx="4" fill="#b45309" />
          <line x1="30" y1="72" x2="130" y2="72" stroke="#fbbf24" strokeWidth="2" />
        </g>
      );

    // 18. เตียง (Bed)
    case 'bed':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="25" y="55" width="12" height="75" rx="4" />
            <rect x="125" y="75" width="12" height="55" rx="4" />
            <rect x="30" y="95" width="100" height="20" rx="4" />
            <ellipse cx="50" cy="90" rx="14" ry="8" />
          </g>
        );
      }
      return (
        <g>
          <rect x="25" y="55" width="12" height="75" rx="4" fill="#78350f" />
          <rect x="125" y="75" width="12" height="55" rx="4" fill="#78350f" />
          <rect x="30" y="95" width="100" height="20" rx="4" fill="#38bdf8" />
          <ellipse cx="50" cy="90" rx="14" ry="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="62" y="95" width="68" height="20" rx="2" fill="#f43f5e" />
        </g>
      );

    // 19. โคมไฟ (Lamp)
    case 'lamp':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="50,75 110,75 95,35 65,35" />
            <rect x="76" y="75" width="8" height="55" rx="2" />
            <ellipse cx="80" cy="135" rx="30" ry="10" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="80" cy="135" rx="30" ry="10" fill="#64748b" />
          <rect x="76" y="75" width="8" height="55" rx="2" fill="#94a3b8" />
          <polygon points="50,75 110,75 95,35 65,35" fill="#f59e0b" />
          <polygon points="54,72 106,72 93,38 67,38" fill="#fde047" opacity="0.6" />
        </g>
      );

    // 20. โทรศัพท์ (Phone)
    case 'phone':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="48" y="25" width="64" height="110" rx="16" />
          </g>
        );
      }
      return (
        <g>
          <rect x="48" y="25" width="64" height="110" rx="16" fill="#1e293b" />
          <rect x="52" y="36" width="56" height="86" rx="8" fill="#38bdf8" />
          <circle cx="80" cy="30" r="2.5" fill="#64748b" />
          <circle cx="80" cy="128" r="4" fill="#ffffff" opacity="0.6" />
        </g>
      );

    // 21. โทรทัศน์ (Television)
    case 'television':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            {/* Antenna */}
            <line x1="80" y1="42" x2="60" y2="18" stroke={silFill} strokeWidth="6" strokeLinecap="round" />
            <line x1="80" y1="42" x2="100" y2="18" stroke={silFill} strokeWidth="6" strokeLinecap="round" />
            <rect x="30" y="42" width="100" height="75" rx="12" />
            <rect x="72" y="117" width="16" height="16" />
            <rect x="55" y="133" width="50" height="8" rx="4" />
          </g>
        );
      }
      return (
        <g>
          <line x1="80" y1="42" x2="60" y2="18" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
          <line x1="80" y1="42" x2="100" y2="18" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
          <rect x="55" y="133" width="50" height="8" rx="4" fill="#334155" />
          <rect x="72" y="117" width="16" height="16" fill="#475569" />
          <rect x="30" y="42" width="100" height="75" rx="12" fill="#1e293b" />
          <rect x="38" y="48" width="84" height="60" rx="8" fill="#38bdf8" />
          <ellipse cx="60" cy="65" rx="14" ry="6" transform="rotate(-25 60 65)" fill="#ffffff" opacity="0.6" />
        </g>
      );

    // 22. พัดลม (Fan)
    case 'fan':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="80" cy="65" r="44" />
            <rect x="75" y="105" width="10" height="32" rx="4" />
            <ellipse cx="80" cy="140" rx="35" ry="12" />
          </g>
        );
      }
      return (
        <g>
          <ellipse cx="80" cy="140" rx="35" ry="12" fill="#0284c7" />
          <rect x="75" y="105" width="10" height="32" rx="4" fill="#38bdf8" />
          <circle cx="80" cy="65" r="44" fill="#e0f2fe" stroke="#0284c7" strokeWidth="4" />
          {/* 3 Blades */}
          {[0, 120, 240].map((angle, i) => (
            <ellipse
              key={i}
              cx="80"
              cy="45"
              rx="12"
              ry="22"
              fill="#0ea5e9"
              transform={`rotate(${angle} 80 65)`}
            />
          ))}
          <circle cx="80" cy="65" r="10" fill="#0369a1" />
        </g>
      );

    // 23. กุญแจ (Key)
    case 'key':
      if (isSilhouette) {
        return (
          <g fill={silFill} transform="rotate(45 80 80)">
            <circle cx="50" cy="80" r="24" />
            <rect x="70" y="74" width="60" height="12" rx="4" />
            <rect x="115" y="86" width="10" height="15" rx="2" />
            <rect x="100" y="86" width="10" height="10" rx="2" />
          </g>
        );
      }
      return (
        <g transform="rotate(45 80 80)">
          <circle cx="50" cy="80" r="24" fill="#facc15" stroke="#ca8a04" strokeWidth="3" />
          <circle cx="50" cy="80" r="10" fill="#ffffff" />
          <rect x="70" y="74" width="60" height="12" rx="4" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          <rect x="115" y="86" width="10" height="15" rx="2" fill="#facc15" />
          <rect x="100" y="86" width="10" height="10" rx="2" fill="#facc15" />
        </g>
      );

    // 24. ลูกโป่ง (Balloon)
    case 'balloon':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <ellipse cx="80" cy="65" rx="38" ry="46" />
            <polygon points="76,110 84,110 80,116" />
            <path d="M80,116 Q70,135 85,150" stroke={silFill} strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          <path d="M80,116 Q70,135 85,150" stroke="#64748b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="76,110 84,110 80,116" fill="#ef4444" />
          <ellipse cx="80" cy="65" rx="38" ry="46" fill="#ef4444" />
          <ellipse cx="65" cy="52" rx="8" ry="16" transform="rotate(-30 65 52)" fill="#ffffff" opacity="0.6" />
        </g>
      );

    // 25. ว่าว (Kite)
    case 'kite':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <polygon points="80,22 125,75 80,128 35,75" />
            <path d="M80,128 Q95,142 80,155" stroke={silFill} strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="80,22 125,75 80,75" fill="#f43f5e" />
          <polygon points="80,22 35,75 80,75" fill="#3b82f6" />
          <polygon points="80,128 125,75 80,75" fill="#facc15" />
          <polygon points="80,128 35,75 80,75" fill="#10b981" />
          <line x1="80" y1="22" x2="80" y2="128" stroke="#ffffff" strokeWidth="3" />
          <line x1="35" y1="75" x2="125" y2="75" stroke="#ffffff" strokeWidth="3" />
          <path d="M80,128 Q95,142 80,155" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="88,140 94,136 94,144" fill="#ec4899" />
        </g>
      );

    // 26. ตุ๊กตา (Teddy Bear)
    case 'teddy':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <circle cx="54" cy="45" r="14" />
            <circle cx="106" cy="45" r="14" />
            <circle cx="80" cy="65" r="32" />
            <ellipse cx="80" cy="115" rx="36" ry="34" />
            <circle cx="48" cy="105" r="12" />
            <circle cx="112" cy="105" r="12" />
            <ellipse cx="58" cy="145" rx="14" ry="9" />
            <ellipse cx="102" cy="145" rx="14" ry="9" />
          </g>
        );
      }
      return (
        <g>
          <circle cx="54" cy="45" r="14" fill="#b45309" />
          <circle cx="54" cy="45" r="8" fill="#fef3c7" />
          <circle cx="106" cy="45" r="14" fill="#b45309" />
          <circle cx="106" cy="45" r="8" fill="#fef3c7" />
          <circle cx="48" cy="105" r="12" fill="#b45309" />
          <circle cx="112" cy="105" r="12" fill="#b45309" />
          <ellipse cx="58" cy="145" rx="14" ry="9" fill="#b45309" />
          <ellipse cx="102" cy="145" rx="14" ry="9" fill="#b45309" />
          <ellipse cx="80" cy="115" rx="36" ry="34" fill="#d97706" />
          <ellipse cx="80" cy="118" rx="20" ry="22" fill="#fef3c7" />
          <circle cx="80" cy="65" r="32" fill="#d97706" />
          <ellipse cx="80" cy="72" rx="16" ry="12" fill="#fef3c7" />
          <circle cx="80" cy="68" r="4.5" fill="#1e293b" />
          <circle cx="70" cy="58" r="4" fill="#1e293b" />
          <circle cx="90" cy="58" r="4" fill="#1e293b" />
        </g>
      );

    // 27. เครื่องบิน (Airplane)
    case 'airplane':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <ellipse cx="80" cy="80" rx="18" ry="58" />
            <polygon points="80,68 15,95 20,110 80,90" />
            <polygon points="80,68 145,95 140,110 80,90" />
            <polygon points="80,125 55,142 60,148 80,138" />
            <polygon points="80,125 105,142 100,148 80,138" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="80,68 15,95 20,110 80,90" fill="#3b82f6" />
          <polygon points="80,68 145,95 140,110 80,90" fill="#3b82f6" />
          <polygon points="80,125 55,142 60,148 80,138" fill="#1d4ed8" />
          <polygon points="80,125 105,142 100,148 80,138" fill="#1d4ed8" />
          <ellipse cx="80" cy="80" rx="18" ry="58" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="80" cy="40" rx="12" ry="16" fill="#38bdf8" />
          <circle cx="80" cy="68" r="3" fill="#94a3b8" />
          <circle cx="80" cy="82" r="3" fill="#94a3b8" />
          <circle cx="80" cy="96" r="3" fill="#94a3b8" />
        </g>
      );

    // 28. รถไฟ (Train)
    case 'train':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="30" y="55" width="85" height="58" rx="8" />
            <rect x="85" y="40" width="38" height="73" rx="6" />
            <polygon points="32,45 42,45 40,55 34,55" />
            <polygon points="115,115 135,115 125,100" />
            <circle cx="50" cy="120" r="14" />
            <circle cx="80" cy="120" r="14" />
            <circle cx="110" cy="120" r="14" />
          </g>
        );
      }
      return (
        <g>
          <polygon points="32,45 42,45 40,55 34,55" fill="#64748b" />
          <rect x="30" y="55" width="85" height="58" rx="8" fill="#ef4444" />
          <rect x="85" y="40" width="38" height="73" rx="6" fill="#3b82f6" />
          <rect x="92" y="48" width="24" height="22" rx="4" fill="#e0f2fe" />
          <polygon points="25,115 15,115 25,100" fill="#f59e0b" />
          <circle cx="50" cy="120" r="14" fill="#1e293b" />
          <circle cx="50" cy="120" r="6" fill="#cbd5e1" />
          <circle cx="80" cy="120" r="14" fill="#1e293b" />
          <circle cx="80" cy="120" r="6" fill="#cbd5e1" />
          <circle cx="110" cy="120" r="14" fill="#1e293b" />
          <circle cx="110" cy="120" r="6" fill="#cbd5e1" />
        </g>
      );

    // 29. รถบัส (Bus)
    case 'bus':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="25" y="48" width="115" height="68" rx="14" />
            <circle cx="52" cy="120" r="15" />
            <circle cx="112" cy="120" r="15" />
          </g>
        );
      }
      return (
        <g>
          <rect x="25" y="48" width="115" height="68" rx="14" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          {/* Windows */}
          <rect x="32" y="56" width="22" height="22" rx="4" fill="#e0f2fe" />
          <rect x="60" y="56" width="22" height="22" rx="4" fill="#e0f2fe" />
          <rect x="88" y="56" width="22" height="22" rx="4" fill="#e0f2fe" />
          <rect x="116" y="56" width="18" height="22" rx="4" fill="#e0f2fe" />
          {/* Stripe */}
          <rect x="25" y="88" width="115" height="8" fill="#1e293b" />
          <circle cx="52" cy="120" r="15" fill="#1e293b" />
          <circle cx="52" cy="120" r="7" fill="#94a3b8" />
          <circle cx="112" cy="120" r="15" fill="#1e293b" />
          <circle cx="112" cy="120" r="7" fill="#94a3b8" />
        </g>
      );

    // 30. ขวดน้ำ (Water Bottle)
    case 'water_bottle':
      if (isSilhouette) {
        return (
          <g fill={silFill}>
            <rect x="70" y="24" width="20" height="14" rx="4" />
            <rect x="74" y="38" width="12" height="10" />
            <rect x="58" y="48" width="44" height="92" rx="14" />
          </g>
        );
      }
      return (
        <g>
          <rect x="70" y="24" width="20" height="14" rx="4" fill="#0284c7" />
          <rect x="74" y="38" width="12" height="10" fill="#38bdf8" />
          <rect x="58" y="48" width="44" height="92" rx="14" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          <rect x="58" y="80" width="44" height="30" fill="#bae6fd" />
          <ellipse cx="68" cy="65" rx="4" ry="12" fill="#ffffff" opacity="0.6" />
        </g>
      );

    default:
      return <circle cx="80" cy="80" r="40" fill={isSilhouette ? silFill : '#60a5fa'} />;
  }
};
