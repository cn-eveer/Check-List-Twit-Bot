import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Main from "./components/Schedule/Main";
import styled from "styled-components";
import Chat from "./components/Chat/Chat";
import Signin from "./components/Auth/Signin";
import loginError from "./loginError";
import "./App.css";
const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`;

function App() {
  const isSignedIn = useSelector((state) => state.userAuth.isSignedIn);

  return (
    <>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signin" component={Signin} />
          {isSignedIn ? (
            <Fragment>
              <Route exact path="/chat" component={Chat} />
              <Route exact path="/main" component={Main} />
            </Fragment>
          ) : (
            <Fragment>
              <Route exact path="/chat" component={loginError} />
              <Route exact path="/main" component={loginError} />
            </Fragment>
          )}
        </Switch>
      </Wrapper>
    </>
  );
}

export default App;
