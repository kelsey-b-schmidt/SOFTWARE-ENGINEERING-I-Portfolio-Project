import React from 'react'

export default function PuzzleComponent(
    {type, unsolvedBoard, solvedBoard}){

    if (type==="unsolved"){
        return (
            <div>
                <table class="no-print" id="unsolvedPuzzleTable">
                    <tbody>
                    {unsolvedBoard.map((item) => {
                        return (
                            <tr>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[6]}</td>
                                <td>{item[7]}</td>
                                <td>{item[8]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return (
            <div>
                <table class="no-print" id="solvedPuzzleTable">
                    <tbody>
                    {solvedBoard.map((item) => {
                        return (
                            <tr>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[6]}</td>
                                <td>{item[7]}</td>
                                <td>{item[8]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
