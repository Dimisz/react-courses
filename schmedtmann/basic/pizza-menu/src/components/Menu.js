import Pizza from "./Pizza";
import { pizzaData } from "../data";

const Menu = () => {
  const renderedPizzas = pizzaData.map((pizza) => {
    return(
      <Pizza key={pizza.name} pizza={pizza}/>
    );
  });
  // const renderedPizzas = [];
  return(
    <main className="menu">
      <h2>
        Our Menu
      </h2>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from out stone oven, all organic, all delicious.</p>
      {
      renderedPizzas.length > 0 &&
        <ul className="pizzas">
          {renderedPizzas}
        </ul>
      }
    </main>
  )
}

export default Menu;