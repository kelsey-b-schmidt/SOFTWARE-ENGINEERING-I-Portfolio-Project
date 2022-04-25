import React from 'react'
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Helmet } from "react-helmet"
import './App.css'

import HeaderComponent from './components/HeaderComponent'
import PrintButtonComponent from './components/PrintButtonComponent'
import DownloadButtonComponent from './components/DownloadButtonComponent'
import FacebookButtonComponent from './components/FacebookButtonComponent'
import ToggleSolutionButtonComponent from './components/ToggleSolutionButtonComponent'
import HowToPlayButtonComponent from './components/HowToPlayButtonComponent'
import NewGameButtonComponent from './components/NewGameButtonComponent'
import FooterComponent from './components/FooterComponent'

function App() {



    return (
        <div>
            <Helmet htmlAttributes>
                <title>Sudoku Generator</title>
            </Helmet>
            <HeaderComponent/>
            <br/>
            <br/>
            <PrintButtonComponent/>
            <br/>
            <DownloadButtonComponent/>
            <br/>
            <FacebookButtonComponent/>
            <br/>
            <ToggleSolutionButtonComponent/>
            <br/>
            <HowToPlayButtonComponent/>
            <br/>
            <NewGameButtonComponent/>
            <br/>
            <FooterComponent/>
            <br/>
            <br/>
        </div>
    )
}

export default App
