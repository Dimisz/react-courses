import React from 'react';

class Loader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="ui active dimmer">
          <div className="ui big text loader">
            {this.props.message}
          </div>
        </div>
    );
  };
};

Loader.defaultProps = {
  message: 'Loading...'
};

export default Loader;