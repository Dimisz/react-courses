import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-green-500', score: 1 },
    { name: 'Lime', color: 'bg-lime-500', score: 4 },
  ];

  const config = [
    { label: 'Name' },
    { label: 'Color' },
    { label: 'Score' }
  ];

  return (
  <div>
    <Table data={data} config={config}/>
  </div>
  );
}

export default TablePage;