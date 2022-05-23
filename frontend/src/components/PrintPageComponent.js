import React from 'react'

export default function PrintPageComponent (
    {unsolvedBoard, solvedBoard}){
    return (
        <div >
            <table>
                <caption>Puzzle</caption>
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
            <table>
                <caption>Solution</caption>
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
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

