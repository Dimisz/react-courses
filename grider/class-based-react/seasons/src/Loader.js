import React from 'react';
import './Loader.css';

class Loader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  };
};

export default Loader;