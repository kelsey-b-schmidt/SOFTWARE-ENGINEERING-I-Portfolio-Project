import React from 'react'

export default function HowToPlayButtonComponent (){
    return (

        <button type="button"
                title="Learn how to play&#10;(opens in popup)"
                onClick={() => {window.alert('How to play:' +
                    '\nEach number 1-9 must be placed only once' +
                    '\nin each row, column, and thick outlined square.' +
                    '\n' +
                    '\n' +
                    'Controls:' +
                    '\nYou can press "Toggle Solution" to see the solution,' +
                    '\nand press it again to go back to the unsolved puzzle. ' +
                    '\nYou can press "New Game" to generate a new puzzle.' +
                    '\nYou can press "Print", "Download", or "Share" ' +
                    '\nto share the puzzle with friends!'
                )}}
        >
            <img src="help.png" alt="Question Mark"/>
            <span>&nbsp;&nbsp;How to Play</span>
        </button>
    )
}

