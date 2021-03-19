import axios from "axios";
import React, { Component, useEffect } from "react"
import { Link, Route, Switch} from 'react-router-dom'
import Add from './add'

class Checklist extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [],
      currentItem: {text:'',key:''},
    }

  }

  componentDidMount(){
    axios.get('api/v1/checklists.json')
    .then(resp => {
      
      this.setState({
        items: resp.data
      })
      console.log(this.state.items);
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    return (
      <>
        <h1>Checklist</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
        <ul>
          {this.state.items.map((item) => 
            <li key={item.id}>{item.title}</li>
          )}
        </ul>
        <Add user={this.props.user}/>
      </>
    );
  }
}
 
export default Checklist