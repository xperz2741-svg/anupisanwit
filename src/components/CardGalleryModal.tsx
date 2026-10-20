import React, { useState } from 'react';
import { X, Volume2, Sparkles, Filter } from 'lucide-react';
import { GAME_ITEMS, CATEGORIES } from '../data/items';
import { CategoryId, GameItem } from '../types/game';
import { GameIllustration } from './illustrations/GameIllustration';
import { soundManager } from '../utils/audio';

interface CardGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CardGalleryModal: React.FC<CardGalleryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryId>('all');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const filteredItems = selectedFilter === 'all'
    ? GAME_ITEMS
    : GAME_ITEMS.filter((item) => item.category === selectedFilter);

  const toggleReveal = (id: string) => {
    soundManager.playPop();
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSpeakItem = (item: GameItem, e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playPop();
    soundManager.speak(`${item.name}. ${item.hint}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-4xl max-h-[92vh] bg-amber-50 rounded-3xl border-4 border-amber-300 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-white border-b-2 border-amber-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-100 rounded-2xl">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-amber-950">
                สมุดสำรวจเงาปริศนา
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-bold">
                แตะที่การ์ดเพื่อสลับดูภาพสีหรือเงาสีดำ ({filteredItems.length} ภาพ)
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="p-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer active:scale-95"
            aria-label="ปิด"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="px-4 py-3 bg-amber-100/50 border-b border-amber-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter className="w-4 h-4 text-amber-700 shrink-0" />
          {CATEGORIES.map((cat) => {
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundManager.playPop();
                  setSelectedFilter(cat.id);
                }}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-amber-100'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredItems.map((item) => {
            const isRevealed = !!revealedIds[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleReveal(item.id)}
                className={`relative p-3 rounded-2xl border-3 flex flex-col items-center justify-between text-center transition-all cursor-pointer select-none active:scale-95 shadow-sm hover:shadow-md ${
                  isRevealed
                    ? 'bg-white border-amber-300'
                    : 'bg-stone-50/90 border-stone-300 hover:border-amber-400'
                }`}
              >
                {/* Mode Tag */}
                <div className="w-full flex items-center justify-between text-[11px] font-bold mb-1">
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      isRevealed
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {isRevealed ? 'ภาพสี' : 'เงาสีดำ'}
                  </span>

                  <button
                    onClick={(e) => handleSpeakItem(item, e)}
                    className="p-1 rounded-lg hover:bg-amber-100 text-amber-700 cursor-pointer"
                    title="ฟังเสียง"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* SVG Image (Silhouette or Color) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center my-1">
                  <GameIllustration
                    id={item.id}
                    isSilhouette={!isRevealed}
                    size="100%"
                  />
                </div>

                {/* Thai Name */}
                <div className="mt-1">
                  <span className="text-base font-black text-amber-950 block">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-stone-400 block font-sans">
                    {item.englishName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
