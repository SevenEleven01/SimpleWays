import './sign.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../../components/button/button.css';
import { slide as Menu } from 'react-burger-menu';
import '../../components/input-login.css';
import '../../components/input-password.css';



class sign extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Регистрация" };
}
  render() {
    return (
      <div className="wrapper">
        <>
            <Menu className="menu">
            <Link to="/reg" className="header-bar_button" >
            <i className="fas fa-sign-in-alt"></i>
                 {this.state.text}
            </Link>
            <a href="/maps">
                <i className="fas fa-map"></i>
                 Карта
            </a>
            <Link to="/ways">
                <i className="fas fa-bus"></i>
                 Маршруты
            </Link>
            <Link to="#">
                <i className="far fa-newspaper"></i>
                 Новости
            </Link>
            </Menu>
            <div className="header-bar">
            <Link to="/" className="header-bar_logo">SimpleWays</Link>
            </div>
        </>
     <div className="sign-wrapper">
       <div className="sign">
        <div className="sign-form">
          <h2 className="sign-form_title">Вход</h2>
          <p className="sign-form_subtitle">Используйте аккаунт SimpleWays</p>
          <input className="login" type="login" name="login" placeholder="Введите адрес эл. почты" />
          <input className="password" type="password" name="password" placeholder="Введите пароль"/>
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





