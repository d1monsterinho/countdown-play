import Player from './components/player/Player.jsx';
import Timer from './components/timerChallenge/TimerChallenge.jsx'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title='Easy' targetTime={1} />
        <Timer title='Not so easy' targetTime={5} />
        <Timer title='Tough' targetTime={10} />
        <Timer title='Impossible' targetTime={15} />
      </div>
    </>
  );
}

export default App;
