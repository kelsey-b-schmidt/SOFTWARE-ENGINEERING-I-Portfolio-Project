import React from 'react'

export default function PageColorComponent (){

    function changeColor () {
        document.body.style.backgroundColor = document.getElementById("favcolor").value
    }

    return (
        <div>
            <label htmlFor="favcolor">Change background color: </label>
            <br/>
            <input type="color" id="favcolor" onChange={changeColor}/>
        </div>
    )
}

