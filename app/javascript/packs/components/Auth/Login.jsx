import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { login } from "../redux/operations";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Schedule Chat</h1>
      <form>
        <div className={classes.iconbar}>
          <AiOutlineMail className={classes.icon} />
          <input type="text" placeholder="Email" onChange={handleEmailChange} />
        </div>
        <div className={classes.iconbar}>
          <AiOutlineLock className={classes.icon} />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <p onClick={() => dispatch(login(email, password))}>LOG IN</p>
        <Link to="/signup">
          <span className={classes.span}>Create your account?</span>
        </Link>
      </form>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "500px",
    height: "520px",
    color: "#000",
    top: "50%",
    left: "50%",
    padding: "60px 30px",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    boxSizing: "border-box",
    boxShadow: "8px 8px 50px #000",
    "& input": {
      width: "85%",
      paddingLeft: "10px",
      border: "none",
      background: "transparent",
      height: "30px",
      fontSize: "20px",
      color: "#dadada",
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "#f7f4f4",
        opacity: "0.5",
      },
    },
    "& p": {
      width: "80%",
      border: "none",
      padding: "10px",
      background: "#4ed25e",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      alignItems: "center",
      margin: "0 auto 10px",
      borderRadius: "3px",
      fontFamily: "Amatic SC, cursive",
      opacity: 0.6,
      transition: "all 0.4s",
      "&:hover": {
        cursor: "pointer",
        opacity: 1,
      },
    },
  },
  title: {
    margin: 0,
    padding: 0,
    fontWeight: "bold",
    fontSize: "42px",
    color: "#fff",
    textAlign: "center",
    marginBottom: "10%",
    fontFamily: "Amatic SC, cursive",
  },
  iconbar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
    borderBottom: "1px solid #ddd",
    // height: "30px",
    color: "#dadada",
  },
  icon: {
    width: "10%",
    fontSize: "30px",
    padding: 0,
  },
  span: {
    float: "right",
    marginRight: "50px",
    color: "#69dc76",
    transition: "all 0.4s",
    fontSize: "18px",
    opacity: 0.7,
    "&:hover": {
      cursor: "pointer",
      opacity: 1,
    },
  },
}));

export default Login;
