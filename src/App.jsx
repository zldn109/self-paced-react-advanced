import "./App.css";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/Main/CategoryFilter";
import RestaurantList from "./components/Main/RestaurantList";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalTypeState, restaurantsState } from "./store/AppAtom";

function App() {
  const MODAL_TYPES = {
    ADD: "add",
    DETAIL: "detail",
  };
  Object.freeze(MODAL_TYPES);

  const modalTypeToOpen = useRecoilValue(modalTypeState);
  const setRestaurants = useSetRecoilState(restaurantsState);

  const fetchRestaurants = async () => {
    const response = await fetch("http://localhost:3000/restaurants");
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const addNewRestaurant = async (restaurant) => {
    const response = await fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restaurant),
    });
    const newRestaurant = await response.json();
    return newRestaurant;
  };

  const handleUpdatedRestaurants = async (restaurant) => {
    const newRestaurant = await addNewRestaurant(restaurant);
    setRestaurants((prev) => [...prev, newRestaurant]);
  };

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {modalTypeToOpen === "add" && (
          <AddRestaurantModal onSubmitRestaurant={handleUpdatedRestaurants} />
        )}
        {modalTypeToOpen === "detail" && <RestaurantDetailModal />}
      </aside>
    </>
  );
}

export default App;
