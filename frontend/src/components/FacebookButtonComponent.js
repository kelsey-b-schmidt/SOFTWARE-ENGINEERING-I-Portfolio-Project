import React from 'react'

function FacebookButtonComponent (){
    return (
        <button className="facebook" type="button" title="Share to Facebook&#10;(opens in new window)"
                onClick={() => {window.open('https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A8000%2F&amp;src=sdkpreparse',
                    'newwindow',
                    'width=555,height=555')}}>
            <img src={require(".//images/facebook.png")} alt="FaceBook Logo"/>
            <span>&nbsp;&nbsp;Share</span>
        </button>
    )
}

//"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse"

export default FacebookButtonComponent;