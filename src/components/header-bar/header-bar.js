import React from 'react';
import './header-bar.css';
import { Link } from 'react-router-dom';



function HeadBar() {
    return (
        <div className="header-bar">
            <a href="/" className="header-bar_logo">SimpleWays</a>
            <a href="#">
                <i className="fas fa-map"></i>
                 Карта
            </a>
            <a href="/ways">
                <i className="fas fa-bus"></i>
                 Маршруты
            </a>
            <a href="#">
                <i className="far fa-newspaper"></i>
                 Новости
            </a>
            <Link to="/sign" className="header-bar_button" >
                <i className="fas fa-sign-in-alt"></i>
                 Sign In
            </Link>
            {/* <a href="/sign" className="header-bar_button" >
                <i className="fas fa-sign-in-alt"></i>
                 Sign In
                </a> */}
        </div>
    );
}

export default HeadBar;