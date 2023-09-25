import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { isLoading: true, response: { data: [], pagination: {} }, isError: false },
  reducers: {
    usersInit: (state) => {
      return { ...state, isLoading: true };
    },
    usersSuccess: (state, action) => {
      return { ...state, response: action.payload.data, isLoading: false };
    },
    usersFail: (state, action) => {
      return { ...state, isLoading: false, isError: action.payload.data };
    },
  },
});

export const { usersInit, usersSuccess, usersFail } = usersSlice.actions;
export default usersSlice.reducer;
