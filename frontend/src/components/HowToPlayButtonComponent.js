import React from 'react'

export default function HowToPlayButtonComponent (){
    return (
        <button type="button"
                id="button"
                title="Learn how to play&#10;(opens in popup)"
                onClick={() => {window.alert('How to play:' +
                    '\nEach number 1-9 must be placed only once' +
                    '\nin each row, column, and thick outlined square.' +
                    '\n' +
                    '\n' +
                    'Controls:' +
                    '\nYou can press "Toggle Solution" to see the solution,' +
                    '\nand can press it again to go back to the unsolved puzzle. ' +
                    '\nYou can press "How to Play" to see to these instructions.' +
                    '\nYou can press "Print" to generate the puzzle and solution' +
                    '\non a printable page.' +
                    '\nYou can start a New Game by clicking your preferred' +
                    '\ndifficulty level - Easy, Medium, or Hard' +
                    '\n(This erases the current puzzle!)' +
                    '\nYou can change the background color by using the color picker!'
                )}}
        >
            <img src="help.png" alt="Question Mark"/>
            <span>&nbsp;&nbsp;How to Play</span>
        </button>
    )
}

