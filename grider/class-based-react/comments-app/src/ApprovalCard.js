import React from 'react';

const ApprovalCard = ({children}) => {
  return(
    <div className='ui card'>
      <div className='content'>
        {children}
      </div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui baseic red button'>Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;