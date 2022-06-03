import React from 'react'

export default function ToggleSolutionButtonComponent (
    {toggled, setToggled}){

    function toggle (){
        setToggled(!toggled)
        if (!toggled) {
            document.getElementById("unsolvedPuzzleTable").style.display = "none";
            document.getElementById("solvedPuzzleTable").style.display = "grid";
        }
        else {
            document.getElementById("solvedPuzzleTable").style.display = "none";
            document.getElementById("unsolvedPuzzleTable").style.display = "grid";
        }
    }

    return (
        <button name="checkbox"
                id="button"
                title="Show/Hide the solution"
                onClick={toggle}>
            {toggled && <img src="toggle-on.png" alt="Toggle On" />}
            {!toggled && <img src="toggle-off.png" alt="Toggle Off" />}
            <span>&nbsp;&nbsp;Toggle Solution</span>
        </button>
    )
}

