import React from 'react';
import { AnimalIllustration } from './AnimalIllustrations';
import { ObjectIllustration } from './ObjectIllustrations';
import { NatureIllustration } from './NatureIllustrations';

interface GameIllustrationProps {
  id: string;
  isSilhouette?: boolean;
  className?: string;
  size?: number | string;
}

const ANIMAL_IDS = new Set([
  'cat', 'dog', 'elephant', 'rabbit', 'fish', 'bird', 'butterfly', 'turtle', 'duck', 'horse',
  'lion', 'tiger', 'monkey', 'giraffe', 'zebra', 'frog', 'snake', 'crab', 'dolphin', 'owl',
  'penguin', 'chicken', 'pig', 'cow', 'sheep', 'goat', 'deer', 'squirrel', 'panda', 'crocodile'
]);

const OBJECT_IDS = new Set([
  'ball', 'car', 'bicycle', 'pencil', 'book', 'umbrella', 'cup', 'spoon', 'scissors', 'clock',
  'schoolbag', 'shoes', 'hat', 'glasses', 'toothbrush', 'chair', 'table', 'bed', 'lamp', 'phone',
  'television', 'fan', 'key', 'balloon', 'kite', 'teddy', 'airplane', 'train', 'bus', 'water_bottle'
]);

export const GameIllustration: React.FC<GameIllustrationProps> = ({
  id,
  isSilhouette = false,
  className = '',
  size = '100%',
}) => {
  const renderContent = () => {
    if (ANIMAL_IDS.has(id)) {
      return <AnimalIllustration id={id} isSilhouette={isSilhouette} />;
    }
    if (OBJECT_IDS.has(id)) {
      return <ObjectIllustration id={id} isSilhouette={isSilhouette} />;
    }
    return <NatureIllustration id={id} isSilhouette={isSilhouette} />;
  };

  return (
    <svg
      viewBox="0 0 160 160"
      width={size}
      height={size}
      className={`transition-transform duration-200 select-none ${className}`}
      aria-label={id}
    >
      {renderContent()}
    </svg>
  );
};
