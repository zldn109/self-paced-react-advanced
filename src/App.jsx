import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  clickedRestaurantInfoState,
  modalTypeState,
  restaurantsState,
} from "./store/AppAtom";

function App() {
  const MODAL_TYPES = {
    ADD: "add",
    DETAIL: "detail",
  };
  Object.freeze(MODAL_TYPES);

  const [modalTypeToOpen, setModalTypeToOpen] = useRecoilState(modalTypeState);
  const handleCloseModal = () => setModalTypeToOpen(null);

  const [clickedRestaurantInfo, setClickedRestaurantInfo] = useRecoilState(
    clickedRestaurantInfoState
  );
  const handleClickedRestaurantInfo = (name, description) => {
    const restaurant = {
      name,
      description,
    };
    setClickedRestaurantInfo(restaurant);
    setModalTypeToOpen(MODAL_TYPES.DETAIL);
  };

  const setRestaurants = useSetRecoilState(restaurantsState);

  const fetchRestaurants = async () => {
    const response = await fetch("http://localhost:3000/restaurants");
    const data = await response.json();
    setRestaurants(data);
  };

  const addNewRestaurant = async (restaurant) => {
    const response = await fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restaurant),
    });
    const newRestaurant = await response.json();
    return newRestaurant;
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleUpdatedRestaurants = async (restaurant) => {
    const newRestaurant = await addNewRestaurant(restaurant);
    setRestaurants((prev) => [...prev, newRestaurant]);
  };
  return (
    <>
      <Header
        openAddRestaurantModal={() => setModalTypeToOpen(MODAL_TYPES.ADD)}
      />
      <main>
        <MainContent onClickedDetailModal={handleClickedRestaurantInfo} />
      </main>
      <aside>
        {modalTypeToOpen === "add" && (
          <AddRestaurantModal
            onSubmitRestaurant={handleUpdatedRestaurants}
            onCloseModal={handleCloseModal}
          />
        )}
        {modalTypeToOpen === "detail" && (
          <RestaurantDetailModal
            restaurantName={clickedRestaurantInfo.name}
            restaurantDescription={clickedRestaurantInfo.description}
            onCloseModal={handleCloseModal}
          />
        )}
      </aside>
    </>
  );
}

export default App;
