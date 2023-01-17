import React from 'react';


class App extends React.Component {
  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), // success callback
      (err) => console.log(`ERROR: ${err}`) // failure callback
    );

    return <div>Latitude: </div>;
  }
}

export default App;