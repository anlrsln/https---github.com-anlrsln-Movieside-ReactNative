import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {},
  loading: false,
};

const handleStorage = async user => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@USER', jsonValue);
  } catch (e) {
    console.log(e.message);
  }
};

const handleLogOut = async () => {
  AsyncStorage.removeItem('@USER');
};

export const authSlice = createSlice({
  name: 'authslice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.loading = true;
      const userInfo = action.payload;
      handleStorage(userInfo);
      state.user = userInfo;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    removeUser: state => {
      handleLogOut();
      state.user = {};
    },
  },
});

export const {setUser, setLoading, removeUser} = authSlice.actions;
export default authSlice.reducer;
