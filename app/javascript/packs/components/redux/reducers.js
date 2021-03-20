import initialState from "./initialSate";
import { SIGNIN, SIGNOUT, LOGIN } from "./action";
export const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      // console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN:
      // console.log("ssssssss");
      // console.log(action.payload);
      console.log("login", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case SIGNOUT:
      console.log("signin", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
