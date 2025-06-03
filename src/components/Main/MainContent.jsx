import { useRecoilValue, useRecoilState } from "recoil";
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import { useState } from "react";
import { restaurantsState } from "../../store/AppAtom.jsx";
import { categoryState } from "../../store/AppAtom.jsx";

function MainContent() {
  return (
    <>
      <CategoryFilter />
      <RestaurantList />
    </>
  );
}

export default MainContent;
