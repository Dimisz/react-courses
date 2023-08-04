import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost } from '../store';

const CarForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.form.name;
  });
  const cost = useSelector((state) => {
    return state.form.cost;
  })

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    dispatch(changeCost(Number(event.target.value) || 0));
  }


  return(
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input 
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input 
              className="input is-expanded"
              value={cost}
              onChange={handleCostChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm;