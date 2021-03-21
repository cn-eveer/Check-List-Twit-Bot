import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
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
  return (
    <div className={classes.headerWrapper}>
      <Link to="/checklist">
        <IoMdArrowRoundBack className={classes.backIcon} />
      </Link>
      <h1 className={classes.title}>Oni Bot </h1>
      <HiMenuAlt3 className={classes.menuIcon} />
    </div>
  );
}

export default Header;
