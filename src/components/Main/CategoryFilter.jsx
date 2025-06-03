import { categories } from "../../data/data.js";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { categoryState } from "../../store/AppAtom.jsx";

const RestaurantFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;

  select {
    height: 44px;
    min-width: 125px;

    border: 1px solid #d0d5dd;
    border-radius: 8px;
    background: transparent;

    font-size: 16px;
  }
`;

const RestaurantFilter = styled.select`
  padding: 8px;
`;

function CategoryFilter() {
  const [category, setCategory] = useRecoilState(categoryState);
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <RestaurantFilterContainer>
      <RestaurantFilter
        name="category"
        id="category-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(event) => handleCategoryChange(event.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.value}>
            {cat.value}
          </option>
        ))}
      </RestaurantFilter>
    </RestaurantFilterContainer>
  );
}
export default CategoryFilter;
