/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER_WEATHER":
      return action.payload;

    default:
      return state;
  }
};
