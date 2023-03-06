import { Fragment } from 'react';

const Table = ({ data, config }) => {
  const renderedHeaders = config.map((i) => {
    if(i.header){
      return <Fragment key={i.label}>{i.header()}</Fragment>;
    }
    else{
      return <th key={i.label}>{i.label}</th>;
    }
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
              {
                config.map((row) => {
                  return <td key={row.label} className='p-3'>{row.render(fruit)}</td>;
                })
              }
              {/* <td className="p-3">{config[0].render(fruit)}</td>
              <td className='p-3'>
                <div className={`p-3 m-2 ${config[1].render(fruit)}`}></div>
              </td>
              <td className="p-3">{config[2].render(fruit)}</td> */}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;