import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Lightbulb, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { GameItem, Question, DifficultyLevel } from '../types/game';
import { GameIllustration } from './illustrations/GameIllustration';
import { soundManager } from '../utils/audio';

interface PlayScreenProps {
  questions: Question[];
  currentQuestionIndex: number;
  difficulty: DifficultyLevel;
  onAnswerCorrect: () => void;
  onNextQuestion: () => void;
  score: number;
}

export const PlayScreen: React.FC<PlayScreenProps> = ({
  questions,
  currentQuestionIndex,
  difficulty: _difficulty,
  onAnswerCorrect,
  onNextQuestion,
  score: _score,
}) => {
  const currentQ = questions[currentQuestionIndex];
  const target = currentQ?.target;
  const options = currentQ?.options || [];

  // State
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
  const [wrongOptionIds, setWrongOptionIds] = useState<string[]>([]);
  const [eliminatedByHintIds, setEliminatedByHintIds] = useState<string[]>([]);
  const [showHintBubble, setShowHintBubble] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Reset state on question change
  useEffect(() => {
    setIsAnsweredCorrectly(false);
    setWrongOptionIds([]);
    setEliminatedByHintIds([]);
    setShowHintBubble(false);
    setFeedbackMessage(null);

    // Speak prompt on new question
    const questionText = 'ทายซิ นี่คือเงาของอะไรเอ่ย?';
    soundManager.speak(questionText);
  }, [currentQuestionIndex]);

  if (!target) return null;

  // Speak question
  const handleReplayQuestion = () => {
    soundManager.playPop();
    const catLabel =
      target.category === 'animals'
        ? 'สัตว์'
        : target.category === 'objects'
        ? 'สิ่งของ'
        : 'ธรรมชาติและสิ่งรอบตัว';
    const prompt = `ทายซิ นี่คือเงาของอะไรเอ่ย? หมวด${catLabel}`;
    soundManager.speak(prompt);
  };

  // Give hint
  const handleUseHint = () => {
    soundManager.playHint();
    setShowHintBubble(true);
    soundManager.speak(`คำใบ้จ้า: ${target.hint}`);

    // If options >= 3, eliminate 1 wrong choice to help the child
    if (eliminatedByHintIds.length === 0) {
      const wrongDistractors = options.filter(
        (o) => o.id !== target.id && !wrongOptionIds.includes(o.id)
      );
      if (wrongDistractors.length > 0) {
        const toEliminate = wrongDistractors[0];
        setEliminatedByHintIds([toEliminate.id]);
      }
    }
  };

  // Option selection
  const handleSelectOption = (item: GameItem) => {
    // Prevent double clicking once already answered correctly
    if (isAnsweredCorrectly) return;

    // Prevent clicking already wrong or eliminated options
    if (wrongOptionIds.includes(item.id) || eliminatedByHintIds.includes(item.id)) {
      return;
    }

    if (item.id === target.id) {
      // CORRECT ANSWER!
      setIsAnsweredCorrectly(true);
      setFeedbackMessage(`เก่งมาก! ถูกต้องแล้ว นี่คือ "${target.name}"`);

      // Sound & Speech
      soundManager.playCorrect();
      soundManager.speak(`เก่งมาก! ถูกต้องแล้ว นี่คือ ${target.name}`);

      // Confetti burst
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#facc15'],
        });
      } catch {
        // Fallback
      }

      // Notify parent to increment score
      onAnswerCorrect();
    } else {
      // INCORRECT ANSWER (Encouraging, no penalty)
      soundManager.playWrong();
      setWrongOptionIds((prev) => [...prev, item.id]);
      setFeedbackMessage('ยังไม่ใช่จ้า ลองอีกครั้งนะเด็กๆ!');
      soundManager.speak('ยังไม่ใช่จ้า ลองเลือกอีกครั้งนะ');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-2 flex flex-col items-center">
      {/* Progress Bar & Header Status */}
      <div className="w-full max-w-2xl mb-3">
        <div className="flex items-center justify-between text-xs md:text-sm font-bold text-amber-900 mb-1.5 px-1">
          <div className="flex items-center gap-1.5">
            <span>ความคืบหน้า</span>
            <span className="text-amber-700 font-extrabold tabular-nums">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-bold bg-amber-100/90 px-3 py-0.5 rounded-full border border-amber-300">
            <span>ไม่มีเวลาจำกัด เล่นสบายๆ ได้เลยนะจ๊ะ</span>
          </div>
        </div>

        {/* Outer bar */}
        <div className="w-full h-3.5 bg-amber-100/90 rounded-full border-2 border-amber-200 overflow-hidden shadow-inner p-0.5">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-300 shadow-sm"
            style={{
              width: `${((currentQuestionIndex + (isAnsweredCorrectly ? 1 : 0)) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Main Game Stage Card */}
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 shadow-xl border-4 border-amber-200 flex flex-col items-center relative">
        {/* Question Prompt Bar */}
        <div className="w-full flex items-center justify-between gap-2 mb-3 bg-amber-50/80 px-4 py-2 rounded-2xl border-2 border-amber-200/80">
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base font-black text-amber-950">
              {isAnsweredCorrectly ? 'ภาพเฉลยปริศนา:' : 'ทายซิ นี่คือเงาของอะไรเอ่ย?'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Replay Question Audio */}
            <button
              onClick={handleReplayQuestion}
              aria-label="ฟังคำถามซ้ำ"
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white text-amber-800 hover:bg-amber-100 border border-amber-300 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs"
              title="ฟังคำถามซ้ำ"
            >
              <Volume2 className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">ฟังคำถาม</span>
            </button>

            {/* Hint Button */}
            {!isAnsweredCorrectly && (
              <button
                onClick={handleUseHint}
                aria-label="ขอคำใบ้"
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-900 border border-amber-400 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs"
                title="ขอคำใบ้"
              >
                <Lightbulb className="w-4 h-4 text-amber-700" />
                <span>คำใบ้</span>
              </button>
            )}
          </div>
        </div>

        {/* Hint Bubble if requested */}
        {showHintBubble && !isAnsweredCorrectly && (
          <div className="w-full mb-3 bg-amber-100/90 border-2 border-amber-300 rounded-2xl p-3 flex items-start gap-2.5 text-xs md:text-sm text-amber-950 font-bold animate-fadeIn">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="text-amber-700 font-black">คำใบ้: </span>
              <span>{target.hint}</span>
              {eliminatedByHintIds.length > 0 && (
                <div className="text-amber-800 text-xs font-normal mt-0.5">
                  ✨ ตัดตัวเลือกที่ไม่ใช่ออกให้ 1 ข้อแล้วนะจ๊ะ!
                </div>
              )}
            </div>
          </div>
        )}

        {/* Central Display: Crisp Silhouette or Revealed Color */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 my-2 flex items-center justify-center">
          {/* Spotlight background pedestal */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ${
              isAnsweredCorrectly
                ? 'bg-gradient-to-br from-emerald-100 to-amber-100 scale-105 border-4 border-emerald-300'
                : 'bg-gradient-to-b from-stone-100 to-amber-50/70 border-4 border-stone-200/80 shadow-inner'
            }`}
          />

          {/* Sparkles on correct */}
          {isAnsweredCorrectly && (
            <div className="absolute -top-3 -right-2 text-amber-400 animate-bounce">
              <Star className="w-8 h-8 fill-amber-400" />
            </div>
          )}

          {/* SVG Illustration: Shows crisp black silhouette or colorful revealed illustration */}
          <div
            className={`relative z-10 w-40 h-40 md:w-48 md:h-48 transition-all duration-300 ${
              isAnsweredCorrectly
                ? 'scale-110 drop-shadow-lg animate-pulse'
                : 'hover:scale-102 drop-shadow-sm'
            }`}
          >
            <GameIllustration
              id={target.id}
              isSilhouette={!isAnsweredCorrectly}
              size="100%"
            />
          </div>
        </div>

        {/* Feedback message banner */}
        {feedbackMessage && (
          <div
            className={`w-full text-center py-2 px-4 rounded-2xl font-black text-sm md:text-base my-2 transition-all flex items-center justify-center gap-2 ${
              isAnsweredCorrectly
                ? 'bg-emerald-100 border-2 border-emerald-400 text-emerald-900 shadow-sm'
                : 'bg-rose-100 border-2 border-rose-300 text-rose-800'
            }`}
          >
            {isAnsweredCorrectly && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
            <span>{feedbackMessage}</span>
          </div>
        )}

        {/* Fun Educational Fact when revealed */}
        {isAnsweredCorrectly && (
          <div className="w-full bg-amber-50 rounded-2xl p-3 border border-amber-200 text-xs md:text-sm text-amber-900 font-medium text-center my-1">
            <span className="font-bold text-amber-700">เกร็ดความรู้: </span>
            <span>{target.funFact}</span>
          </div>
        )}

        {/* Options Grid */}
        <div className="w-full mt-3">
          <div className="text-center mb-2">
            <span className="text-xs md:text-sm font-bold text-stone-500">
              {isAnsweredCorrectly
                ? '✨ กดปุ่ม "ข้อต่อไป" ด้านล่างเพื่อเล่นต่อได้เลย'
                : 'แตะเลือกภาพที่ตรงกับเงาด้านบน:'}
            </span>
          </div>

          <div
            className={`grid gap-3 ${
              options.length === 3
                ? 'grid-cols-3'
                : 'grid-cols-2 sm:grid-cols-4'
            }`}
          >
            {options.map((item) => {
              const isWrong = wrongOptionIds.includes(item.id);
              const isEliminated = eliminatedByHintIds.includes(item.id);
              const isCorrectTarget = isAnsweredCorrectly && item.id === target.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectOption(item)}
                  disabled={isAnsweredCorrectly || isWrong || isEliminated}
                  className={`relative p-3 sm:p-4 rounded-2xl border-3 flex flex-col items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none ${
                    isCorrectTarget
                      ? 'bg-emerald-50 border-emerald-500 ring-4 ring-emerald-300 shadow-md scale-105'
                      : isWrong || isEliminated
                      ? 'opacity-35 bg-stone-100 border-stone-200 cursor-not-allowed scale-95 grayscale'
                      : 'bg-white hover:bg-amber-50/50 border-amber-200 hover:border-amber-400 shadow-md hover:shadow-lg active:scale-95'
                  }`}
                >
                  {/* Option Full-Color Illustration */}
                  <div className="w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center pointer-events-none">
                    <GameIllustration
                      id={item.id}
                      isSilhouette={false}
                      size="100%"
                    />
                  </div>

                  {/* Thai Name Label: Only shown AFTER answered correctly to avoid spoiling before choice */}
                  <div className="min-h-[22px] flex items-center justify-center">
                    {isCorrectTarget ? (
                      <span className="text-sm sm:text-base font-black text-emerald-700 animate-fadeIn">
                        {item.name}
                      </span>
                    ) : isAnsweredCorrectly ? (
                      <span className="text-xs sm:text-sm font-medium text-stone-500 animate-fadeIn">
                        {item.name}
                      </span>
                    ) : (
                      <span className="text-xs text-amber-500 font-bold">
                        แตะเพื่อทาย
                      </span>
                    )}
                  </div>

                  {/* Wrong feedback marker */}
                  {isWrong && (
                    <span className="absolute top-2 right-2 text-rose-500 text-xs font-black bg-rose-100 px-1.5 py-0.5 rounded-full">
                      ✕
                    </span>
                  )}
                  {/* Hint eliminated marker */}
                  {isEliminated && !isWrong && (
                    <span className="absolute top-2 right-2 text-amber-600 text-[10px] font-bold bg-amber-100 px-1.5 py-0.5 rounded-full">
                      ตัดออก
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next Question Button (Visible when answered correctly) */}
        {isAnsweredCorrectly && (
          <div className="w-full mt-4 flex justify-center">
            <button
              onClick={() => {
                soundManager.playPop();
                onNextQuestion();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-lg md:text-xl shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-b-4 border-emerald-700 animate-bounce"
            >
              <span>ข้อต่อไป</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
