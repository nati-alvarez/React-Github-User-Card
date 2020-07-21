import React from 'react';
import axios from "axios";
import './App.css';

const API_URL = "https://api.github.com/users/nati-alvarez";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    axios.get(API_URL).then(({user})=>{
      this.setState({
        ...this.state, 
        user: user
      })
    }).catch(err=>{
      console.log(err);
    })
  }

  render(){
    return (
      <>
        <h1>Github User Card</h1>
      </>
    );
  }
}

export default App;
