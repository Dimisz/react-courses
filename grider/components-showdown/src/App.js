import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <div>
        <Button success rounded>First Button</Button>
      </div>
      <div>
       <Button danger outline>Second Button</Button>
      </div>
      <div>
        <Button primary rounded outline>Third Button</Button>
      </div>
      <div>
          <Button warning rounded>Fourt Button</Button>
      </div>
      <div>
          <Button secondary>Fourt Button</Button>
      </div>
    </div>
  );
}

export default App;