import React, { useState, useEffect } from 'react'

function App() {
    const [board, setBoard] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getBoard = async () => {
            setIsLoading(true)
            const response = await fetch("/board")
            const response_json = await response.json()
            setBoard(response_json.message)
            setIsLoading(false)
        }
        getBoard()
    }, [setBoard])

    return (
        <div>
            <React.Fragment>
                {isLoading ? (
                    <p>Loading New Board...</p>
                ) : (
                    <table>
                        <tbody>
                        {board.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                    <td>{item[3]}</td>
                                    <td>{item[4]}</td>
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

export default App