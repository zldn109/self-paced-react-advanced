import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal";
import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContext";

function App() {
  const { modalTypeToOpen, setRestaurants } = useContext(AppContext);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("http://localhost:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    };

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
        <MainContent />
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
