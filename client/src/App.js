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
      followers: null,
      query: "",
      searchResult: null
    }
    this.search = this.search.bind(this)
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

  componentDidUpdate(prevProps, prevState){
    if(prevState.query !== this.state.query){
      axios.get("https://api.github.com/users/" + this.state.query).then(({data})=>{
        this.setState({
          ...this.state,
          searchResult: data
        });
      }).catch(err => {
        console.log(err)
      })
    }
  }

  search(e){
    e.preventDefault();
    let query = document.getElementById("query").value;
    this.setState({
      ...this.state,
      query: query
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
        <div>
          <h3>Find a User</h3>
          <form onSubmit={this.search}> 
            <input type="text" id="query"/>
            <button>Search</button>
          </form>
          <br></br>
          {this.state.searchResult && <Usercard user={this.state.searchResult}/>}
        </div>
      </div>
    );
  }
}

export default App;
