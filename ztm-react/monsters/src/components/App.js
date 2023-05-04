import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((users) => {
      setMonsters(users);
      setFilteredMonsters(users);
    });
    // console.log(res);
  }, []);

  const filterHandler = (monstersList) => {
    setFilteredMonsters(() => {
      return [...monstersList]
    })
  }

  const renderedMonsters = filteredMonsters.map((monster) => {
    return(
      <div key={monster.id}>
        <h1>{monster.name}</h1>
      </div>
    );
  });

  return(
    <>
      <SearchBar monsters={monsters} filterHandler={filterHandler}/>
      {renderedMonsters}
    </>
  );
}

export default App;