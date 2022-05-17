import React from 'react'

export default function NewGameButtonComponent ({setBoard}){

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBoard = async () => {
            const response = await fetch("/board",{
                method: "POST"
            })
            const response_json = await response.json()
            setBoard(response_json.current_board)
        }
        const answer = window.confirm("Starting a new game will erase the current game!\n" +
            "Do you still wish to proceed?")
        if (answer) {
            newBoard()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit"
                        className="button red-hover"
                        title="Erase current game"
                >
                    <img src="new.png" alt="Trash Can"/>
                    <span>&nbsp;&nbsp;New Game</span>
                </button>
            </form>
        </div>
    )
}

