import { useRef, useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timerRef = useRef();

    const handleTimerButton = timerStarted ? handleStopButton : handleStartButton;

    function handleStartButton() {
        setTimerStarted(true);

        timerRef.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStopButton() {
        clearTimeout(timerRef.current);
        setTimerStarted(false);
    }

    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className='challenge-time'>
                {`${targetTime} second${targetTime > 1 ? 's' : ''}`}
            </p>
            <p>
                <button onClick={handleTimerButton}>
                    {timerStarted ? 'Stop' : 'Start'}
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Timer is running...' : 'Timer is inactive'}
            </p>
        </section>
    )
}