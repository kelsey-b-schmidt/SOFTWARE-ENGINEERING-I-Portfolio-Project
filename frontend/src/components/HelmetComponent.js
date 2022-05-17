import React from 'react'
import {Helmet} from "react-helmet"

export default function HeaderComponent (){
    return (
        <Helmet htmlAttributes>
            <title>Sudoku Generator</title>
        </Helmet>
    )
}