import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { lat: null, errorMessage: '' };
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      }, // success callback
      (err) => {
        this.setState({ errorMessage: err.message });
      } // failure callback
    );
    console.log('component mounted');
  }

  componentDidUpdate(){
    console.log('component got updated');
  }

  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    else if(!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>
    }
    else if(!this.state.errorMessage && !this.state.lat){
      return <div>Getting geolocation...</div>;
    }
  }
}

export default App;