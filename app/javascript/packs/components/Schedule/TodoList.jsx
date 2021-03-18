import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  todoWrapper: {
    backgroundColor: "red",
    margin: "20px auto",
    height: "470px",
    borderRadius: "10px",
  },
}));
function TodoList() {
  const classes = useStyles();

  return (
    <div className={classes.todoWrapper}>
      <p>List</p>
    </div>
  );
}

export default TodoList;
