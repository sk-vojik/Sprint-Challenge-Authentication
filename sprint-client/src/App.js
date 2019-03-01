import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Login from './login/Login';
import Jokes from './jokes/Jokes';

class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
       <header>
         <nav>
          <NavLink to="/login">Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/jokes">Jokes</NavLink>
          &nbsp; | &nbsp;
          <button onClick={this.logout}>Logout</button>

         </nav>
       </header>

       <main>

         <Route path="/login" component={Login}></Route>

         <Route path="/jokes" component={Jokes}></Route>


       </main>
      </div>
    );
  }
}

export default withRouter(App);
