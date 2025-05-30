import { atom } from "recoil";

export const modalTypeState = atom({
  key: "modalTypeState",
  default: null,
});

export const clickedRestaurantInfoState = atom({
  key: "clickedRestaurantInfoState",
  default: null,
});

export const restaurantsState = atom({
  key: "restaurantsState",
  default: [],
});

// export function AppProvider({ children }) {
//   const MODAL_TYPES = {
//     ADD: "add",
//     DETAIL: "detail",
//   };
//   Object.freeze(MODAL_TYPES);

//
//

//   return (
//     <AppContext.Provider
//       value={{
//         modalTypeToOpen,
//         setModalTypeToOpen,
//         clickedRestaurantInfo,
//         setClickedRestaurantInfo,
//         restaurants,
//         setRestaurants,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }
