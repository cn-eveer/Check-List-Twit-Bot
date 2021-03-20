import React, { useState } from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core";
import Input from "./Input";
import ChatButton from "./ChatButton";
import TaskList from "./TaskList";
import ModalTask from "./ModalTask";
import EditTask from "./EditTask";
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

function Main() {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Header />
        <Input setOpen={setOpen} />
        <TaskList setEditOpen={setEditOpen} />
        <ChatButton />
      </div>
      <ModalTask open={open} setOpen={setOpen} />
      <EditTask editOpen={editOpen} setEditOpen={setEditOpen} />
    </>
  );
}

export default Main;
