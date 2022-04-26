import React from 'react'

function PrintButtonComponent (){
    return (
        <button type="button" title="Print puzzle"
                onClick={window.print}>
            <img src={require("./images/printer.png")} alt="Printer" />
            <span>&nbsp;&nbsp;Print</span>
        </button>
    )
}

export default PrintButtonComponent;