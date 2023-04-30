import Post from "./components/Post";

const App = () => {
  return(
    <>
      <h1>Hello World</h1>
      <Post 
        author='Vladimir'
        text='React is great!'
      />
      <Post 
        author='John Doe'
        text='Node is great!'
      />
    </>
  );
}

export default App;