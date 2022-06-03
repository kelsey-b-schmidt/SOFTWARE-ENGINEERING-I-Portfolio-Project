import React from 'react'

export default function PrintButtonComponent (){
    return (
        <button type="button"
                id="button" title="Print puzzle and solution"
                onClick={window.print}
        >
            <img src="printer.png" alt="Printer" />
            <span>&nbsp;&nbsp;Print</span>
        </button>
    )
}