import React from 'react';
import axios from 'axios';

class ZenQuote extends React.Component {
  constructor(props){
    super(props);
    this.state = {quote: ''};
  }

  componentDidMount(){
    axios.get('https://api.github.com/zen')
      .then((res) => {
        setTimeout(
          function(){
            this.setState({quote: res.data});
          }.bind(this),
          3000
        );
      })
  }
  render(){
    return(
      <div>
        <div className='loader'></div>
        <h1>Always remember...</h1>
        <p>{this.state.quote}</p>
      </div>
    )
  }
}

export default ZenQuote;