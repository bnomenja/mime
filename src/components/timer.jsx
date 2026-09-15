import { useState, useEffect } from 'react';

export function Timer({ duration }) {
    const [time, setTime] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setTime(duration);
        setIsRunning(false);
    }, [duration]);

    useEffect(() => {
        if (!isRunning || time <= 0) {
            return;
        }

        const interval = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, time]);

    const pause = () => {
        setIsRunning(false);
    };

    const resume = () => {
        setIsRunning(true);
    };

    const restart = () => {
        setTime(duration);
        setIsRunning(false);
    };

    return (
        <div className="timer">
            <p>{time}</p>

            <div className="timer-controls">
                <button
                    className="timer-button"
                    aria-label="Pause"
                    onClick={pause}
                >
                    ❚❚
                </button>

                <button
                    className="timer-button"
                    aria-label="Resume"
                    onClick={resume}
                >
                    ▶
                </button>

                <button
                    className="timer-button"
                    aria-label="Restart"
                    onClick={restart}
                >
                    ↻
                </button>
            </div>
        </div>
    );
}