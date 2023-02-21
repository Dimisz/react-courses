const Date = ({date}) => {
  
  const day = date.toLocaleString('en-US', {day: '2-digit'} )
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return(
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  )
}

export default Date;