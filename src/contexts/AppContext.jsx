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

  return (
    <AppContext.Provider
      value={{
        modalTypeToOpen,
        setModalTypeToOpen,
        clickedRestaurantInfo,
        setClickedRestaurantInfo,
        restaurants,
        setRestaurants,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
