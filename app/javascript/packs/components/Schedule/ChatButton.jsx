import React from "react";
import "./button.css";
import { makeStyles } from "@material-ui/core";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  btnWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  btnIcon: {
    fontSize: "50px",
  },
}));

function ChatButton() {
  const classes = useStyles();
  return (
    <div className={classes.btnWrapper}>
      <Link to="/chat" className="btn-open">
        <span className="icon">
          <BsFillChatDotsFill className={classes.btnIcon} />
        </span>
      </Link>
    </div>
  );
}

export default ChatButton;
