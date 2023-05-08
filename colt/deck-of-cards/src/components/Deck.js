import React from 'react';
import axios from 'axios';
import './Deck.css';

import Card from './Card';

const API_BASE_URL = 'https://www.deckofcardsapi.com/api/deck';

class Deck extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      deck: null, 
      drawnCards: [] 
    }
    this.getCard = this.getCard.bind(this);
  }

  async getCard(){
    const angle = Math.random() * 90 - 45;
    const xPos = Math.random() * 40 - 20;
    const yPos = Math.random() * 40 - 20;
    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

    
    try {
      const deck_id = this.state.deck.deck_id;
      const cardUrl = `${API_BASE_URL}/${deck_id}/draw`
      const cardRes = await axios.get(cardUrl);
      if(cardRes.data.remaining === 0){
        // throw new Error('No cards remaining!');
      }
      console.log(cardRes.data);
      const card = cardRes.data.cards[0];
      this.setState((st) => ({
        drawnCards: [
          ...st.drawnCards,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`,
            transformStyle: transform
          }
        ]
      }))
    }
    catch(TypeError){
      alert("Hasn't fetched the deck yet. Wait a second");
    }
    
    
  }

  async componentDidMount(){
    let res = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({
      deck: res.data
    })
  }

  render(){
    const cards = this.state.drawnCards.map((card) => {
      return(
        <Card 
          key={card.id}
          name={card.name}
          image={card.image}
          transformStyle={card.transformStyle}
        />
      )
    });

    return(
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Get Card</button>
        <div className='deck-cardarea'>{cards}</div>
      </div>
    )
  }
}

export default Deck;