import React, { Component } from 'react';
import './reg.css';
import HeadBar from '../../components/header-bar/header-bar';


class reg extends Component {
  render() {
    return (
      <div className="wrapper">
      <HeadBar />
    <div className="reg-wrapper">
      <div className="reg">
        <div className="reg-form">
          <h2 className="reg-form_title">Регистрация</h2>
          <p className="reg-form_subtitle">Создайте аккаунт SimpleWays</p>
          <input className="name" type="name" name="name" placeholder="Имя" />
          <input className="surname" type="surname" name="surname" placeholder="Фамилия" />
          <input className="login" type="login" name="login" placeholder="Введите адрес эл. почты" />
          <input className="password" type="password" name="password" placeholder="Введите пароль"/>
          <input className="acc-pass" type="password" name="acc-pass" placeholder="Подтвердите пароль" />
          <button className="button-reg">Зарегестрироваться</button>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default reg;

