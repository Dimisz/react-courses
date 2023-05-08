import React from 'react';
import axios from 'axios';

class ZenQuote extends React.Component {
  constructor(props){
    super(props);
    this.state = { quote: '', isLoaded: false };
  }

  componentDidMount(){
    axios.get('https://api.github.com/zen')
      .then((res) => {
        setTimeout(
          function(){
            this.setState({ quote: res.data, isLoaded: true });
          }.bind(this),
          3000
        );
      })
  }
  render(){
    return(
      <div>
        {
          this.state.isLoaded 
          ?
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div> 
          :
          <div className='loader'>Loading</div>
        }
      </div>
    )
  }
}

export default ZenQuote;