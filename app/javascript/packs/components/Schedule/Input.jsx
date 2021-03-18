import React from "react";
import { makeStyles } from "@material-ui/core";

function Input({ setOpen }) {
  const classes = useStyles();
  const openModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={classes.inputWrapper}>
      {/* <input
        type="text"
        placeholder="Add task..."
        className={classes.sendInput}
      /> */}
      {/* <FaRegStickyNote className={classes.sendIcon} /> */}
      <p className={classes.addButton} onClick={openModal}>
        Add task ...
      </p>
      <select name="fillter" className={classes.filter}>
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="uncomplete">Uncomplete</option>
      </select>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  inputWrapper: {
    marginTop: "20px",
    display: "flex",
    // border: "1px solid #ccc",
    borderRadius: "10px",
    // padding: "0 10px",
    opacity: 1,
    textAlign: "center",
    // alignItems: "center",
  },
  addButton: {
    width: "55%",
    borderRadius: "10px ",
    // marginRight: "3%",
    height: "51px",
    color: "#fff",
    fontSize: "30px",
    backgroundColor: "#021015",
    fontFamily: "Amatic SC, cursive",
    // marginLeft: "5px",
    opacity: 1,
    transition: "all 0.4s",
    "&:hover": {
      color: "#021015",
      backgroundColor: "#fff",
      cursor: "pointer",
    },
  },
  filter: {
    width: "45%",
    // background: "transparent",
    borderRadius: "10px ",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: "20px",
    alignContent: "center",
    // appearance: "none",
    backgroundColor: "#021015",
    textAlign: "center",
    opacity: 1,
    transition: "all 0.4s",
    fontFamily: "Amatic SC, cursive",
    "&:hover": {
      color: "#021015",
      backgroundColor: "#fff",
      cursor: "pointer",
    },
  },
  // sendInput: {
  //   width: "30%",
  //   // background: "transparent",

  //   border: "none",
  //   outline: "none",
  //   color: "#ccc",
  //   fontSize: "20px",
  //   alignContent: "center",
  // },
  // sendIcon: {
  //   width: "40%",
  //   height: "51px",
  //   color: "#c4c1c1",
  //   fontSize: "30px",
  //   marginLeft: "5px",
  //   opacity: 0.8,
  //   transition: "all 0.4s",
  //   "&:hover": {
  //     color: "#42d353",
  //     opacity: 1,
  //     cursor: "pointer",
  //   },
  // },
}));
export default Input;
