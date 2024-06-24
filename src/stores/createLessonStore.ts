import { units } from "~/utils/units";
import type { BoundStateCreator } from "~/hooks/useBoundStore";
import { updateUserCurrentLearning } from "~/apis/userCurrentLearning";
export type LessonSlice = {
  lessonsCompleted: number;
  increaseLessonsCompleted: (email: string, by?: number) => void;
  jumpToUnit: (unitNumber: number) => void;
  setLessonsCompleted: (value: number) => void;
};

export const createLessonSlice: BoundStateCreator<LessonSlice> = (set) => ({
  lessonsCompleted: 0,
  setLessonsCompleted: (value: number) => set({ lessonsCompleted: value }),
  increaseLessonsCompleted: (email: string, by = 1) => {
    set((state) => {
      const newLessonsCompleted = state.lessonsCompleted + by;
      state.setLessonsCompleted(newLessonsCompleted);
      updateUserCurrentLearning(email, newLessonsCompleted).catch((error) => {
        console.error("Failed to update current learning:", error);
      });
      return { lessonsCompleted: newLessonsCompleted };
    });
  },

  jumpToUnit: (unitNumber: number) =>
    set(({ lessonsCompleted }) => {
      const lessonsPerTile = 4;
      const totalLessonsToJumpToUnit = units
        .filter((unit) => unit.unitNumber < unitNumber)
        .map((unit) => unit.tiles.length * lessonsPerTile)
        .reduce((a, b) => a + b, 0);
      return {
        lessonsCompleted: Math.max(lessonsCompleted, totalLessonsToJumpToUnit),
      };
    }),
});
