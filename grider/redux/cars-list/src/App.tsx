import './App.css'
import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'
import { useAppSelector } from './store'

function App() {
  const cars = useAppSelector(state => state.carsState.cars);
  const searchResults = useAppSelector(state => state.carsState.searchResults);

  return (
    <>
      <CarForm />
      <CarSearch />
      {
        searchResults.length > 0
        ?
        <>
          <CarList cars={searchResults}/>
          <CarValue cars={searchResults}/>
        </>
        :
        <>
          <CarList cars={cars}/>
          <CarValue cars={cars}/>
        </>
      }
    </>
  )
}

export default App
