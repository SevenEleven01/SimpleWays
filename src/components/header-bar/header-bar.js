import React, { Component } from 'react';
import './header-bar.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class HeadBar extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "Войти" };
    }
    render() {
        return (
            <>
            <Menu className="menu">
            <Link to="/sign" className="header-bar_button" >
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
        );
    }
}
export default HeadBar;
