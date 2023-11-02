import { Car } from "../models/car";

interface Props {
  cars: Car[];
}

const CarValue = ({cars}:Props) => {
  const total = cars.reduce((sum, car) => sum + (Number(car.value) || 0), 0);
  return(
    <div>Total Cars Value: ${total}</div>
  );
}

export default CarValue;