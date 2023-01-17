import React from 'react';

const CommentDetail = ({author, timePosted, text, imageSrc}) => {
  return(
    <div className='comment'>
        <a href="/" className='avatar'>
          <img alt='avatar' src={imageSrc} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            {author}
          </a>
          <div className='metadata'>
            <span className='date'>{timePosted}</span>
          </div>
          <div className='text'>
            {text}
          </div>
        </div>
      </div>
  );
};

export default CommentDetail;

