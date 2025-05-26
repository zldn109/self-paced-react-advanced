import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const MODAL_TYPES = {
    ADD: "add",
    DETAIL: "detail",
  };

  Object.freeze(MODAL_TYPES);

  const [modalTypeToOpen, setModalTypeToOpen] = useState(null);

  const openAddRestaurantModal = () => setModalTypeToOpen(MODAL_TYPES.ADD);

  const handleCloseModal = () => setModalTypeToOpen(null);

  const [clickedRestaurantInfo, setClickedRestaurantInfo] = useState(null);

  const handleClickedRestaurantInfo = (name, description) => {
    const restaurant = {
      name,
      description,
    };
    setClickedRestaurantInfo(restaurant);
    setModalTypeToOpen(MODAL_TYPES.DETAIL);
  };

  const [restaurants, setRestaurants] = useState([]);

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

  const [category, setCategory] = useState("전체");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <AppContext.Provider
      value={{
        modalTypeToOpen,
        openAddRestaurantModal,
        handleClickedRestaurantInfo,
        restaurants,
        handleUpdatedRestaurants,
        handleCloseModal,
        clickedRestaurantInfo,
        category,
        handleCategoryChange,
        filteredRestaurants,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
