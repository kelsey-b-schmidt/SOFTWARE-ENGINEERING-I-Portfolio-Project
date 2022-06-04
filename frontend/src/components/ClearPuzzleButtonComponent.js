import React from 'react'

export default function ClearPuzzleButtonComponent (){

    const handleSubmit = () => {
        const answer = window.confirm("This will clear all of your entries!\n" +
            "Do you still wish to proceed?")
        if (answer) {
            document.getElementById("form").reset()
        }
    }
    return (
        <button
            type="button"
            id="button" title="Erase entries"
            onClick={handleSubmit}
        >

            <img src="refresh.png" alt="Refresh Symbol" />
            <span>&nbsp;&nbsp;Clear Puzzle</span>
        </button>
    )
}