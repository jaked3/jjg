import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (

      <div>
      <Router>
        <Route path="/" exact strict render={ () => {
            return (<Home />);
          }
          }/>
          </Router>
      </div>
    );
  }
}

export default App;
