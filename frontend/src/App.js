import React, {useState, useEffect} from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import PuzzleComponent from './components/PuzzleComponent'
import ToggleSolutionButtonComponent from './components/ToggleSolutionButtonComponent'
import CheckSolutionComponent from './components/CheckSolutionComponent'
import ClearPuzzleButtonComponent from './components/ClearPuzzleButtonComponent'
import HowToPlayButtonComponent from './components/HowToPlayButtonComponent'
import PrintButtonComponent from './components/PrintButtonComponent'
import NewGameButtonComponent from './components/NewGameButtonComponent'
import PageColorComponent from './components/PageColorComponent'
import PrintPageComponent from './components/PrintPageComponent'
import FooterComponent from './components/FooterComponent'

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
    const [submission, setSubmission] = useState([
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
    const [toggled, setToggled] = useState(false)

    useEffect(() => {
        async function getBoard () {
            const response = await fetch("/board")
            const response_json = await response.json()
            setUnsolvedBoard(response_json["unsolved_board"])
            setSolvedBoard(response_json["solved_board"])
        }
        getBoard().then()
    }, [])

    return (
        <div class="all">
            <div class="grid">
                <HeaderComponent/>
                <PuzzleComponent
                    unsolvedBoard={unsolvedBoard}
                    solvedBoard={solvedBoard}
                    submission={submission}
                    setSubmission={setSubmission}
                />
                <br/>
                <div>
                    <ToggleSolutionButtonComponent
                        toggled={toggled}
                        setToggled={setToggled}
                    />
                    <CheckSolutionComponent
                        solvedBoard={solvedBoard}
                        submission={submission}/>
                    <ClearPuzzleButtonComponent/>
                    <div>
                        <HowToPlayButtonComponent/>
                        <PrintButtonComponent/>
                    </div>
                </div>
                <NewGameButtonComponent
                    setToggled={setToggled}
                    setUnsolvedBoard={setUnsolvedBoard}
                    setSolvedBoard={setSolvedBoard}
                />
                <br/>
                <PageColorComponent
                />

            </div>
            <div class="no-grid">
                <PrintPageComponent
                    unsolvedBoard={unsolvedBoard}
                    solvedBoard={solvedBoard}/>
            </div>
            <br/>
            <FooterComponent/>
        </div>
    )
}












