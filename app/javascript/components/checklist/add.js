import React, { Component, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import moment from 'moment'
import 'react-toastify/dist/ReactToastify.css'
import { FiSend } from 'react-icons/fi'

const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const InputName = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 2px 7px;
`

const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: #1E90FF;
  color: #fff;
  text-align: center;
  cursor: pointer;
  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: default;
  `}
`

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`

toast.configure()


class Add extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      username: this.props.user.username,
      finish_at: moment().format('YYYY-MM-DD')
    };
    console.log(this.state);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { title, username, finish_at } = this.state;
    axios
      .post(
        "/api/v1/checklists",
        {
          checklist: {
            title: title,
            username: username,
            finish_at: finish_at
          }
        }
      )
      .then(response => {
        if (response.data.logged_in) {
          handleSuccessfulAdd(response.data);
          console.log("SUCCESS");
        }
      })
      .catch(error => {
        console.log("add error", error);
      });
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />

          <input
            type="date"
            name="Date"
            placeholder="finish_at"
            value={this.state.finish_at}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Add</button>
        </form>
      </div> 
    );
  }
}

export default Add