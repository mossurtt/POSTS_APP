import {
  createContext, useContext, useMemo, useState,
} from 'react';
import {
  ScoreContextType,
  ScoreProviderProps,
  Scores,
} from './ScoreContext.types';

const ScoreContext = createContext<ScoreContextType>({
  scores: {},
  addScore() {},
  removeScore() {},
});

export function ScoreProvider({ children }: ScoreProviderProps) {
  const [scores, setScores] = useState<Scores>({});

  const addScore = (postId: number, isPositive: boolean) => {
    console.log('postId', postId);
    console.log('isPositive', isPositive);
    setScores((prevScores) => {
      const newScores = prevScores;
      if (!newScores[postId]) {
        newScores[postId] = { posScore: 0, negScore: 0 };
      }
      if (isPositive) {
        newScores[postId].posScore += 1;
      } else {
        newScores[postId].negScore += 1;
      }

      return newScores;
    });
  };

  const removeScore = (postId: number, isPositive: boolean) => {
    setScores((prevScores) => {
      const newScores = prevScores;
      if (!newScores[postId]) {
        newScores[postId] = { posScore: 0, negScore: 0 };
      }
      if (isPositive) {
        newScores[postId].posScore -= 1;
      } else {
        newScores[postId].negScore -= 1;
      }

      return newScores;
    });
  };

  const memorizedValue = useMemo(
    () => ({
      scores,
      addScore,
      removeScore,
    }),
    [scores],
  );

  return (
    <ScoreContext.Provider value={memorizedValue}>
      {children}
    </ScoreContext.Provider>
  );
}

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return useContext(ScoreContext);
};
