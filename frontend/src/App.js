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
import PuzzleComponent from "./components/PuzzleComponent";

function App() {



    return (
        <div>
            <HelmetComponent/>
            <HeaderComponent/>

            <br/>

            <div class="puzzle_and_buttons">
                <PuzzleComponent/>
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
                <NewGameButtonComponent/>
            </div>
            <br/>
            <FooterComponent/>
            <br/>
            <br/>
        </div>
    )
}

export default App

