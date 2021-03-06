import React, {Component} from 'react';
import './header-bar.css';
import {Link} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';

class HeadBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Войти"
        };
    }
    render() {
        return (
            <div>
                <div className="header-bar">
                    <div className="header-bar_menu">
                        <Link to="/" className="header-bar_logo">Simple<span style={{color: "#E66A08", fontWeight: "bold"}}>Ways</span></Link>
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
                        <Link to="/corona">
                        <i class="fas fa-virus"></i>
                            О COVID-19
                        </Link>
                        <Link to="/sign" className="header-bar_button">
                            <i className="fas fa-sign-in-alt"></i>
                            {this.state.text}
                        </Link>
                    </div>
                </div>

                {/* Burger Menu */}

                <Menu className="menu">
                    <Link to="/sign" className="bm-item">
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
                    <Link to="/corona">
                        <i class="fas fa-virus"></i>
                            О COVID-19
                        </Link>
                </Menu>
                <div className="header-title">
                    <Link to="/" className="header-title_logo">Simple<span style={{color: "#E66A08", fontWeight: "bold"}}>Ways</span></Link>
                </div>
            </div>
        );
    }
}
export default HeadBar;
