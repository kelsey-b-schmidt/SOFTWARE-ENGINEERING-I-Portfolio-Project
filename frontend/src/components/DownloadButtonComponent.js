import React from 'react'

function DownloadButtonComponent (){
    return (

        <button type="button" title="Download puzzle as PDF">
            <img src={require(".//images/download.png")} alt="Download Arrow"/>
            <span>&nbsp;&nbsp;Download</span>
        </button>
    )
}

export default DownloadButtonComponent;

