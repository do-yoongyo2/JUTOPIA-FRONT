import type { StateCreator } from "zustand";
import { create } from "zustand";
import type { LessonSlice } from "~/stores/createLessonStore";
import { createLessonSlice } from "~/stores/createLessonStore";
import type { LingotSlice } from "~/stores/createLingotStore";
import { createLingotSlice } from "~/stores/createLingotStore";
import type { StreakSlice } from "~/stores/createStreakStore";
import { createStreakSlice } from "~/stores/createStreakStore";
import type { UserSlice } from "~/stores/createUserStore";
import { createUserSlice } from "~/stores/createUserStore";
import type { XpSlice } from "~/stores/createXpStore";
import { createXpSlice } from "~/stores/createXpStore";
import { persist } from "zustand/middleware";

type BoundState = LessonSlice & LingotSlice & StreakSlice & UserSlice & XpSlice;
//& UserSlice
export type BoundStateCreator<SliceState> = StateCreator<
  BoundState,
  [],
  [],
  SliceState
>;

export const useBoundStore = create<BoundState>((...args) => ({
  ...createLessonSlice(...args),
  ...createLingotSlice(...args),
  ...createStreakSlice(...args),
  ...createUserSlice(...args),
  ...createXpSlice(...args),
}));

// export const useBoundStore = create(
//   persist<BoundState>(
//     (...args) => ({
//       ...createLessonSlice(...args),
//       ...createLingotSlice(...args),
//       ...createStreakSlice(...args),
//       ...createUserSlice(...args),
//       ...createXpSlice(...args),
//     }),
//     { name: "bound-store" },
//   ),
// );
