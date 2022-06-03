import React from 'react'

export default function NewGameButtonComponent (
    {setToggled, setUnsolvedBoard, setSolvedBoard}){

    const handleSubmit = (difficulty) => {
        const newBoard = async () => {
            const response = await fetch("/board",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    difficulty: difficulty
                })
            })
            const response_json = await response.json()
            setUnsolvedBoard(response_json.unsolved_board)
            setSolvedBoard(response_json.solved_board)
            setToggled(false)
            document.getElementById("solvedPuzzleTable").style.display = "none";
            document.getElementById("unsolvedPuzzleTable").style.display = "grid";
        }
        const answer = window.confirm("Starting a new game will erase the current game!\n" +
            "Do you still wish to proceed?")
        if (answer) {
            newBoard().then()
        }
    }

    return (
        <div>
            <br/>
            <span>Start a New Game by clicking an option below:</span>
            <div>
                <button
                    class="green"
                    title="Start a new Easy game"
                    onClick={() => handleSubmit("easy")}
                >
                    <span>Easy</span>
                </button>
                <button
                    class="orange"
                    title="Start a new Medium game"
                    onClick={() => handleSubmit("medium")}
                >
                    <span>Medium</span>
                </button>
                <button
                    class="red"
                    title="Start a new Hard game"
                    onClick={() => handleSubmit("hard")}
                >
                    <span>Hard</span>
                </button>
            </div>
        </div>
    )
}

