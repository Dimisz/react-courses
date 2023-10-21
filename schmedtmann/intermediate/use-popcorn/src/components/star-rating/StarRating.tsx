import { useState } from "react";
import Star from "./Star";

interface Props {
  maxRating?: number;
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
};

const starContainerStyle = {
  display: 'flex',
};

const textStyle = {
  lineHeight: '1',
  margin: '0'
};

const StarRating = ({ maxRating = 4 }: Props) => {
  const [rating, setRating] = useState(0);
  return(
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({length: maxRating}, (_, i) => {
          return(
            <Star key={i} handleClick={() => setRating(i+1)}/>
          )
        })}
      </div>
      <p style={textStyle}>{rating || ''}</p>
    </div>
  );
}

export default StarRating;