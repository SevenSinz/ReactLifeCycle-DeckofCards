import React, { Component } from "react";

export default class Card extends Component {

    render() {
        return (
            <div> 
                <img src={this.props.img} alt=""/>
            </div>
        )
    }
}