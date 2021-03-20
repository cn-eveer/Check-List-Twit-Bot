export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const LOGIN = "LOGIN";
export const signInAction = (useState) => {
  return {
    type: SIGNIN,
    payload: {
      name: useState.name,
      email: useState.email,
      password: useState.password,
      confirm: useState.confirm,
      isSignedIn: true,
    },
  };
};

export const logInAction = (useState) => {
  return {
    type: LOGIN,
    payload: {
      email: useState.email,
      password: useState.password,
      isSignedIn: true,
    },
  };
};

export const signOutAction = () => {
  console.log("signout");
  return {
    type: SIGNOUT,
    payload: {
      name: "",
      email: "",
      password: "",
      isSignedIn: false,
    },
  };
};
