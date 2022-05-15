import React, {useEffect, useState} from 'react'

function TimeAndWordComponent (){

    const [board, setBoard] = useState(0)

    useEffect(() => {
        const getBoard = async () => {
            let response = await fetch("/board")
            let response_json = await response.json()
            setBoard(response_json.message)

        }
        getBoard()
            .catch(console.error)
    })

    return (
        <div>
            <p>The current board is: {board}.</p>
        </div>
    )
}

export default TimeAndWordComponent


