import './App.css'
import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'
import { useAppSelector } from './store'

function App() {
  const cars = useAppSelector(state => state.carsState.cars);
  const searchTerm = useAppSelector(state => state.searchState.searchTerm);
  let filteredCars = cars;
  if(searchTerm.length > 0){
    filteredCars = cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return (
    <div className='container is-fluid'>
      <CarForm />
      <CarSearch />
      <CarList cars={filteredCars} />
      <CarValue cars={filteredCars}/>
    </div>
  )
}

export default App
