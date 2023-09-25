import { configureStore } from '@reduxjs/toolkit';
import users from '../slices/users';
import userDetails from '../slices/user-details';

export const store = configureStore({
  reducer: {
    users: users,
    userDetails: userDetails,
  },
});
