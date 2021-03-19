import React from "react";
import { BiLogOut } from "react-icons/bi";
import { makeStyles } from "@material-ui/core";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const notify = () => {
  toast.success("Successfully Logout!!!", {
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
const logout = () => {
  notify();
};
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <Link to="/">
        <BiLogOut className={classes.backIcon} onClick={() => logout()} />
      </Link>
      <h1 className={classes.title}>Schedule List</h1>
      <HiMenuAlt3 className={classes.menuIcon} />
    </div>
  );
}

export default Header;
