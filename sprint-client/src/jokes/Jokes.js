import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Jokes extends React.Component {

  state = {
    jokes: [],

  }

  componentDidMount() {
    const endpoint = 'http://localhost:3300/api/jokes';

    axios.get(endpoint)
    .then(res => {
      this.setState({ jokes: res.data })
    })
  }

  render() {
    return (
      <div>
        <h2>List of Jokes</h2>
        <ul>
          {this.state.jokes.map(j => (
            <li key={j.id}>{j.joke}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default requiresAuth(Jokes);