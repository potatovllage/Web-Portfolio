import { atom } from "recoil";

export const MenuState = atom({
  key: "menuState",
  default: {
    typeValue: "About",
    stateValue: false,
  },
});
