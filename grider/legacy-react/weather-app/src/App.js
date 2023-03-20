import React from 'react';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

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

  renderContent(){
    if(this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && !this.state.lat){
      return <Spinner />;
    }

    return(
        <SeasonDisplay latitude={this.state.lat} />
    );
  }

  render(){
    return(
      <div className='red-border'>
        {this.renderContent()}
      </div>
    )
  }
}

export default App;