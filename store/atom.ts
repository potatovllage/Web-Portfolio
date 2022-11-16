import { atom } from "recoil";

export const MenuState = atom({
  key: "menuState",
  default: {
    stateValue: false,
  },
});
