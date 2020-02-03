import React from 'react';
import './header-bar.css';


function HeadBar() {
    return (
        <div className="header-bar">
            <div className="header-bar_logo">SimpleWays</div>
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
                <i class="fas fa-sign-in-alt"></i>
                 Sign
            </a>
        </div>
    );
}

export default HeadBar;