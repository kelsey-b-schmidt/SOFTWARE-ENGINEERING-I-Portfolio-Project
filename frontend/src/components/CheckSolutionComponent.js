import React from 'react'

export default function CheckSolutionComponent (
    {submission, solvedBoard}){

    function checkSolution() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (solvedBoard[i][j] === submission[i][j]) {
                    continue
                }
                else {
                    alert("Sorry, that's not right! Try again!")
                    return
                }
            }
        }
        alert("Congratulations, you solved the puzzle!" +
        "\nYou can start a new game at any time.")
    }

    return (
        <button onClick={checkSolution}
                title="Check your entries">
            <img src="checkbox.png" alt="Checkbox - Checked" />
            <span>&nbsp;&nbsp;Submit Solution</span>
        </button>
    )
}