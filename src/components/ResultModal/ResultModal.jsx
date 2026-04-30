export default function ResultModal({ result, targetTime, dialogRef }) {
    return (
        <dialog className="result-modal" ref={dialogRef}>
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime}</strong> seconds.
            </p>
            <p>
                You stopped the timer with <strong>X</strong> seconds left/over.
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}