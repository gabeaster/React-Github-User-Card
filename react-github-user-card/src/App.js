import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users')
    .then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Users and Followers</h1>
      </div>
    )
  }
}

export default App;
