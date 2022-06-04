import React from 'react'

export default function HowToPlayButtonComponent (){
    return (
        <button type="button"
                id="button"
                title="Learn how to play&#10;(opens in popup)"
                onClick={() => {window.alert('How to play Sudoku:' +
                    '\nPlace each number 1-9 only once' +
                    '\nin each row, column, and thick outlined square.' +
                    '\nUse the hints in the darker squares' +
                    '\nto find where other numbers belong.' +
                    '\n' +
                    '\nControls:' +
                    '\nTo start playing, click on an empty square' +
                    '\nand type the number you think fits there.' +
                    '\nYou can press "Toggle Solution"' +
                    '\nto peek at the solution if you need a hint,' +
                    '\nand can press it again to go back to the unsolved puzzle. ' +
                    '\nOnce you think you have the right answer, ' +
                    '\nPress "Submit Solution" to check! ' +
                    '\nPress "Clear Puzzle" if you want to clear the board and start over. ' +
                    '\n' +
                    '\nPress "How to Play" to view to these instructions.' +
                    '\nPress "Print" to generate the puzzle and solution on a printable page.' +
                    '\nYou can start a New Game by clicking your preferred difficulty level: ' +
                    '\nEasy, Medium, or Hard.' +
                    '\nYou can change the background color for the page by using the color picker at the bottom of the page.' +
                    '\n' +
                    '\nHave fun!'
                )}}
        >
            <img src="help.png" alt="Question Mark"/>
            <span>&nbsp;&nbsp;How to Play</span>
        </button>
    )
}

