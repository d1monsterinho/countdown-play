import { useRef, useImperativeHandle } from 'react';

export default function ResultModal({ targetTime, timeRemaining, handleModalClose, ref }) {
    const dialogRef = useRef();

    const userLost = targetTime > timeRemaining;
    const timeRemainingFormatted = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.show();
            }
        }
    });

    return (
        <dialog className="result-modal" ref={dialogRef} onClose={handleModalClose}>
            {userLost && <h2>You lost!</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime}</strong> second{targetTime > 1 ? 's' : ''}.
            </p>
            <p>
                You stopped the timer with <strong>{timeRemainingFormatted}</strong> seconds left.
            </p>
            <form method="dialog" onSubmit={handleModalClose}>
                <button>Close</button>
            </form>
        </dialog>
    );
}