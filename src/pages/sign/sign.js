import './sign.css';
import Login from '../../components/input-login/input-login';
import Password from '../../components/input-password/input-password';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../../components/button/button.css';



class sign extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Регистрация" };
}
  render() {
    return (
      <div className="wrapper">
        <div className="header-bar">
            <Link to="/" className="header-bar_logo">SimpleWays</Link>
            <Link to="/maps">
                <i className="fas fa-map"></i>
                 Карта
            </Link>
            <Link to="/ways">
                <i className="fas fa-bus"></i>
                 Маршруты
            </Link>
            <Link to="#">
                <i className="far fa-newspaper"></i>
                 Новости
            </Link>
            <Link to="/reg" className="header-bar_button" >
            <i className="fas fa-sign-in-alt"></i>
                 {this.state.text}
            </Link>
        </div>
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
    </div>
    );
  }
}

export default sign;





