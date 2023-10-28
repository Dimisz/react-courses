import { useState } from "react";
import Star from "./Star";

interface Props {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  currentRating?: number;
  setUserRating: (rating: number) => void;
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
};

const starContainerStyle = {
  display: 'flex',
};


const StarRating = ({ maxRating = 4, color = '#fcc419', size = 36, className = '', currentRating = 0, setUserRating }: Props) => {
  const [rating, setRating] = useState(currentRating);
  const [tempRating, setTempRating] = useState(0);

  const handleSetRating = (rating: number) => {
    setRating(rating);
    setUserRating(rating);
  }

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color: color,
    fontSize: `${size}px`
  };
  return(
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({length: maxRating}, (_, i) => {
            return(
              <Star 
                key={i} 
                handleClick={() => handleSetRating(i+1)}
                isFilled={ tempRating ? tempRating >= (i + 1) : (i + 1) <= rating }
                onHoverIn={ () => setTempRating(i+1)}
                onHoverOut={() => setTempRating(0)}
                color={color}
                size={size}
              />
            )}
          )
        }
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  );
}

export default StarRating;