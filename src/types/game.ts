export type CategoryId = 'all' | 'animals' | 'objects' | 'nature';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GameItem {
  id: string;
  name: string; // Thai name e.g. "แมว"
  englishName: string; // "Cat"
  category: 'animals' | 'objects' | 'nature';
  hint: string; // Thai clue e.g. "สัตว์เลี้ยงตัวนุ่ม ชอบร้องเหมียวๆ"
  funFact: string; // Fun educational fact for kids
  soundDescription?: string; // e.g. "เหมียว เหมียว"
}

export interface Question {
  target: GameItem;
  options: GameItem[];
}

export type GameState = 'HOME' | 'PLAYING' | 'SUMMARY' | 'GALLERY';

export interface GameStats {
  score: number;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  streak: number;
  bestStreak: number;
  starsEarned: number;
}
