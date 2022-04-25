import React from 'react'

function HowToPlayButtonComponent (){
    return (

        <button type="button"
                title="Learn how to play&#10;(opens in popup)">
            <img src={require(".//images/help.png")} alt="Question Mark"/>
            <span>&nbsp;&nbsp;How to Play</span>
        </button>
    )
}

export default HowToPlayButtonComponent;

