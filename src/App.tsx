/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { GameHeader } from './components/GameHeader';
import { HomeScreen } from './components/HomeScreen';
import { PlayScreen } from './components/PlayScreen';
import { SummaryScreen } from './components/SummaryScreen';
import { CardGalleryModal } from './components/CardGalleryModal';
import { CategoryId, DifficultyLevel, GameState, Question } from './types/game';
import { generateQuestions } from './utils/gameLogic';
import { soundManager } from './utils/audio';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('HOME');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('easy');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundManager.isMuted());

  // Game session state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Toggle Mute
  const handleToggleMute = () => {
    const nextMuted = soundManager.toggleMute();
    setIsMuted(nextMuted);
  };

  // Start Game
  const handleStartGame = () => {
    const newQuestions = generateQuestions(selectedCategory, selectedDifficulty, 10);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setGameState('PLAYING');
  };

  // Correct Answer
  const handleAnswerCorrect = () => {
    setScore((prev) => prev + 1);
    setStreak((prev) => prev + 1);
  };

  // Next Question
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState('SUMMARY');
    }
  };

  // Play Again
  const handlePlayAgain = () => {
    handleStartGame();
  };

  // Return to Home
  const handleGoHome = () => {
    setGameState('HOME');
    setScore(0);
    setStreak(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100/60 via-sky-50/70 to-emerald-50/50 flex flex-col font-['Mali',sans-serif] text-slate-800">
      {/* Background Decorative Soft Cloud Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-8 left-8 w-40 h-20 bg-white rounded-full blur-xs" />
        <div className="absolute top-16 right-12 w-56 h-28 bg-white rounded-full blur-xs" />
        <div className="absolute bottom-12 left-1/4 w-72 h-32 bg-white rounded-full blur-xs" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Navigation & Status Header */}
        <GameHeader
          score={score}
          totalQuestions={questions.length}
          currentQuestionIndex={gameState === 'PLAYING' ? currentQuestionIndex : undefined}
          streak={streak}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onGoHome={handleGoHome}
          showHomeButton={gameState !== 'HOME'}
          showScore={gameState === 'PLAYING'}
        />

        {/* Main Content Area */}
        <main className="flex-1 flex items-center justify-center p-2 sm:p-4">
          {gameState === 'HOME' && (
            <HomeScreen
              selectedCategory={selectedCategory}
              selectedDifficulty={selectedDifficulty}
              onSelectCategory={setSelectedCategory}
              onSelectDifficulty={setSelectedDifficulty}
              onStartGame={handleStartGame}
              onOpenGallery={() => setIsGalleryOpen(true)}
            />
          )}

          {gameState === 'PLAYING' && questions.length > 0 && (
            <PlayScreen
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              difficulty={selectedDifficulty}
              score={score}
              onAnswerCorrect={handleAnswerCorrect}
              onNextQuestion={handleNextQuestion}
            />
          )}

          {gameState === 'SUMMARY' && (
            <SummaryScreen
              score={score}
              totalQuestions={questions.length}
              onPlayAgain={handlePlayAgain}
              onGoHome={handleGoHome}
              onOpenGallery={() => setIsGalleryOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Educational Gallery Modal */}
      <CardGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
}
