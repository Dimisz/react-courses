import Button from "./Button";

const FormSplitBill = () => {
  return(
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>🐢 Bill Value</label>
      <input type='text' />

      <label>🐍 Your expenses</label>
      <input type='text' />

      <label>🦖 X's expenses</label>
      <input type='text' disabled />

      <label>🐠 Who is paying the bill?</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}


export default FormSplitBill;