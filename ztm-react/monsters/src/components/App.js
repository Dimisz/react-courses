import { useState, useEffect } from "react";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((users) => setMonsters(
      () => {
        return [...users];
      }
    ));
    // console.log(res);
  }, []);


  const renderedMonsters = monsters.map((monster) => {
    return(
      <div key={monster.id}>
        <h1>{monster.name}</h1>
      </div>
    );
  });

  return(
    <>
      {renderedMonsters}
    </>
  );
}

export default App;