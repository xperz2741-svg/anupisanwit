import React from 'react';
import { Volume2, VolumeX, Home, Sparkles, Star } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface GameHeaderProps {
  score?: number;
  totalQuestions?: number;
  currentQuestionIndex?: number;
  streak?: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onGoHome: () => void;
  showHomeButton?: boolean;
  showScore?: boolean;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  score = 0,
  totalQuestions = 10,
  currentQuestionIndex,
  streak = 0,
  isMuted,
  onToggleMute,
  onGoHome,
  showHomeButton = true,
  showScore = true,
}) => {
  return (
    <header className="w-full max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
      {/* Left Zone: Home / Back Button */}
      <div className="flex items-center gap-2">
        {showHomeButton && (
          <button
            onClick={() => {
              soundManager.playPop();
              onGoHome();
            }}
            aria-label="กลับหน้าหลัก"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/90 border-2 border-amber-200 text-amber-900 font-bold shadow-sm hover:bg-amber-100 active:scale-95 transition-all text-sm md:text-base cursor-pointer"
          >
            <Home className="w-5 h-5 text-amber-600" />
            <span className="hidden sm:inline">หน้าแรก</span>
          </button>
        )}

        {/* Progress label if during gameplay */}
        {currentQuestionIndex !== undefined && (
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-2xl bg-amber-100 border border-amber-300 text-amber-950 font-bold text-sm md:text-base">
            <span>ข้อที่</span>
            <span className="text-amber-800 text-base md:text-lg font-black tabular-nums">
              {currentQuestionIndex + 1}
            </span>
            <span>/</span>
            <span className="tabular-nums">{totalQuestions}</span>
          </div>
        )}
      </div>

      {/* Right Zone: Score, Streak & Sound Mute Toggle */}
      <div className="flex items-center gap-2.5">
        {/* Streak bonus if streak >= 2 */}
        {streak >= 2 && (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-orange-100 border border-orange-300 text-orange-700 font-bold text-xs md:text-sm animate-bounce">
            <Sparkles className="w-4 h-4 text-orange-500 fill-orange-400" />
            <span>ต่อเนื่อง {streak}!</span>
          </div>
        )}

        {/* Score Stars */}
        {showScore && (
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-white/90 border-2 border-amber-200 text-amber-900 font-black text-sm md:text-base shadow-sm">
            <Star className="w-5 h-5 text-amber-500 fill-amber-400 animate-pulse" />
            <span className="tabular-nums text-base md:text-lg font-black text-amber-600">
              {score}
            </span>
            <span className="text-xs text-amber-700 font-semibold">ดาว</span>
          </div>
        )}

        {/* Sound Toggle */}
        <button
          onClick={() => {
            onToggleMute();
            soundManager.playPop();
          }}
          aria-label={isMuted ? 'เปิดเสียง' : 'ปิดเสียง'}
          className={`p-2.5 rounded-2xl border-2 transition-all cursor-pointer active:scale-95 shadow-sm ${
            isMuted
              ? 'bg-rose-50 border-rose-200 text-rose-500 hover:bg-rose-100'
              : 'bg-emerald-50 border-emerald-300 text-emerald-600 hover:bg-emerald-100'
          }`}
          title={isMuted ? 'เปิดเสียง' : 'ปิดเสียง'}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};
