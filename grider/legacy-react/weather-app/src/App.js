import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err})
    );
  }



  render(){
    return(
      <div>
        {this.state.errorMessage
        ? 'Unable to retrieve location'
      : `Latitude ${this.state.lat}`
      }
      </div>

    );
  }
}

export default App;