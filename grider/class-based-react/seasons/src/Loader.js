import React from 'react';

class Loader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="ui active dimmer">
          <div className="ui big text loader">Loading...</div>
        </div>
    );
  };
};

export default Loader;