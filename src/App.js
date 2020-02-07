import React from 'react';
import './App.css';
import Sign from './pages/sign/sign';
import Reg from './pages/reg/reg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HeadBar from './components/header-bar/header-bar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const history = createBrowserHistory();

function App() {
  return (
    <div className="wrapper">
      <HeadBar />
    <Tabs>
      <TabPanel className="slideshow">
        <div className="slide">
          <i className="far fa-map icon-map"></i>
            <div className="slide-text">
              <span className="slide-title">Карта</span>
              <p className="slide-subtitle">Карта для просмотра маршрутов по Крыму</p>
              <a className="slide-route">перейти к карте &#10095;</a>
            </div>
        </div>
        </TabPanel>

        <TabPanel>
          <div className="slide-wrapper">
        <div className="slide">
        <i className="fas fa-bus icon-map"></i>
            <div className="slide-text">
              <span className="slide-title">Маршруты</span>
              <p className="slide-subtitle">Маршруты Крыма в одном месте</p>
              <a className="slide-route">перейти к маршрутам &#10095;</a>
            </div>
        </div>
        </div>
        </TabPanel>

        <TabPanel>
        <div className="slide">
        <i className="far fa-newspaper icon-map"></i>
            <div className="slide-text">
              <span className="slide-title">Новости</span>
              <p className="slide-subtitle">Актуальные новости Крымкой республики</p>
              <a className="slide-route">перейти к новостям &#10095;</a>
            </div>
        </div>
      </TabPanel>

      <TabList className="tablist">
        <Tab className="tablist_item"><i className="far fa-map"></i></Tab>
        <Tab className="tablist_item"><i className="fas fa-bus"></i></Tab>
        <Tab className="tablist_item"><i className="far fa-newspaper"></i></Tab>
      </TabList>
      </Tabs>

    <Router>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/sign" component={Sign} />
        <Route exact path="/reg" component={Reg} />
      </Switch>
    </Router>

    </div>
  );
}


export default App;
