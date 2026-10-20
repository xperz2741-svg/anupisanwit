import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Home, Star, Trophy, BookOpen } from 'lucide-react';
import { MascotIllustration } from './illustrations/MascotIllustration';
import { soundManager } from '../utils/audio';

interface SummaryScreenProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onGoHome: () => void;
  onOpenGallery: () => void;
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({
  score,
  totalQuestions,
  onPlayAgain,
  onGoHome,
  onOpenGallery,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  // Determine star count (1 to 3 stars, always encouraging)
  const starCount = score === totalQuestions ? 3 : percentage >= 60 ? 2 : 1;

  // Praise message based on performance
  let praise = 'เก่งมากๆ เลยคนเก่ง! พยายามได้ดีมาก!';
  if (score === totalQuestions) {
    praise = 'สุดยอดอัจฉริยะนักสืบตัวน้อย! ทายถูกหมดทุกข้อเลย!';
  } else if (percentage >= 70) {
    praise = 'ยอดเยี่ยมมากเลย! สายตาเฉียบแหลมจริงๆ!';
  }

  useEffect(() => {
    // Play victory sound
    soundManager.playVictory();

    // Speak praise
    soundManager.speak(`${praise} ได้คะแนน ${score} เต็ม ${totalQuestions}`);

    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#facc15'],
      });
    } catch {
      // Fallback
    }
  }, [praise, score, totalQuestions]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-amber-300 text-center flex flex-col items-center">
        {/* Top Trophy & Mascot */}
        <div className="relative mb-3">
          <div className="w-32 h-32 md:w-36 md:h-36">
            <MascotIllustration size="100%" mood="celebrating" />
          </div>
          <div className="absolute -top-3 -right-2 bg-amber-400 p-2.5 rounded-full border-2 border-white shadow-md animate-bounce">
            <Trophy className="w-6 h-6 text-amber-950" />
          </div>
        </div>

        {/* Header Title */}
        <h1 className="text-3xl md:text-4xl font-black text-amber-950 tracking-tight mb-2">
          ยินดีด้วยจ้า! จบเกมแล้ว 🎉
        </h1>

        {/* Cheerful compliment text */}
        <p className="text-base md:text-lg font-bold text-amber-800 max-w-md mx-auto mb-4">
          {praise}
        </p>

        {/* Star Rating Display */}
        <div className="flex items-center justify-center gap-3 my-3">
          {[1, 2, 3].map((starIndex) => {
            const isEarned = starIndex <= starCount;
            return (
              <div
                key={starIndex}
                className={`p-2 rounded-2xl transition-transform duration-300 ${
                  isEarned
                    ? 'scale-110 text-amber-400 animate-pulse'
                    : 'opacity-30 text-stone-300 scale-90'
                }`}
              >
                <Star
                  className={`w-12 h-12 md:w-16 md:h-16 ${
                    isEarned ? 'fill-amber-400 text-amber-500' : 'text-stone-300'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Score Box */}
        <div className="w-full max-w-sm bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 my-3 flex items-center justify-around">
          <div className="flex flex-col items-center">
            <span className="text-xs text-amber-700 font-bold">ตอบถูกทั้งหมด</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl md:text-4xl font-black text-emerald-600 tabular-nums">
                {score}
              </span>
              <span className="text-sm font-bold text-stone-500">/ {totalQuestions}</span>
            </div>
          </div>

          <div className="h-10 w-[2px] bg-amber-200" />

          <div className="flex flex-col items-center">
            <span className="text-xs text-amber-700 font-bold">ความแม่นยำ</span>
            <span className="text-3xl md:text-4xl font-black text-amber-600 tabular-nums">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-sm space-y-2.5 mt-4">
          {/* Play Again */}
          <button
            onClick={() => {
              soundManager.playPop();
              onPlayAgain();
            }}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-lg md:text-xl shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer border-b-4 border-emerald-700"
          >
            <RotateCcw className="w-6 h-6" />
            <span>เล่นอีกครั้ง</span>
          </button>

          {/* Go Home */}
          <button
            onClick={() => {
              soundManager.playPop();
              onGoHome();
            }}
            className="w-full py-3.5 px-6 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-base border-2 border-amber-300 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-5 h-5 text-amber-700" />
            <span>กลับหน้าหลัก</span>
          </button>

          {/* Explore Gallery */}
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenGallery();
            }}
            className="w-full py-2.5 px-6 rounded-2xl bg-transparent hover:bg-stone-100 text-stone-600 font-bold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-stone-500" />
            <span>ดูสมุดสำรวจเงาทั้งหมด</span>
          </button>
        </div>
      </div>
    </div>
  );
};
