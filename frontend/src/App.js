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
import PageColorComponent from "./components/PageColorComponent";
import {useEffect} from "react";
import CheckSolutionComponent from "./components/CheckSolutionComponent";
import ClearPuzzleButtonComponent from "./components/ClearPuzzleButtonComponent";

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
    const [toggled, setToggled] = React.useState(false)

    useEffect(() => {
        const getBoard = async () => {
            const response = await fetch("/board")
            const response_json = await response.json()
            setUnsolvedBoard(response_json["unsolved_board"])
            setSolvedBoard(response_json["solved_board"])
        }
        getBoard().then()
    }, [setSolvedBoard,setUnsolvedBoard])

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












