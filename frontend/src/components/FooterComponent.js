import React from 'react'
import Clock from 'react-live-clock'

export default function FooterComponent (){
    return (
        <footer>
            The current time is <Clock format="HH:mm:ss" interval={1000} ticking={true} />
            <br/>
            Uicons by <a href="https://www.flaticon.com/uicons" target="_blank" rel="noreferrer">Flaticon</a>
        </footer>
    )
}