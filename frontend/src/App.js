import React from 'react'
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
        <div>
            <Helmet htmlAttributes>
                <title>Sudoku Generator</title>
            </Helmet>
            <HeaderComponent/>
        </div>

        <div class="puzzle_and_buttons">
            <table>
                <tbody>
                <tr><td >4</td><td >6</td><td >1</td><td >3</td><td >5
                </td><td >2</td><td >7</td><td >9</td><td >8</td></tr>
                <tr><td >9</td><td >5</td><td >8</td><td >7</td><td >6
                </td><td >1</td><td >2</td><td >4</td><td >3</td></tr>
                <tr><td >3</td><td >2</td><td >7</td><td >4</td><td >8
                </td><td >9</td><td >6</td><td >1</td><td >5</td></tr>
                <tr><td >2</td><td >3</td><td >5</td><td >6</td><td >1
                </td><td >8</td><td >4</td><td >7</td><td >9</td></tr>
                <tr><td >7</td><td >8</td><td >6</td><td >5</td><td >9
                </td><td >4</td><td >3</td><td >2</td><td >1</td></tr>
                <tr><td >1</td><td >9</td><td >4</td><td >2</td><td >7
                </td><td >3</td><td >5</td><td >8</td><td >6</td></tr>
                <tr><td >8</td><td >7</td><td >3</td><td >9</td><td >4
                </td><td >6</td><td >1</td><td >5</td><td >2</td></tr>
                <tr><td >5</td><td >1</td><td >2</td><td >8</td><td >3
                </td><td >7</td><td >9</td><td >6</td><td >4</td></tr>
                <tr><td >6</td><td >4</td><td >9</td><td >1</td><td >2
                </td><td >5</td><td >8</td><td >3</td><td >7</td></tr>
                </tbody>
            </table>
                <br/>
                <br/>
                <div>
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
