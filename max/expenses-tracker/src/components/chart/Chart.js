import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({data}) => {
  const valuesArray = data.map((i) => i.value);
  const totalMax = Math.max(...valuesArray);
  return(
    <div className='chart'>
      {data.map((i) => (
        <ChartBar 
          key={i.label}
          value={i.value}
          maxValue={totalMax}
          label={i.label}
          />
        )
      )}
    </div>
  );
}

export default Chart;