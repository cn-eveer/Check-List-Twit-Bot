import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { BiLogOut } from "react-icons/bi";
import { makeStyles } from "@material-ui/core";
import { HiMenuAlt3 } from "react-icons/hi";
import { toast, Zoom } from "react-toastify";
import { signOutAction } from "../redux/action";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const LogSuccess = () => {
  toast.success("Successfully Logout!!!", {
    hideProgressBar: true,
    transition: Zoom,
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};
const LogError = () => {
  toast.error("Error Logout!!!", {
    hideProgressBar: true,
    transition: Zoom,
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};

const useStyles = makeStyles(() => ({
  headerWrapper: {
    display: "flex",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Amatic SC, cursive",
  },
  backIcon: {
    height: "51px",
    color: "#fff",
    fontSize: "30px",
    marginRight: "95px",
    marginLeft: "5px",
  },
  menuIcon: {
    height: "51px",
    color: "#fff",
    fontSize: "30px",
    marginLeft: "95px",
    marginRight: "5px",
  },
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(signOutAction());
    LogSuccess();
    dispatch(push("/"));
  };
  return (
    <div className={classes.headerWrapper}>
      <BiLogOut className={classes.backIcon} onClick={() => signout()} />

      <h1 className={classes.title}>Schedule List</h1>
      <HiMenuAlt3 className={classes.menuIcon} />
    </div>
  );
}

export default Header;
