import { userDetailsFail, userDetailsInit, userDetailsSuccess } from '../slices/user-details';
import { usersFail, usersInit, usersSuccess } from '../slices/users';
import { getApi } from './methods';

export function joinQueryParam(obj = {}) {
  let stringArray = Object.keys(obj).map((key) => `${key}=${obj[key]}`);
  return stringArray.join('&');
}
//for users
export async function getUsers(options = {}) {
  getApi({
    url: `users?${joinQueryParam(options)}`,
    init: usersInit,
    success: usersSuccess,
    fail: usersFail,
  });
}

export async function getUserDetails(options = {}) {
  getApi({
    url: `users/${options.user_id}`,
    init: userDetailsInit,
    success: userDetailsSuccess,
    fail: userDetailsFail,
  });
}
