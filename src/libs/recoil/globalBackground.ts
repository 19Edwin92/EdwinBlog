import { atom } from "recoil";
export const globalBackground = atom<string>({
  key: 'globalBackground',
  default: "#F6BB43",
});