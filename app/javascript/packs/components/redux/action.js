export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const LOGIN = "LOGIN";
export const signInAction = (useState) => {
  console.log(useState.name);
  console.log(useState.email);
  console.log(useState.password);

  return {
    type: SIGNIN,
    payload: {
      name: useState.name,
      email: useState.email,
      password: useState.password,
      isSignedIn: true,
    },
  };
};

export const logInAction = (useState) => {
  return {
    type: LOGIN,
    payload: {
      name: useState.name,
      password: useState.password,
      isSignedIn: true,
    },
  };
};

export const signOutAction = () => {
  return {
    type: SIGNOUT,
    playload: {
      name: "",
      email: "",
      password: "",
      isSignedIn: false,
    },
  };
};
