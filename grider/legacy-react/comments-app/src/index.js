import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom/client';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
  return(
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 2:32PM" 
          text="Great post!"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Mike" 
          timeAgo="Today at 4:34PM" 
          text="Looks good"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 7:53AM" 
          text="Couldn't be better"
          image={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);