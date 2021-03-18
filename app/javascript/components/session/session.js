import React, { Component } from "react"
import axios from "axios"
import Login from "./login"
import Signup from "./signup"

export default class Session extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
  }

  handleLogoutClick() {
    axios
      .delete("api/v1/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Signup handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}