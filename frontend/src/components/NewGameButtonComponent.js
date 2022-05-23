import React, {useEffect} from 'react'

export default function NewGameButtonComponent (
    {setType, setToggled, setUnsolvedBoard, setSolvedBoard}){



    useEffect(() => {
        const getBoard = async () => {
            const response = await fetch("/board")
            const response_json = await response.json()
            setUnsolvedBoard(response_json.unsolved_board)
            setSolvedBoard(response_json.solved_board)
        }
        getBoard().then()
    }, [setSolvedBoard,setUnsolvedBoard])

    const handleSubmitEasy = () => {
        const newBoard = async () => {
            const response = await fetch("/board",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    difficulty: "easy"
                })
            })
            const response_json = await response.json()
            setUnsolvedBoard(response_json.unsolved_board)
            setSolvedBoard(response_json.solved_board)
            setType("unsolved")
            setToggled(false)
        }
        const answer = window.confirm("Starting a new game will erase the current game!\n" +
            "Do you still wish to proceed?")
        if (answer) {
            newBoard().then()
        }
    }

    const handleSubmitMedium = () => {
        const newBoard = async () => {
            const response = await fetch("/board",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    difficulty: "medium"
                })
            })
            const response_json = await response.json()
            setUnsolvedBoard(response_json.unsolved_board)
            setSolvedBoard(response_json.solved_board)
            setType("unsolved")
            setToggled(false)
        }
        const answer = window.confirm("Starting a new game will erase the current game!\n" +
            "Do you still wish to proceed?")
        if (answer) {
            newBoard().then()
        }
    }

    const handleSubmitHard = () => {
        const newBoard = async () => {
            const response = await fetch("/board",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    difficulty: "hard"
                })
            })
            const response_json = await response.json()
            setUnsolvedBoard(response_json.unsolved_board)
            setSolvedBoard(response_json.solved_board)
            setType("unsolved")
            setToggled(false)
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
                    onClick={handleSubmitEasy}
                >
                    <span>Easy</span>
                </button>
                <button
                    class="orange"
                    title="Start a new Medium game"
                    onClick={handleSubmitMedium}
                >
                    <span>Medium</span>
                </button>
                <button
                    class="red"
                    title="Start a new Hard game"
                    onClick={handleSubmitHard}
                >
                    <span>Hard</span>
                </button>

            </div>
        </div>
    )
}

