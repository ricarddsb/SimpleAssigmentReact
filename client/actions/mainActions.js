export const USER_DATA_INPUT = 'USER_DATA_INPUT';
export const NEWS_CLICK_NAVBAR = 'NEWS_CLICK_NAVBAR';
export const LOGOUT_CLICK = 'LOGOUT_CLICK';

export function logOutClick() {
  return {
    type: LOGOUT_CLICK,
  };
}

export function newsClick() {
  return {
    type: NEWS_CLICK_NAVBAR,
  };
}

export function userDataInput(username, password) {
  return {
    type: USER_DATA_INPUT,
    username,
    password,
  };
}
