import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game, // Copy all props of game and override player prop
      player: {
        ...game.player, // Copy all props of player and override name prop
        name: "Bob",
      },
    });
  };

  return <div></div>;
}

export default App;
