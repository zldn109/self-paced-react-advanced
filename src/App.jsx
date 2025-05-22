import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal";
import { useState, useEffect } from "react";
import { AppProvider } from "./contexts/AppContext";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <main>
          <MainContent />
        </main>
        <aside>
          <ModalRenderer />
        </aside>
      </AppProvider>
    </>
  );
}

function ModalRenderer() {
  const { modalTypeToOpen } = useContext(AppContext);

  return (
    <>
      {modalTypeToOpen === "add" && <AddRestaurantModal />}
      {modalTypeToOpen === "detail" && <RestaurantDetailModal />}
    </>
  );
}

export default App;
