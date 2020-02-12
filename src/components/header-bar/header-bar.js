import React, { Component } from 'react';
import './header-bar.css';
import { Link } from 'react-router-dom';



class HeadBar extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "Sign In" };
    }

    OnClickButton = () => {
        this.setState({
            text: "Registration"
        });
    }
    render() {
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
            <Link onClick={this.OnClickButton} to="/sign" className="header-bar_button" >
                <i className="fas fa-sign-in-alt"></i>
                 {this.state.text}
            </Link>
        </div>
        );
    }
}
export default HeadBar;
