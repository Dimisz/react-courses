import Pizza from "./Pizza";
import { pizzaData } from "../data";
import img from '../images/focaccia.jpg';

const Menu = () => {
  const renderedPizzas = pizzaData.map((pizza) => {
    return(
      <Pizza 
        key={pizza.name}
        imageUrl={img}
        description={pizza.ingredients}
        title={pizza.name}
        price={pizza.price}
      />
  
    )
  })
  return(
    <main className="menu">
      <h2>
        Our Menu
      </h2>
      <div>
        {renderedPizzas}
      </div>
    </main>
  )
}

export default Menu;