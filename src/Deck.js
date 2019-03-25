import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck"

export default class Deck extends Component {

    constructor(){
        super()
        this.state = {
            deckId: "",
            imgUrl:"",
            deckComplete: false
        }
        this.getNewCard=this.getNewCard.bind(this);
    }

    async componentDidMount(){
        let response = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
        this.setState({deckId: response.data.deck_id});
    }

    async getNewCard(){
        // debugger
        let response = await axios.get(`${BASE_URL}/${this.state.deckId}/draw/?count=1`);      
        this.setState({ imgUrl: response.data.cards[0].image,
                        deckComplete: !response.data.remaining});
    }

    render(){
        if (!this.state.deckComplete) {
            return(
                <div>
                    <button onClick={this.getNewCard}> Get Card! </button>
                    <Card img={this.state.imgUrl} />
                </div>   
            )
        }

        return <h1> No more cards left! </h1>
    }
}
