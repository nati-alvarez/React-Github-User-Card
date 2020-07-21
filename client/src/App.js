import React from 'react';
import axios from "axios";
import './App.css';
import Usercard from './components/Usercard';

const API_URL = "https://api.github.com/users/nati-alvarez";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    axios.get(API_URL).then(({data})=>{
      this.setState({
        ...this.state, 
        user: data
      })
    }).catch(err=>{
      console.log(err);
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
        {this.state.user &&
          <Usercard user={this.state.user}/>
        }
      </div>
    );
  }
}

export default App;
