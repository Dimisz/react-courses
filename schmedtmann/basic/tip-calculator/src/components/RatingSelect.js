const RatingSelect = ({children, tip, setTip}) => {
  // const [selectedLevel, setSelectedLevel] = useState('ok');
  const handleSelect = (e) => {
    // console.log(e.target.value);
    setTip(e.target.value);
  }

  const levels = [
    { id: '0', text: 'No tips' },
    { id: '5', text: 'It was fine (5%)' },
    { id: '10', text: 'It was good (10%)' },
    { id: '20', text: 'Amazing service! (20%)' },
  ];

  const renderedLevels = levels.map((level) => {
    return(
      <option key={level.id} value={level.id}>
        {level.text}
      </option>
    );
  });

  return(
    <>
      <label htmlFor='rating'>{children}</label>
      <select 
        id='rating' 
        name='rating' 
        onChange={handleSelect} 
        value={tip}
      >
        {renderedLevels}
      </select>
    </>
  )
}

export default RatingSelect;