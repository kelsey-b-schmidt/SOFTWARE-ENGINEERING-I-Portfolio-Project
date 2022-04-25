import React from 'react'

function ToggleSolutionButtonComponent (){

    const [toggled, setToggled] = React.useState(false)

    function toggleImage (){
        setToggled(!toggled)
    }

    return (

        <button name="checkbox"
                title="Show/Hide the solution"
                onClick={toggleImage}>
            {toggled && <img src={require(".//images/checkbox.png")} alt="Checkbox-Checked" />}
            {!toggled && <img src={require(".//images/checkbox_unchecked.png")} alt="Checkbox-Unchecked" />}
            <span>&nbsp;&nbsp;Toggle Solution</span>
        </button>
    )
}

export default ToggleSolutionButtonComponent

