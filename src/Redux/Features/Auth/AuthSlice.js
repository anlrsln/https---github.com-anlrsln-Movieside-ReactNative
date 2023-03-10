import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {},
  loading: true,
};

const handleStorage = async user => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@USER', jsonValue);
  } catch (e) {
    console.log(e.message);
  }
};

export const authSlice = createSlice({
  name: 'authslice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const userInfo = action.payload;
      handleStorage(userInfo);
      state.user = userInfo;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setUser, setLoading} = authSlice.actions;
export default authSlice.reducer;
