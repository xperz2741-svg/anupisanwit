import { GAME_ITEMS } from '../data/items';
import { CategoryId, DifficultyLevel, GameItem, Question } from '../types/game';

// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateQuestions(
  categoryId: CategoryId,
  difficulty: DifficultyLevel,
  count: number = 10
): Question[] {
  // Filter pool by category
  const pool = categoryId === 'all'
    ? GAME_ITEMS
    : GAME_ITEMS.filter((item) => item.category === categoryId);

  // Determine option count based on difficulty
  const optionCount = difficulty === 'easy' ? 3 : 4;

  // Shuffle pool to pick questions
  const shuffledTargets = shuffleArray(pool);
  const selectedTargets = shuffledTargets.slice(0, Math.min(count, shuffledTargets.length));

  return selectedTargets.map((target) => {
    // Collect potential distractors (must NOT include target)
    // Prefer distractors from same category first if available, else from overall pool
    const sameCatPool = pool.filter((item) => item.id !== target.id);
    const altPool = GAME_ITEMS.filter((item) => item.id !== target.id);

    const neededDistractors = optionCount - 1;
    let chosenDistractors: GameItem[] = [];

    if (sameCatPool.length >= neededDistractors) {
      chosenDistractors = shuffleArray(sameCatPool).slice(0, neededDistractors);
    } else {
      // Combine same category and then others to reach needed distractors
      const otherPool = altPool.filter((item) => !sameCatPool.some((s) => s.id === item.id));
      chosenDistractors = [
        ...sameCatPool,
        ...shuffleArray(otherPool).slice(0, neededDistractors - sameCatPool.length)
      ];
    }

    // Combine target with distractors and shuffle positions
    const options = shuffleArray([target, ...chosenDistractors]);

    return {
      target,
      options
    };
  });
}
