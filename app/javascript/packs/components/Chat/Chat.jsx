import React from "react";
import Header from "./Header";
import TextInput from "./TextInput";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  wrapper: {
    width: "500px",
    height: "700px",
    color: "#000",
    top: "50%",
    left: "50%",
    padding: "40px 30px",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    boxSizing: "border-box",
    boxShadow: "8px 8px 50px #000",
    backgroundColor: "#021015",
    borderRadius: "20px",
  },
  chatWrapper: {
    margin: "20px auto",
    height: "470px",
    borderRadius: "10px",
  },
}));

function Chat() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.chatWrapper}>
        <p>chat</p>
      </div>
      <TextInput />
    </div>
  );
}

export default Chat;
