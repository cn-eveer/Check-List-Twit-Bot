import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "500px",
    height: "220px",
    color: "#000",
    top: "50%",
    left: "50%",
    padding: "60px 30px",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    boxSizing: "border-box",
    boxShadow: "8px 8px 50px #000",
    backgroundColor: "#fff",
  },
}));
function loginError() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h2>You need to Login</h2>
    </div>
  );
}

export default loginError;
