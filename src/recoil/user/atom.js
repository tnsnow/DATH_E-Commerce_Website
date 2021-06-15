import { atom } from "recoil";

export const currentUser = atom({
  key: "currentUser",
  default: {},
});

export const profileUser = atom({
  key: "profileUser",
  default: {},
});

export const isLogin = atom({
  key: "isLogin",
  default: false,
});
