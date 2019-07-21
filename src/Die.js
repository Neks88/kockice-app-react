import React, { Component } from 'react';
import "./Die.css";

export default class Die extends Component {
    render() {
        let objekat = {
            name: "Slavko",
            lastName: "Sokovic",
            zanimanje: "penzioner"
        }

        console.log({ ...objekat, name: "Zoran" });
        return (
            <div>
                <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && "rolling"}`}></i>
            </div>
        )
    }
}
