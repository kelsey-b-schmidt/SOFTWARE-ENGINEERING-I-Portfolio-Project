import React from 'react'

export default function PuzzleComponent(
    {unsolvedBoard, solvedBoard, submission, setSubmission}){

    function handleSubmit (idVal) {
        let newArray = submission
        newArray[parseInt(idVal[0])][parseInt(idVal[1])] = parseInt(document.getElementById(idVal).value)
        setSubmission(newArray)
    }


        function fillSubmissionUnsolved () {
            let newArray = submission
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (unsolvedBoard[i][j] > 0) {
                        newArray[i][j] = unsolvedBoard[i][j]
                    }
                }
            }
            setSubmission(newArray)
        }

        fillSubmissionUnsolved()

    return (
        <div>
            <table class="grid" id="unsolvedPuzzleTable">
                {unsolvedBoard.map((row, index1) => {
                    return (
                        <tr>
                            {row.map((cell, index2) => {
                                if (cell > 0) {
                                    return (
                                        <td id="color">{unsolvedBoard[index1][index2]}
                                        </td>
                                    )
                                }
                                else {
                                    let idVal = index1.toString()+index2.toString()
                                    return (
                                        <td>
                                            <input class="input" placeholder="" id={idVal} onInput={() => handleSubmit(idVal)}/>
                                        </td>
                                    )
                                }
                            })}
                        </tr>
                    )
                })}
            </table>
            <table className="grid" id="solvedPuzzleTable">
                {solvedBoard.map((row, index1) => {
                    return (
                        <tr>
                            {row.map((cell, index2) => {
                                if (unsolvedBoard[index1][index2] === solvedBoard[index1][index2]) {
                                    return (
                                        <td id="color">{cell}</td>
                                    )
                                } else {
                                    return (
                                        <td>{cell}</td>
                                    )
                                }
                            })}
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
