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

      return {
        ...state,
        ...action.payload,
      };
    case SIGNOUT:
      return initialState;
    default:
      return state;
  }
};
