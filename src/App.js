import React from 'react';
import CheckStatus from './checkStatus';
import NavBar from './NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import LogIn from './LogIn';
import BedStatus from './BedStatus';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/update" component={LogIn} />
          <Route path="/status" component={CheckStatus} />
          <Route path="/bed" component={BedStatus} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
