import React from 'react'

function DownloadButtonComponent (){
    return (

        <a href="download.png" download="puzzle">
        <button class="a" type="button" title="Download puzzle as PDF"
            >

            <img src="download.png" alt="Download Arrow"/>
            <span>&nbsp;&nbsp;Download</span>

        </button>
        </a>
    )
}

export default DownloadButtonComponent;

