import React from 'react';
import './header-bar.css';


function HeadBar() {
    return (
        <div className="header-bar">
            <div className="header-bar_logo">SimpleWays</div>
            <a href="#">Карта</a>
            <a href="#">Маршруты</a>
            <a href="#">Новости</a>
            <button className="header-bar_button">Sign In</button>
        </div>
    );
}

export default HeadBar;