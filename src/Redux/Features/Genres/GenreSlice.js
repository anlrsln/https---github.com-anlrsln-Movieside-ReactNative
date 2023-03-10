import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  genres: [],
};

export const genreSlice = createSlice({
  name: 'genreSlice',
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const {setGenres} = genreSlice.actions;

export default genreSlice.reducer;
