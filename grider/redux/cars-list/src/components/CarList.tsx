import { Car } from "../models/car";
import { removeCar, useAppDispatch, useAppSelector } from "../store";

interface Props {
  cars: Car[];
}
const CarList = ({cars}: Props) => {

  const dispatch = useAppDispatch();
  const currentName = useAppSelector(state => state.formState.carName);

  const handleDelete = (id: string) => {
    dispatch(removeCar(id));
  }

  const renderedCars = cars.map((car) => {
    const isOnTheList = (currentName.length > 0) && car.name.toLowerCase().includes(currentName.toLowerCase());

    // console.log(isOnTheList, currentName.length);
    return(
      <div 
        key={car.id} 
        className='panel'
        style={{
          backgroundColor: isOnTheList ? 'red' : ''
          }}
        >
        <p>{car.name} - ${car.value}</p>
        <button 
          className="button is-danger"
          onClick={() => handleDelete(car.id)}>Delete</button>
      </div>
    );
  })
  return(
    <div className="car-list">
      {renderedCars}
    </div>
  );
}

export default CarList;