import './sign.css';
import HeadBar from '../../components/header-bar/header-bar';
import Login from '../../components/input-login/input-login';
import Password from '../../components/input-password/input-password';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../../components/button/button.css';


class sign extends Component {
  render() {
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
            <Link to="/reg" className="sign-form_add">
              Создать аккаунт
              </Link>
          <button className="sign-button button">Вход</button>
          </div>
        </div>
       </div>
     </div>
         {/* <Switch>
           <Route exact path="/reg" component={Reg} />
         </Switch> */}
    </div>
    );
  }
}

export default sign;





