import React from 'react'

function HowToPlayButtonComponent (){
    return (

        <button type="button"
                title="Learn how to play&#10;(opens in popup)"
                onClick={() => {window.alert('How to play:' +
                    '\n' +'Each number 1-9 must be placed only once in each row, column, and thick outlined square.' +
                    '\n' +
                    '\n' + 'Controls:' +
                    '\n' + 'You can press "Toggle Solution" to see the solution, and press it again to go back to the unsolved puzzle. ' +
                    '\n' + 'You can press "New Game" to generate a new puzzle.' +
                    '\n' + 'You can press "Print", "Download", or "Share" to share the puzzle with friends!'
                )}}
        >
            <img src={require(".//images/help.png")} alt="Question Mark"/>
            <span>&nbsp;&nbsp;How to Play</span>
        </button>
    )
}

export default HowToPlayButtonComponent;

