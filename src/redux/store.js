import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

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
