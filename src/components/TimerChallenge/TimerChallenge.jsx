import { useRef, useState, useEffect } from 'react';

import ResultModal from '../ResultModal/ResultModal';

export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerRef = useRef();
    const resultModalRef = useRef();

    const timerIsActive = timeRemaining < (targetTime * 1000) && timeRemaining > 0;
    const handleTimerButton = timerIsActive ? handleStopButton : handleStartButton;

    if (timeRemaining <= 0) {
        clearInterval(timerRef.current);
        resultModalRef.current.open();
    }

    function handleStartButton() {
        timerRef.current = setInterval(() => {
            setTimeRemaining((prev) => prev - 10);
        }, 10);
    }

    function handleStopButton() {
        clearInterval(timerRef.current);
        resultModalRef.current.open();
    }

    function handleModalClose() {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModal
                targetTime={targetTime}
                timeRemaining={timeRemaining}
                handleModalClose={handleModalClose}
                ref={resultModalRef}
            />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>
                    {`${targetTime} second${targetTime > 1 ? 's' : ''}`}
                </p>
                <p>
                    <button onClick={handleTimerButton}>
                        {timerIsActive ? 'Stop' : 'Start'}
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is running...' : 'Timer is inactive'}
                </p>
            </section>
        </>
    )
}