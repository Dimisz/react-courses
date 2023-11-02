import { Car } from "../models/car";
import { removeCar, useAppDispatch, useAppSelector } from "../store";

interface Props {
  cars: Car[];
}
const CarList = ({cars}: Props) => {

  const dispatch = useAppDispatch();
  const currentName = useAppSelector(state => state.formState.carName);

  const handleDelete = (id: number) => {
    dispatch(removeCar(id));
  }

  const renderedCars = cars.map((car) => {
    const isOnTheList = (currentName.length > 0) && car.name.toLowerCase().includes(currentName.toLowerCase());

    // console.log(isOnTheList, currentName.length);
    return(
      <ul 
        key={car.id} 
        style={{
          display: 'flex', 
          alignItems:'center', 
          justifyContent:'space-between',
          border: '1px solid white',
          backgroundColor: isOnTheList ? 'red' : ''
          }}
        >
        <div>{car.name} - ${car.value}</div>
        <button onClick={() => handleDelete(car.id)}>Delete</button>
      </ul>
    );
  })
  return(
    <ul>
      {renderedCars}
    </ul>
  );
}

export default CarList;