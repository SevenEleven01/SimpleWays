import React, { Component } from 'react';
import './header-bar.css';
import { Link } from 'react-router-dom';


class HeadBar extends Component {
    render() {
        return (
            <div className="header-bar">
            <Link to="/" className="header-bar_logo">SimpleWays</Link>
            <Link to="#">
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
            <Link to="/sign" className="header-bar_button" >
                <i className="fas fa-sign-in-alt"></i>
                 Sign In
            </Link>
        </div>
        );
    }
}
export default HeadBar;
