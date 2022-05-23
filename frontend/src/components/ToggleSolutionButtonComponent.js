import React from 'react'

export default function ToggleSolutionButtonComponent (
    {type, setType, toggled, setToggled}){


    function toggleImage (){
        setToggled(!toggled)
        if (type==="unsolved"){
            setType("solved")
        }
        else {
            setType("unsolved")
        }
    }

    return (

        <button name="checkbox"
                id="button"
                title="Show/Hide the solution"
                onClick={toggleImage}>
            {toggled && <img src="checkbox.png" alt="Checkbox-Checked" />}
            {!toggled && <img src="checkbox_unchecked.png" alt="Checkbox-Unchecked" />}
            <span>&nbsp;&nbsp;Toggle Solution</span>
        </button>
    )
}

