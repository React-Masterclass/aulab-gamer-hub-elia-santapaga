import { createContext } from 'react';

//* Il contesto contiene un oggetto

const AppContext = createContext({
  games: [],
  setGames: (games) => games,
  genres: [],
  setGenres: () => {},
  gamesSearched: [],
  setGamesSearched: (games) => games,
  loading: true,
  setLoading: () => {},
  error: '',
  setError: () => {},
  search: '',
  setSearch: () => {},
  pagination: 1,
  setPagination: () => {},
  game: [],
  setGame: () => {},
  fav: [],
  setFav: () => {},
});

export default AppContext;
