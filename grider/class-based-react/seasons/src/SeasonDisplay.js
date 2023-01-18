import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it\'s chilly',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
}


const SeasonDisplay = ({lat}) => {
  const currentSeason = getSeason(lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[currentSeason];

  return(
    <div className={`season-display ${currentSeason}`}>
      <i className={`icon-left massive icon ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;