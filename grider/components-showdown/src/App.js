import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <div>
        <Button success>First Button</Button>
      </div>
      <div>
       <Button danger>Second Button</Button>
      </div>
      <div>
        <Button primary>Third Button</Button>
      </div>
      <div>
          <Button warning>Fourt Button</Button>
      </div>
    </div>
  );
}

export default App;