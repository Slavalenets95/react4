export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const logIn = (userData) => {
  sessionStorage.setItem('user', JSON.stringify(userData));
  return { type: LOG_IN, user: userData };
};

export const saveUser = (userData) => ({ type: SAVE_USER, user: userData });

export const clearUser = () => {
  sessionStorage.removeItem('user');
  return { type: CLEAR_USER };
};
