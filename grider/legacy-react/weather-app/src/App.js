import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { lat: null, errorMessage: '' };
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }


  render(){
    return(
      <div>
        {this.state.errorMessage
        ? `Error: ${this.state.errorMessage}`
      : `Latitude ${this.state.lat ? this.state.lat : 'Loading...'}`
      }
      </div>

    );
  }
}

export default App;