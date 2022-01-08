import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    default:
      return state;
  }
};

// Stworzenie magazynu - CreateStore:
/**
 * CreateRedux:
 * Pierwszy argument - referencja do funkcji  która odpowiada za modyfikacje danych z magazynu
 * Drugi argument informacja o danych startowych magazynu
 * Trzeci argument (opcjonalny) middleware (pluginy) - u nas mówimy, że jeśli w przeglądarce jest zainstalowany plugin Redux Devtools to należy z niego skorzystać i przekazać mu bieżąco informacje o naszym magazynie. Dzięki temu plugin w Chrome - będzie mógł poprawnie działać
 */
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
