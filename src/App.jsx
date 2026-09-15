import { getSomeWords } from './services/wordsSelector'
import { getRandomIndex } from './services/index'

import { ChangeDifficulty, ChangeTimer } from './components/parameter'
import { Timer } from './components/timer'
import { AddTeam } from './components/addTeams'

import { useState, useEffect } from 'react'
import './App.css'

let set = new Set();

function App() {
    const [timer, setTimer] = useState(60);
    const [difficulty, setDifficulty] = useState("easy");

    const [words, setWords] = useState(getSomeWords(difficulty));
    const [index, setIndex] = useState(getRandomIndex(words.length, set));

    const [showParams, setShowParams] = useState(false);
    const [teams, setTeams] = useState(new Map());

    useEffect(() => {
        const newWords = getSomeWords(difficulty);

        set.clear();
        setWords(newWords);
        setIndex(getRandomIndex(newWords.length, set));
    }, [difficulty]);

    const incrementIndex = () => {
        setIndex(getRandomIndex(words.length, set));
    };

    return (
        <>
            <div
                className="top-controls"
                onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                        setShowParams(false);
                    }
                }}
            >
                <button
                    className="icon-button settings-button"
                    aria-label="Settings"
                    onClick={() => setShowParams(!showParams)}
                >
                    ⚙
                </button>

                <AddTeam
                    teams={teams}
                    setTeams={setTeams}
                />

                {showParams &&
                    <div className="settings-menu">
                        <ChangeDifficulty
                            difficulty={difficulty}
                            setDifficulty={(value) => {
                                setDifficulty(value);
                                setShowParams(false);
                            }}
                        />

                        <ChangeTimer
                            timer={timer}
                            setTimer={(value) => {
                                setTimer(value);
                                setShowParams(false);
                            }}
                        />
                    </div>
                }
            </div>

            <main className="game">
                <h1>{words[index]}</h1>

                <div className="game-actions">
                    <button
                        className="action-button validate"
                        aria-label="Validate"
                        onClick={incrementIndex}
                    >
                        ✓
                    </button>

                    <button
                        className="action-button pass"
                        aria-label="Pass"
                        onClick={incrementIndex}
                    >
                        ↷
                    </button>
                </div>

                <Timer
                    duration={timer}
                />
            </main>

            <footer>
              {" "}
              <a href="https://github.com/bnomenja" target="_blank" rel="noopener noreferrer">
              Tsingy tia jeux
              </a>
            </footer>
        </>
    )
}

export default App