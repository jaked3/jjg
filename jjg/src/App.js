import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
//import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (

      <div>

      <Nav />

      <Router>

      <div className='App'>
        <Route path="/" exact strict render={ () => {
            return (<Home />);
          }
          }/>
          </div>
          
          </Router>


      </div>
    );
  }
}

export default App;
