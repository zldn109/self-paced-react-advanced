import { useRecoilValue } from "recoil";
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import { useState } from "react";
import { restaurantsState } from "../../contexts/AppState.jsx";

function MainContent() {
  const [category, setCategory] = useState("전체");
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const restaurants = useRecoilValue(restaurantsState);
  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <CategoryFilter
        category={category}
        onChangeCategory={handleCategoryChange}
      />
      <RestaurantList restaurants={filteredRestaurants} />
    </>
  );
}

export default MainContent;
