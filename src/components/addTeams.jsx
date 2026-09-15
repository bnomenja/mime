import { useState } from 'react'

export function AddTeam({ setTeams }) {
    const [showAddTeam, setShowAddTeam] = useState(false);
    const [teamName, setTeamName] = useState("");

    const addTeam = (e) => {
        e.preventDefault();

        setTeams((prev) => {
            const newTeams = new Map(prev);

            newTeams.set(teamName, 0);
            return newTeams;
        })

        setTeamName("");
        setShowAddTeam(false);
    };

    return (
        <>
            <button
                className="icon-button add-team-button"
                aria-label="Add team"
                onClick={() => setShowAddTeam(true)}
            >
                +
            </button>

            {showAddTeam &&
                <div
                    className="team-overlay"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) {
                            setShowAddTeam(false);
                        }
                    }}
                >
                    <form
                        className="team-form"
                        onSubmit={addTeam}
                    >
                        <input
                            type="text"
                            value={teamName}
                            autoFocus={true}
                            placeholder="Team name"
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </form>
                </div>
            }
        </>
    )
}