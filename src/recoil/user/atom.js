import { atom } from "recoil";

const currentUser = atom({
  key: "currentUser",
  default: {},
});
export default currentUser;
