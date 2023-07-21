import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Mauritius", "Canada", "England", "South Africa"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
