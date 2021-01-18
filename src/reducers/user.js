import { LOG_IN, SAVE_USER, CLEAR_USER } from '../actions/user';

const userState = { user: null };

const user = (state = userState, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.user;
    case SAVE_USER:
      return action.user;
    case CLEAR_USER:
      return { user: null };
    default:
      return state;
  }
};

export default user;
