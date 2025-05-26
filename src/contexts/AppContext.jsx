import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const MODAL_TYPES = {
    ADD: "add",
    DETAIL: "detail",
  };
  Object.freeze(MODAL_TYPES);

  const [modalTypeToOpen, setModalTypeToOpen] = useState(null);
  const [clickedRestaurantInfo, setClickedRestaurantInfo] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

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
    <AppContext.Provider
      value={{
        modalTypeToOpen,
        setModalTypeToOpen,
        clickedRestaurantInfo,
        setClickedRestaurantInfo,
        restaurants,
        handleUpdatedRestaurants,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
