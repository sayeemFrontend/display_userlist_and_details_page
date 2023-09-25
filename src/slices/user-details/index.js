import { createSlice } from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: { isLoading: true, response: { data: [], pagination: {} }, isError: false },
  reducers: {
    userDetailsInit: (state) => {
      return { ...state, isLoading: true };
    },
    userDetailsSuccess: (state, action) => {
      return { ...state, response: action.payload.data, isLoading: false };
    },
    userDetailsFail: (state, action) => {
      return { ...state, isLoading: false, isError: action.payload.data };
    },
  },
});

export const { userDetailsInit, userDetailsSuccess, userDetailsFail } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
