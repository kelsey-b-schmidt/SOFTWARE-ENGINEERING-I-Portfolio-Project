import React from 'react'

export default function FacebookButtonComponent (){
    return (
        <button class="no-print" type="button" title="Share to Facebook&#10;(opens in new window)"
                onClick={() => {window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Foregonstate.edu%2F&amp;src=sdkpreparse",
                    'newwindow',
                    'width=555,height=555')}}>
            <img src="facebook.png" alt="FaceBook Logo"/>
            <span>&nbsp;&nbsp;Share</span>
        </button>
    )
}
