import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Games from './Components/Games/Games';

class App extends Component {
  render() {
    return (

      <div>

      
      <Router>

      <div className='App'>
        <Route path="/" exact strict render={ () => {
            return (<Home />);
          }
          }/>

          <Route path="/About/" exact strict render={ () => {
            return (<About />);
          }
          }/>

           <Route path="/Contact/" exact strict render={ () => {
            return (<Contact />);
          }
          }/>

           <Route path="/Games/" exact strict render={ () => {
            return (<Games />);
          }
          }/>

          </div>
          
          </Router>


      </div>
    );
  }
}

export default App;
