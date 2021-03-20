import axios from "axios";
import { logInAction, signInAction } from "./action";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { push } from "connected-react-router";
toast.configure();

// const notify = () => {
//   toast.success("Successfully Signin!!!", {
//     hideProgressBar: true,
//     transition: Zoom,
//     draggable: true,
//     position: toast.POSITION.TOP_CENTER,
//   });
// };
const sininSuccess = () => {
  toast.success("Successfully Signin!!!", {
    hideProgressBar: true,
    transition: Zoom,
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};
const loginSuccess = () => {
  toast.success("Successfully Login!!!", {
    hideProgressBar: true,
    transition: Zoom,
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};
const signinError = () => {
  toast.error("Signin Failed", {
    hideProgressBar: true,
    transition: Zoom,
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};
const loginError = () => {
  toast.error("Login Failed", {
    hideProgressBar: true,
    transition: Zoom,
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};
export const signin = (userName, userEmail, userPassword, confirm) => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.userAuth.isSignedIn;
    if (!isSignedIn) {
      console.log(userName),
        await axios
          .post(
            "api/v1/user",
            {
              user: {
                username: userName,
                email: userEmail,
                password: userPassword,
                password_confirmation: confirm,
              },
            },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data.status === "created") {
              dispatch(
                signInAction({
                  name: userName,
                  email: userEmail,
                  password: userPassword,
                  confirm: confirm,
                  isSignedIn: true,
                })
              );
              dispatch(push("/main"));
              dispatch(sininSuccess);
            }
          })
          .catch((error) => {
            dispatch(signinError);
          });
    }
  };
};

export const login = (userEmail, userPassword) => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.userAuth.isSignedIn;
    if (!isSignedIn) {
      // console.log(userName),
      await axios
        .post(
          "api/v1/sessions",
          {
            session: {
              email: userEmail,
              password: userPassword,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.logged_in) {
            dispatch(
              logInAction({
                email: userEmail,
                password: userPassword,
                isSignedIn: true,
              })
            );
            dispatch(push("/main"));
            dispatch(loginSuccess);
          }
        })
        .catch((error) => {
          dispatch(loginError);
        });
    }
  };
};
