import Pizza from "./Pizza";
import { pizzaData } from "../data";

const Menu = () => {
  const renderedPizzas = pizzaData.map((pizza) => {
    return(
      <Pizza key={pizza.name} pizza={pizza}/>
    );
  });
  return(
    <main className="menu">
      <h2>
        Our Menu
      </h2>
      <ul className="pizzas">
        {renderedPizzas}
      </ul>
    </main>
  )
}

export default Menu;