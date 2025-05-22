import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const MODAL_TYPES = {
    ADD: "add",
    DETAIL: "detail",
  };

  const [modalTypeToOpen, setModalTypeToOpen] = useState(null);
  const openAddRestaurantModal = () => setModalTypeToOpen(MODAL_TYPES.ADD);

  return (
    <AppContext.Provider value={{ modalTypeToOpen, openAddRestaurantModal }}>
      {children}
    </AppContext.Provider>
  );
}
