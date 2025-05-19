import styled from "styled-components";
import { selectedCategories } from "../../data/data";

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

const Restaurant = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const RestaurantCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: var(--lighten-color);
`;

const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName = styled.h3`
  margin: 0;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

function RestaurantList({ restaurants, onRestaurantClick }) {
  return (
    <RestaurantListContainer>
      <ul>
        {restaurants.map((restaurant) => {
          const matchCategory = selectedCategories.find(
            (item) => item.category === restaurant.category
          );
          return (
            <Restaurant
              key={restaurant.id}
              onClick={() =>
                onRestaurantClick(restaurant.name, restaurant.description)
              }
            >
              <RestaurantCategory>
                <CategoryIcon
                  src={matchCategory.imgSrc}
                  alt={matchCategory.imgAlt}
                />
              </RestaurantCategory>
              <RestaurantInfo>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantDescription>
                  {restaurant.description}
                </RestaurantDescription>
              </RestaurantInfo>
            </Restaurant>
          );
        })}
      </ul>
    </RestaurantListContainer>
  );
}

export default RestaurantList;
