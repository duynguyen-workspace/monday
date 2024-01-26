import useRoutesElements from "./routes/useRoutesElements";

function App() {
  let elements = useRoutesElements()

  return (
    <>
      {elements}
    </>
  );
}

export default App;
