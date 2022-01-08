import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => {
  return state.columns;
};

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const updateSearchString = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

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
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
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
