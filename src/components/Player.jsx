import { useRef, useState } from "react";

export default function Player() {
  const playerNameInputRef = useRef(null);
  const [playerName, setPlayerName] = useState('unknown');

  function handleOnClickSetName() {
    const playerName = playerNameInputRef.current.value;
    setPlayerName(playerName);
    playerNameInputRef.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName || 'unknown'}</h2>
      <p>
        <input ref={playerNameInputRef} type="text"/>
        <button onClick={handleOnClickSetName}>Set Name</button>
      </p>
    </section>
  );
}
