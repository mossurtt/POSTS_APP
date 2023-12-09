import { ReactNode } from 'react';

export type Scores = {
  [postId: number]: { posScore: number; negScore: number };
};

export type ScoreContextType = {
  scores: Scores;
  addScore: (postId: number, isPositive: boolean) => void;
  removeScore: (postId: number, isPositive: boolean) => void;
};

export type ScoreProviderProps = {
  children: ReactNode;
};
