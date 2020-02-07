import React from 'react';
import './header-bar.css';



function HeadBar() {
    return (
        <div className="header-bar">
            <a href="/" className="header-bar_logo">SimpleWays</a>
            <a href="#">
                <i className="fas fa-map"></i>
                 Карта
            </a>
            <a href="#">
                <i className="fas fa-bus"></i>
                 Маршруты
            </a>
            <a href="#">
                <i className="far fa-newspaper"></i>
                 Новости
            </a>
            <a href="/sign" className="header-bar_button">
                <i className="fas fa-sign-in-alt"></i>
                 Sign
            </a>
        </div>
    );
}

export default HeadBar;