import React from "react";
import axios from "axios";
import GitUserCard from "./components/GitUserCard";

class App extends React.Component {
  state = {
    gitUsers: {},
    followers: [] 
  };

  componentDidMount() {

    axios.get(`https://api.github.com/users/hillinm`)
      .then( res => {
        this.setState({gitUsers: res.data});
      })
      .catch(error => {
        console.log('error', error)
      });

    axios.get(`https://api.github.com/users/hillinm/followers`)
      .then( res => {
        this.setState({followers: res.data});
      })
      .catch(error => {
        console.log('error', error)
      });
    }

  render() {
    return (
      <div className="App">
          <GitUserCard 
          data={this.state.gitUsers}
          followers={this.state.followers}
          />
      </div>
    )
  }
}
export default App;

