import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return(
    <>
      <h1>Cars App</h1>
      <CarForm/>
      <CarList/>
      <CarSearch/>
      <CarValue/>
    </>
  );
}

export default App;