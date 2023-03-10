import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../Features/Auth/AuthSlice';
import genreSlice from '../Features/Genres/GenreSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    genres: genreSlice,
  },
});
