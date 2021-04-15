const {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
} = require("../actionTypes");

const init = {
  users: [],
  loading: true,
};

const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload._id),
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === payload._id ? { ...user, ...payload } : user
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
