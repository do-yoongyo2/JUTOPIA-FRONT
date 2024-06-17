import dayjs from "dayjs";
import type { BoundStateCreator } from "~/hooks/useBoundStore";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

export type UserSlice = {
  name: string;
  email: string;
  joinedAt: dayjs.Dayjs;
  loggedIn: boolean;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  logIn: (flag: boolean) => void;
  logOut: () => void;
};

export const createUserSlice: BoundStateCreator<UserSlice> = (set) => ({
  name: "",
  email: "",
  joinedAt: dayjs(),
  loggedIn: false,
  setName: (name: string) => set(() => ({ name })),
  setEmail: (email: string) => set(() => ({ email })),
  logIn: (flag: boolean) => set(() => ({ loggedIn: flag })),
  logOut: () => set(() => ({ name: "", username: "", loggedIn: false })),
});
