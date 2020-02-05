import React from 'react';
import './App.css';
import Sign from './pages/sign/sign';
import Reg from './pages/reg/reg';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HeadBar from './components/header-bar/header-bar';

const history = createBrowserHistory();

function App() {
  return (
    <div className="wrapper">
      <HeadBar />
      
      <Router>
      <Switch>
        <Route exact path="/sign" component={Sign} />
        <Route exact path="/reg" component={Reg} />
      </Switch>
    </Router>
    </div>
  );
}



export default App;
