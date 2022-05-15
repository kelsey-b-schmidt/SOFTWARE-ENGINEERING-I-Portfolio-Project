import React from 'react'

function NewGameButtonComponent (){

    return (

        <button name="new_game"
                className="button red-hover"
                title="Erase current game"
            onClick={() => {window.confirm('Starting a new game will erase the current game!\n' +
                'Do you still wish to proceed?')}}
        >
            <img src={require(".//images/new.png")} alt="Trash Can"/>
            <span>&nbsp;&nbsp;New Game</span>
        </button>
    )
}

export default NewGameButtonComponent

