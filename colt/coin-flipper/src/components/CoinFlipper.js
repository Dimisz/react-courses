import React from 'react';
import './CoinFlipper.css';

class CoinFlipper extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      side: null,
      headsCount: 0,
      tailsCount: 0, 
      totalCount: 0
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin(){
    const flip = Math.floor(Math.random() * 2);
    this.setState((st) => {
      return {
        ...st,
        side: flip,
        headsCount: st.headsCount + (flip === 0 ? 1 : 0),
        tailsCount: st.tailsCount + (flip === 1 ? 1 : 0),
        totalCount: st.totalCount + 1
      }

    });
  }
  render(){
    const heads = 'https://tinyurl.com/react-coin-heads-jpg';
    const tails = 'https://tinyurl.com/react-coin-tails-jpg';

    return(
      <div className='container'>
        <h1>Let's flip a coin!</h1>
        {/* <img className='image' src={`${this.state.side === 0 ? heads : tails}`} alt={`${this.state.side === 0 ? 'heads' : 'tails'}`}></img> */}
        <h2>{`${this.state.side === 0 ? 'HEADS' : 'TAILS'}`}</h2>
        <p>Got {this.state.headsCount} heads and {this.state.tailsCount} tails out of {this.state.totalCount} flips</p>
        <button className='btn' onClick={this.flipCoin}>Flip Coin</button>
      </div>
    )
  }
}

export default CoinFlipper;