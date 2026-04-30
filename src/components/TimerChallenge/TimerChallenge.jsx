import { useRef, useState } from 'react';

import ResultModal from '../ResultModal/ResultModal';

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timerRef = useRef();
    const resultModalRef = useRef();

    const handleTimerButton = timerStarted ? handleStopButton : handleStartButton;

    function handleStartButton() {
        setTimerStarted(true);

        timerRef.current = setTimeout(() => {
            setTimerExpired(true);
            resultModalRef.current.open();
        }, targetTime * 1000);
    }

    function handleStopButton() {
        clearTimeout(timerRef.current);
        setTimerStarted(false);
    }

    return (
        <>
            <ResultModal result="lost" targetTime={targetTime} ref={resultModalRef}/>
            <section className='challenge'>
                <h2>{title}</h2>
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
        </>
    )
}