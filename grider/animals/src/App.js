import { useState } from 'react';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}


export default function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Add Animal
            </button>
        </div>
    )
};

//export default App;