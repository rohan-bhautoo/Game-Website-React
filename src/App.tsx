import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Mauritius", "Canada", "England", "South Africa"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
