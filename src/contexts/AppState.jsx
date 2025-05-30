import { atom } from "recoil";

export const modalTypeState = atom({
  key: "modalTypeState",
  default: null,
});

export const clickedRestaurantInfoState = atom({
  key: "clickedRestaurantInfoState",
  default: null,
});

export const restaurantsState = atom({
  key: "restaurantsState",
  default: [],
});
