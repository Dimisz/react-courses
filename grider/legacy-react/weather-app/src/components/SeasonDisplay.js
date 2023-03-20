import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    title: "summer",
    text: "Let's hit the beach!",
    icon: "sun"
  },
  winter: {
    title: "winter",
    text: "Brrr, it's chilly",
    icon: "snowflake"
  }
}
const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  }
  else {
    return lat < 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({latitude}) => {
  const season = seasonConfig[getSeason(latitude, new Date().getMonth())];
  
  return(
    <div className={`season-display ${season.title}`}>
      <i className={`icon-left icon massive ${season.icon}`} />
      <h1>{season.text}</h1>
      <i className={`icon-right icon massive ${season.icon}`} />
    </div>
  );
}

export default SeasonDisplay;