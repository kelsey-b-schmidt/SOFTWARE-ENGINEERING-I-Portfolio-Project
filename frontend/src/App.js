import React, {useState} from 'react'
import './App.css'
import HelmetComponent from "./components/HelmetComponent";
import HeaderComponent from './components/HeaderComponent'
import PrintButtonComponent from './components/PrintButtonComponent'
import DownloadButtonComponent from './components/DownloadButtonComponent'
import FacebookButtonComponent from './components/FacebookButtonComponent'
import ToggleSolutionButtonComponent from './components/ToggleSolutionButtonComponent'
import HowToPlayButtonComponent from './components/HowToPlayButtonComponent'
import NewGameButtonComponent from './components/NewGameButtonComponent'
import FooterComponent from './components/FooterComponent'
import PuzzleComponent from "./components/PuzzleComponent"

export default function App() {

    const [board, setBoard] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div>
            <HelmetComponent/>
            <HeaderComponent/>
            <div class="puzzle_and_buttons">
                <PuzzleComponent
                    board={board}
                    setBoard={setBoard}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <PrintButtonComponent/>
                    <br/>
                    <br/>
                    <DownloadButtonComponent/>
                    <br/>
                    <br/>
                    <FacebookButtonComponent/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            <div>
                <ToggleSolutionButtonComponent/>
                <br/>
                <HowToPlayButtonComponent/>
                <br/>
                <NewGameButtonComponent
                    setBoard={setBoard}
                />

            </div>
            <br/>
            <FooterComponent/>
            <br/>
            <br/>
        </div>
    )
}


