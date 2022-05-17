import React, { useState, useEffect } from 'react'

export default function PuzzleComponent(
    {board, setBoard, isLoading, setIsLoading}){

    useEffect(() => {
        const getBoard = async () => {
            setIsLoading(true)
            const response = await fetch("/board")
            const response_json = await response.json()
            setBoard(response_json.current_board)
            setIsLoading(false)
        }
        getBoard()
    }, [setBoard])

    return (
        <div>
            <React.Fragment>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table>
                        <tbody>
                        {board.map((item) => {
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
                            );
                        })}
                        </tbody>
                    </table>
                )}
            </React.Fragment>
        </div>
    )
}
