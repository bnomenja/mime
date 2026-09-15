export function ChangeDifficulty({ difficulty, setDifficulty }) {
    return (
        <div className="setting">
            <p className="setting-label">Difficulté</p>

            <div className="setting-options">
                <button
                    className={difficulty === "easy" ? "selected" : ""}
                    onClick={() => setDifficulty("easy")}
                >
                    Facile
                </button>

                <button
                    className={difficulty === "medium" ? "selected" : ""}
                    onClick={() => setDifficulty("medium")}
                >
                    Moyen
                </button>

                <button
                    className={difficulty === "hard" ? "selected" : ""}
                    onClick={() => setDifficulty("hard")}
                >
                    Difficile
                </button>
            </div>
        </div>
    )
}

export function ChangeTimer({ timer, setTimer }) {
    return (
        <div className="setting">
            <p className="setting-label">Temps</p>

            <div className="setting-options">
                {[15, 30, 45, 60, 90, 120, 180, 300].map((value) => (
                    <button
                        key={value}
                        className={timer === value ? "selected" : ""}
                        onClick={() => setTimer(value)}
                    >
                        {value}s
                    </button>
                ))}
            </div>
        </div>
    )
}
