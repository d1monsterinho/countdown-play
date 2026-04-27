import { useRef, useState } from "react";

export default function Player() {
  const playerNameInputRef = useRef(null);
  const [playerName, setPlayerName] = useState('unknown player');

  function handleOnClickSetName() {
    const enteredPlayerName = playerNameInputRef.current.value;
    setPlayerName(enteredPlayerName);
    playerNameInputRef.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={playerNameInputRef} type="text"/>
        <button onClick={handleOnClickSetName}>Set Name</button>
      </p>
    </section>
  );
}
