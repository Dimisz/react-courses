const Table = ({ data, config }) => {
  const renderedHeaders = config.map((i) => {
      return <th key={i.label}>{i.label}</th>;
  });

  return(
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {data.map((fruit) => {
          return(
            <tr className="border-b" key={fruit.name}>
              <td className="p-3">{fruit.name}</td>
              <td className='p-3'>
                <div className={`p-3 m-2 ${fruit.color}`}></div>
              </td>
              <td className="p-3">{fruit.score}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;