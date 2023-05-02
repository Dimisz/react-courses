import { useState } from "react";

const monstersList = [
  {
    name: 'Linda'
  },
  {
    name: 'Frank'
  },
  {
    name: 'Jacky'
  },
];

const App = () => {
  
  const [monsters, setMonsters] = useState(monstersList);
  const renderedMonsters = monsters.map((monster) => {
    return <h1 key={monster.name}>{monster.name}</h1>
  });

  return(
    <>
      {renderedMonsters}
    </>
  );
}

export default App;