import * as sudokus from './model.mjs'
import express from 'express'
const app = express()
const PORT = 3000
app.use(express.json()) // The content-type of the response must be set to application/json.

/**
 * Create a new sudoku with the puzzle_unsolved, puzzle_solved, provided in the body
 */
app.post('/sudokus', (req, res) => {
    sudokus.createSudoku( req.body.puzzle_unsolved, req.body.puzzle_solved)
        .then(sudoku => {
            res.status(201).json(sudoku)
        })
        .catch( (error) => {
            // In case of an error, send back status code 500.
            res.status(500).json({ Error: error.message })
        })
})

/**
 * Retrieve all sudokus.
 */
app.get('/sudokus', (req, res) => {
    let filter = {_id: "62674fce441cce548879cc6c"}
    sudokus.findSudokus(filter, '', 0)
        .then(sudokus => {
            res.status(200).json(sudokus)
        })
        .catch( (error) => {
            // In case of an error, send back status code 500.
            res.status(500).json({ Error: error.message })
        })
})

/**
 * Update the sudoku whose id is provided in the path parameter,
 * and set its parameters to the values provided in the body.
 */
app.put('/sudokus/:_id', (req, res) => {
    sudokus.replaceSudoku(req.params._id, req.body.puzzle_unsolved, req.body.puzzle_solved)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200).json({ _id: req.params._id, puzzle_unsolved: req.body.puzzle_unsolved, puzzle_solved: req.body.puzzle_solved })
            } else {
                res.status(404).json({ Error: 'SudokuRow not found' })
            }
        })
        .catch( (error) => {
            // In case of an error, send back status code 500.
            res.status(500).json({ Error: error.message })
        })
})

/**
 * Delete the sudoku whose id is provided in the query parameters
 */
app.delete('/sudokus/:id', (req, res) => {
    sudokus.deleteById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send()
            } else {
                res.status(404).json({ Error: 'SudokuRow not found' })
            }
        })
        .catch( (error) => {
            // In case of an error, send back status code 500.
            res.status(500).json({ Error: error.message })
        })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})