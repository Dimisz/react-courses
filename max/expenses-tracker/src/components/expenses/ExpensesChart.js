import Chart from "../chart/Chart";

const ExpensesChart = ({expenses}) => {
  // console.log(`from expenses chart, ${expenses}`);
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  expenses.map((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  })
  // for (let expense in expenses){
  //   const expenseMonth = expense.date.getMonth();
  //   chartDataPoints[expenseMonth].value += expense.amount;
  // }
  return(
    <Chart data={chartDataPoints}/>
  );
}

export default ExpensesChart;