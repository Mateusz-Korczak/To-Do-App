import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => {
  return state.columns;
};

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

export const getAllLists = ({ lists }) => {
  return lists;
};

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const updateSearchString = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});
export const addList = (payload) => ({ type: 'ADD_LIST', payload });

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
