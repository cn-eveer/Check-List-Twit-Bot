import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  inputWrapper: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "0 10px",
    opacity: 0.7,
  },
  sendInput: {
    width: "95%",
    background: "transparent",
    border: "none",
    color: "#ccc",
    fontSize: "20px",
  },
  sendIcon: {
    height: "51px",
    color: "#c4c1c1",
    fontSize: "30px",
    marginLeft: "5px",
    opacity: 0.8,
    transition: "all 0.4s",
    "&:hover": {
      color: "#42d353",
      opacity: 1,
      cursor: "pointer",
    },
  },
}));
function TextInput() {
  const classes = useStyles();
  return (
    <div className={classes.inputWrapper}>
      <input
        type="text"
        placeholder="Send message..."
        className={classes.sendInput}
      />
      <RiSendPlaneLine className={classes.sendIcon} />
    </div>
  );
}

export default TextInput;
