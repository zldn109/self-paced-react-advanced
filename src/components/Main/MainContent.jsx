import { useState } from "react";
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";

function MainContent({ onClickedDetailModal, restaurants }) {
  const [category, setCategory] = useState("전체");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

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
      <RestaurantList
        restaurants={filteredRestaurants}
        onRestaurantClick={onClickedDetailModal}
      />
    </>
  );
}

export default MainContent;
