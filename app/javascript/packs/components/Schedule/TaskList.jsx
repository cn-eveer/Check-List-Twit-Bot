import React from "react";
import Todo from "./Todo";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  wrapper: {
    height: "380px",
    margin: "30px auto",
    zIndex: 1,
  },
}));
function TaskList() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Todo />
    </div>
  );
}

export default TaskList;
