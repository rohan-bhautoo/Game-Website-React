import { useState } from "react";
import Message from "./Message";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "sad"]);

    // Remove
    setTags(tags.filter((tag) => tag != "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <>
      <Message></Message>
      <Message></Message>
    </>
  );
}

export default App;
