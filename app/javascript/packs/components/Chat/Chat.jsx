import React, { useState } from "react";
import Header from "./Header";
import ChatList from "./ChatList";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";
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
  inputWrapper: {
    display: "flex",
    // border: "1px solid #ccc",
    justifyContent: "space-between",
    textAlign: "center",
  },
}));

const Yes = styled(motion.h2)`
  width: 48%;
  font-size: 35px;
  color: #bbf23b;
  background-color: #fff;
  opacity: 0.7;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover {
    opacity: 1;
    cursor: pointer;
    color: #fff;
    background-color: #bbf23b;
  }
`;
const No = styled(motion.h2)`
  width: 48%;
  font-size: 35px;
  color: #cb2929;
  background-color: #fff;
  opacity: 0.7;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover {
    opacity: 1;
    cursor: pointer;
    color: #fff;
    background-color: #cb2929;
  }
`;
const Space = styled.div`
  margin: 4%;
`;
function Chat() {
  const classes = useStyles();
  const [text, setText] = useState([]);
  const yesClick = () => {
    setText("Yes");
  };
  const noClick = () => {
    setText("No");
  };
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.chatWrapper}>
        <ChatList text={text}/>
      </div>
      {/* <TextInput /> */}
      <div className={classes.inputWrapper}>
        <Yes whileHover={{ scale: 1.1 }} onClick={yesClick}>
          Yes
        </Yes>
        <Space />
        <No whileHover={{ scale: 1.1 }} onClick={noClick}>
          No
        </No>
      </div>
    </div>
  );
}

export default Chat;
