import { AppContext } from "../../contexts/AppContext.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import { useContext, useState } from "react";

function MainContent() {
  const [category, setCategory] = useState("전체");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const { restaurants } = useContext(AppContext);
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
