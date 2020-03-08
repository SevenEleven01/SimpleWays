import React, { Component } from 'react';
import HeadBar from '../../components/header-bar/header-bar';
import './ways.css';
import '../../components/button/button.css';

export class ways extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numWay: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlenumWay = this.handlenumWay.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submited. value is', this.state.numWay);
      }
      handlenumWay(event) {
        console.log('numWay was changed', event.target.value);
        this.setState({numWay: event.target.value});
      }
    render() {
        return (
            <div className="ways-wrapper">
                <HeadBar />
                <div className="ways">
                <h1 className="ways-title">Маршруты</h1>
                <form onSubmit={this.handleSubmit}>
                <input
                 className="login ways-input"
                  type="number"
                   name="ways"
                    placeholder="Введите номер маршрута"
                    value={this.state.numWay}
                     onChange={this.handlenumWay}
                    />
                <button className="ways-button button"><i class="fas fa-search"></i></button>
                <span className="ways-radio_block">
                    <input id="input1" className="ways-radio_button" type="radio" name="way" />
                    <label for="input1" className="ways-radio_block-item" >Номер маршрута</label>
                    <input id="input2" className="ways-radio_button" type="radio" name="way" />
                    <label for="input2" className="ways-radio_block-item" >Название остановки</label>
                </span>
                </form>
                </div>
            </div>
        );
    }
}

export default ways;
