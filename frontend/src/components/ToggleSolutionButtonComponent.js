import React from 'react'

export default function ToggleSolutionButtonComponent (){

    const [toggled, setToggled] = React.useState(false)

    function toggleImage (){
        setToggled(!toggled)
    }

    return (

        <button name="checkbox"
                title="Show/Hide the solution"
                onClick={toggleImage}>
            {toggled && <img src="checkbox.png" alt="Checkbox-Checked" />}
            {!toggled && <img src="checkbox_unchecked.png" alt="Checkbox-Unchecked" />}
            <span>&nbsp;&nbsp;Toggle Solution</span>
        </button>
    )
}

