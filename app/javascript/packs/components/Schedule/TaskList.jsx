import React from "react";
import Todo from "./Todo";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  wrapper: {
    height: "380px",
    margin: "30px auto",
    behavior: "smooth",
    overflow: "hidden",
    zIndex: 1,
  },
}));
function TaskList({ setEditOpen, updateList, setUpdateList }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
          <Todo setEditOpen={setEditOpen} updateList={updateList} setUpdateList={setUpdateList}/>
      </div>
    </>
  );
}

export default TaskList;
