import React from 'react';
import axios from "axios";
import './App.css';
import Usercard from './components/Usercard';
import Loader from "./components/Loader";

const API_URL = "https://api.github.com/users/nati-alvarez";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null,
      followers: null
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

    axios.get(API_URL + "/followers").then(({data})=>{
      this.setState({
        ...this.state,
        followers: data
      })
    })
  }

  render(){
    console.log(this.state.followers)
    return (
      <div className="App">
        <h1>Github User Card</h1>
        {this.state.user ?
          <Usercard user={this.state.user}/>
          : <Loader/>
        }
        <h2>Followers</h2>
        <div className="followers">
          {this.state.followers? this.state.followers.map(follower=>{
            return <Usercard user={follower}/>;
          }): <Loader/> }
        </div>
      </div>
    );
  }
}

export default App;
