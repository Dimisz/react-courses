import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CardList from "./CardList/CardList";

import './App.css';

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

  

  return(
    <>
    <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBar monsters={monsters} filterHandler={filterHandler}/>
      <CardList monsters={filteredMonsters}/>
    </>
  );
}

export default App;