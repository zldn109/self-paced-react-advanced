import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext.jsx";

function MainContent() {
  const { handleClickedRestaurantInfo, restaurants } = useContext(AppContext);

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
        onRestaurantClick={handleClickedRestaurantInfo}
      />
    </>
  );
}

export default MainContent;
