import React from 'react';
import { Sparkles, Play, BookOpen, Volume2 } from 'lucide-react';
import { CategoryId, DifficultyLevel } from '../types/game';
import { CATEGORIES, DIFFICULTIES } from '../data/items';
import { MascotIllustration } from './illustrations/MascotIllustration';
import { soundManager } from '../utils/audio';

interface HomeScreenProps {
  selectedCategory: CategoryId;
  selectedDifficulty: DifficultyLevel;
  onSelectCategory: (cat: CategoryId) => void;
  onSelectDifficulty: (diff: DifficultyLevel) => void;
  onStartGame: () => void;
  onOpenGallery: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  selectedCategory,
  selectedDifficulty,
  onSelectCategory,
  onSelectDifficulty,
  onStartGame,
  onOpenGallery,
}) => {
  const handleMascotClick = () => {
    soundManager.playPop();
    soundManager.speak('สวัสดีจ้า มาเป็นนักสืบทายเงาปริศนากันเถอะ!');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 flex flex-col items-center">
      {/* Title Lockup */}
      <div className="text-center mb-4 relative">
        {/* Playful Floating Badges */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-800 font-bold text-sm md:text-base mb-2 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
          <span>เกมการศึกษาเสริมทักษะสำหรับเด็กปฐมวัย</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-amber-900 tracking-tight drop-shadow-sm flex items-center justify-center gap-2">
          <span>เกม</span>
          <span className="text-rose-500">ทายเงา</span>
          <span className="text-amber-500">ปริศนา</span>
        </h1>
        <p className="text-sm md:text-lg text-amber-800/80 font-bold mt-1">
          สังเกตเงาสีดำ แล้วทายซิว่าเป็นภาพของอะไรเอ่ย?
        </p>
      </div>

      {/* Mascot & Interactive Voice Bubble */}
      <div className="relative mb-5 flex flex-col items-center cursor-pointer group" onClick={handleMascotClick}>
        {/* Voice bubble */}
        <div className="absolute -top-7 md:-top-9 bg-white px-4 py-1.5 rounded-2xl border-2 border-amber-300 shadow-md flex items-center gap-2 text-amber-900 font-bold text-xs md:text-sm animate-bounce">
          <Volume2 className="w-4 h-4 text-rose-500 shrink-0" />
          <span>แตะที่ตัวหนูเพื่อฟังเสียงนะ!</span>
        </div>

        <div className="w-36 h-36 md:w-44 md:h-44 transition-transform group-hover:scale-105 active:scale-95 duration-200">
          <MascotIllustration size="100%" mood="happy" />
        </div>
      </div>

      {/* Main Options Container */}
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-3xl p-5 md:p-6 shadow-xl border-4 border-amber-200 space-y-5">
        {/* Section 1: Categories */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <h2 className="text-base md:text-lg font-black text-amber-950 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center text-xs font-black">
                1
              </span>
              <span>เลือกหมวดหมู่ที่ต้องการเล่น</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundManager.playPop();
                    onSelectCategory(cat.id);
                    soundManager.speak(cat.name);
                  }}
                  className={`p-3 rounded-2xl border-3 text-center transition-all cursor-pointer font-bold flex flex-col items-center justify-center gap-1 active:scale-95 ${
                    isSelected
                      ? 'bg-amber-100 border-amber-500 text-amber-950 shadow-md ring-2 ring-amber-300 ring-offset-1 scale-[1.02]'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300 hover:bg-amber-50/50'
                  }`}
                >
                  <span className="text-base md:text-lg font-black leading-tight">
                    {cat.name}
                  </span>
                  <span className="text-xs text-amber-700/80 font-bold">
                    {cat.count} ภาพ
                  </span>
                  {isSelected && (
                    <span className="text-[11px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">
                      เลือกแล้ว
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Difficulty Levels */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <h2 className="text-base md:text-lg font-black text-amber-950 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center text-xs font-black">
                2
              </span>
              <span>เลือกระดับความสนุก</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {DIFFICULTIES.map((diff) => {
              const isSelected = selectedDifficulty === diff.id;
              return (
                <button
                  key={diff.id}
                  onClick={() => {
                    soundManager.playPop();
                    onSelectDifficulty(diff.id);
                    soundManager.speak(diff.name);
                  }}
                  className={`p-3.5 rounded-2xl border-3 text-left transition-all cursor-pointer font-bold flex flex-col gap-1 active:scale-95 ${
                    isSelected
                      ? 'bg-rose-50 border-rose-500 text-rose-950 shadow-md ring-2 ring-rose-300 ring-offset-1 scale-[1.02]'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-rose-300 hover:bg-rose-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-base md:text-lg font-black text-rose-900">
                      {diff.name}
                    </span>
                    <span className="text-xs text-amber-500">
                      {'⭐'.repeat(diff.stars)}
                    </span>
                  </div>
                  <span className="text-xs text-stone-500 leading-tight">
                    {diff.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Start Button */}
          <button
            onClick={() => {
              soundManager.playPop();
              onStartGame();
            }}
            className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-xl md:text-2xl shadow-lg hover:shadow-xl active:scale-98 transition-all flex items-center justify-center gap-3 border-b-4 border-emerald-700 cursor-pointer"
          >
            <Play className="w-7 h-7 fill-white" />
            <span>เริ่มเล่นเกมเลย!</span>
          </button>

          {/* Flashcard Album / Gallery */}
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenGallery();
            }}
            className="py-4 px-5 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-sm md:text-base border-2 border-amber-300 shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-amber-700" />
            <span>สมุดสำรวจเงา</span>
          </button>
        </div>
      </div>
    </div>
  );
};
