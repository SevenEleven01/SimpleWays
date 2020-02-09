import './sign.css';
import HeadBar from '../../components/header-bar/header-bar';
import Login from '../../components/input-login/input-login';
import Password from '../../components/input-password/input-password';
import Button from '../../components/button/button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reg from '../reg/reg';
import React from 'react';

function Sign() {
    return (
      <div className="wrapper">
        <HeadBar />
     <div className="sign-wrapper">
       <div className="sign">
        <div className="sign-form">
          <h2 className="sign-form_title">Вход</h2>
          <p className="sign-form_subtitle">Используйте аккаунт SimpleWays</p>
          <Login />
          <Password />
          <div className="sign-form_buttons">
            <a href="/reg" className="sign-form_add">
              Создать аккаунт
              </a>
          <Button />
          </div>
        </div>
       </div>
     </div>
         <Switch>
           <Route exact path="/reg" component={Reg} />
         </Switch>
    </div>
    );
}

export default Sign;





