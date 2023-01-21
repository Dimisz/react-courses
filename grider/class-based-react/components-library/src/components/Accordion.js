import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [indexClicked, setIndexClicked] = useState(null);

  const onTitleClick = (index) => {
    setIndexClicked(index);
  }

  const renderedItems = items.map((item, index) => {
    return( 
    <React.Fragment key={item.title}>
      <div className='title active'
           onClick={() => onTitleClick(index)}
      >
        <i className='dropdown icon'></i>
        {item.title}
      </div>
      <div className='content active'>
        <p>{item.content}</p>
      </div>
    </React.Fragment>);
  });

  return(
    <div className='ui styled accordion'>
      {renderedItems}
      {indexClicked && <p>{indexClicked}</p>}
    </div>
  );
}

export default Accordion;