import React, { Component } from 'react';
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: "one",
            isrolling: false
        }
        this.roll = this.roll.bind(this)
    }
    roll() {
        const randNum1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const randNum2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({
            die1: randNum1,
            die2: randNum2,
            isrolling: true
        });

        setTimeout(() => {
            this.setState({
                isrolling: false
            })
        }, 1000)
    }
    render() {
        console.log(this.props);
        return (
            <div className="RollDice">
                <Die face={this.state.die1} rolling={this.state.isrolling} />
                <Die face={this.state.die2} rolling={this.state.isrolling} />
                <button disabled={this.state.isrolling} onClick={this.roll}>{this.state.isrolling ? "Rolling..." : "Roll the dice"}</button>
            </div>
        )
    }
}
