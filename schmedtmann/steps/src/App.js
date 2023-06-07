import { useState } from "react";

const messages = [
  'Learn React',
  'Apply for jobs',
  'Invest your new income'
];

const App = () => {
  const [count, setCount] = useState(0);

  const nextStepHandler = () => {
    if(count < 2){
      setCount((prev) => prev + 1);
    }
  }

  const previousStepHandler = () => {
    if(count > 0){
      setCount((prev) => prev - 1);
    }
  }

  return(
    <div className="steps">
      <div className="numbers">
        <div 
          className={`${count === 0 ? 'active' : ''}`}
        >1</div>
        <div 
          className={`${count === 1 ? 'active' : ''}`}
        >2</div>
        <div 
          className={`${count === 2 ? 'active' : ''}`}
        >3</div>
      </div>
      <p className="message">{messages[count]}</p>
      <div className="buttons">
        <button 
          onClick={previousStepHandler}
          className="active"
        >Previous</button>
        <button 
          onClick={nextStepHandler}
          className="active">Next</button>
      </div>
    </div>
  );
}

export default App;