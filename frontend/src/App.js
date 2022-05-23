import React, {useState} from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import PrintButtonComponent from './components/PrintButtonComponent'
import ToggleSolutionButtonComponent from './components/ToggleSolutionButtonComponent'
import HowToPlayButtonComponent from './components/HowToPlayButtonComponent'
import NewGameButtonComponent from './components/NewGameButtonComponent'
import FooterComponent from './components/FooterComponent'
import PuzzleComponent from "./components/PuzzleComponent"
import PrintPageComponent from "./components/PrintPageComponent";

export default function App() {

    const [unsolvedBoard, setUnsolvedBoard] = useState([
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""]
    ])
    const [solvedBoard, setSolvedBoard] = useState([
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""]
    ])
    const [type, setType] = useState("unsolved")
    const [toggled, setToggled] = React.useState(false)

    return (
        <div>
            <div class="no-print">
                <HeaderComponent/>
                <PuzzleComponent
                    type={type}
                    unsolvedBoard={unsolvedBoard}
                    solvedBoard={solvedBoard}
                />
                <div class="no-print">
                    <ToggleSolutionButtonComponent
                        type={type}
                        setType={setType}
                        toggled={toggled}
                        setToggled={setToggled}
                    />
                    <HowToPlayButtonComponent/>
                    <PrintButtonComponent/>

                </div>
                <NewGameButtonComponent
                    setType={setType}
                    setToggled={setToggled}
                    setUnsolvedBoard={setUnsolvedBoard}
                    setSolvedBoard={setSolvedBoard}
                />
            </div>
            <div class="print">
                <PrintPageComponent
                    unsolvedBoard={unsolvedBoard}
                    solvedBoard={solvedBoard}/>
            </div>
            <br/>
            <FooterComponent/>
        </div>
    )
}












