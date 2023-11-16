import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const [isLoading, setLoading] = useState(false);

  return <div></div>;
}

export default App;
