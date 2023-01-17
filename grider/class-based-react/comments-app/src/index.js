import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
const App = () => {
  return(
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail author="Sam" 
                      timePosted="Today at 2:15 AM" 
                      text="Nice blog!" 
                      imageSrc={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" 
                      timePosted="Yesterday at 4:34 PM"
                      text="Wow! Great job!" 
                      imageSrc={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Mary" 
                      timePosted="Today at 6:55 AM"
                      text="Hi there who am I?" 
                      imageSrc={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);