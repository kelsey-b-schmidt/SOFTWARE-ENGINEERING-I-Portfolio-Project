import React from 'react'

export default function PrintButtonComponent (){
    return (
        <button type="button" title="Print puzzle"
                onClick={window.print}>
            <img src="printer.png" alt="Printer" />
            <span>&nbsp;&nbsp;Print</span>
        </button>
    )
}