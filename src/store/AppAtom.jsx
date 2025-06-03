import { atom, selector } from "recoil";

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

export const categoryState = atom({
  key: "categoryState",
  default: "전체",
});

export const filteredRestaurantsState = selector({
  key: "filterdRestaurantsState",
  get: ({ get }) => {
    const all = get(restaurantsState);
    const category = get(categoryState);
    if (category === "전체") return all;
    return all.filter((r) => r.category === category);
  },
});
