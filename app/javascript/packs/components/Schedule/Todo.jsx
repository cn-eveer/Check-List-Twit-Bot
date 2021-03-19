import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  title: {
    color: "#eee8e8",
    opacity: "0.8",
  },
}));
function Todo() {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.title}>I am Hungry</p>
    </div>
  );
}

export default Todo;
