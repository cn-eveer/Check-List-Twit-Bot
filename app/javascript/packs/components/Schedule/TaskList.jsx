import React from "react";
import Todo from "./Todo";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  wrapper: {
    height: "380px",
    margin: "30px auto",
    zIndex: 1,
    overflow: "scroll",
    scrollbarColor: "#d3d3d3 #fff",
  },
}));
function TaskList({ setEditOpen }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Todo setEditOpen={setEditOpen} />
    </div>
  );
}

export default TaskList;
