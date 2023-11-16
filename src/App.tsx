import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza, // Copy all props of pizza and override toppings prop
      toppings: [
        ...pizza.toppings, // Copy all values of toppings array and add new value
        "Cheese",
      ],
    });
  };

  return <div></div>;
}

export default App;
