import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

// components
import Home from './Components/Home';
import Navbar from './Components/Navbar/NavBar';
import Contact from './Components/Contact';
import About from './Components/About'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
