import React from 'react'

export default function PrintPageComponent (
    {unsolvedBoard, solvedBoard}){
    return (
        <div>
            <br/>
            <span>Puzzle</span>
            <table>
                {unsolvedBoard.map((row) => {
                    return (
                        <tr>
                            {row.map((cell) => {
                                if (cell > 0) {
                                    return (
                                        <td id="color">{cell}</td>
                                    )
                                }
                                else {
                                    return (
                                        <td>{cell}</td>
                                    )
                                }
                            })}
                        </tr>
                    )
                })}
            </table>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <span>Solution</span>
            <table>
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

