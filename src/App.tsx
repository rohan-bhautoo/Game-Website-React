import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Mauritius", "Canada", "England", "South Africa"];
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  let count = 0;

  const handleSelectItem = () => {
    setVisibility(true);
    count++;
    console.log(isVisible);
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
