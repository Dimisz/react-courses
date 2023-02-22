import './Date.css'
const Date = ({date}) => {
  
  const day = date.toLocaleString('en-US', {day: '2-digit'} )
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return(
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  )
}

export default Date;