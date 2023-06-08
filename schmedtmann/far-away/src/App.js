import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: true },
  { id: 4, description: "Socks", quantity: 12, packed: false },
];

const App = () => {
  const [items, setItems] = useState(initialItems);

  return(
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats />
    </div>
  );
}

export default App;