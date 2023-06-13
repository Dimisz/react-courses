import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
import StarRating from './components/StarRating/StarRating';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// root.render(<App/>);
const firstRatingSetter = (rating) => {
  console.log(`from first outer setter, rating: ${rating} has been set.`)
}
const secondRatingSetter = (rating) => {
  console.log(`from second outer setter, rating: ${rating} has been set.`)
}
const thirdRatingSetter = (rating) => {
  console.log(`from third outer setter, rating: ${rating} has been set.`)
}
root.render(
  <>
    <StarRating maxRating={10} defaultRating={6} onSet={firstRatingSetter}/>
    <StarRating color="red" size={24} onSet={secondRatingSetter}/>
    <StarRating maxRating={14} size={15} color="blue" onSet={thirdRatingSetter}/>
  </>
  );

