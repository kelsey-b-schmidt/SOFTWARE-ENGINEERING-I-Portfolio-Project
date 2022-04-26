// Get the mongoose object
import mongoose from 'mongoose'

// Prepare to the database sudokus_db in the MongoDB server running locally on port 27017
mongoose.connect(
    "mongodb://localhost:27017/sudokus",
    { useNewUrlParser: true, useUnifiedTopology: true }
)

// Connect to the database
const db = mongoose.connection

// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!")
})

/**
 * Define the schema
 */
const sudokuSchema = mongoose.Schema({
        puzzle_unsolved: { type: Number, min: 0, max: 1000, required: true },
        puzzle_solved: { type: Number, min: 0, max: 1000, required: true }
    },
    { versionKey: false }
)

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Sudoku = mongoose.model("Sudoku", sudokuSchema)

/**
 * Creates an sudoku with the given parameters.
 * @param puzzle_unsolved
 * @param puzzle_solved
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createSudoku = async (puzzle_unsolved, puzzle_solved) => {
    // Call the constructor to create an instance of the model class SudokuRow
    const sudoku = new Sudoku({ puzzle_unsolved: puzzle_unsolved, puzzle_solved: puzzle_solved })
    // Call save to persist this object as a document in MongoDB
    return sudoku.save()
}

/**
 * Find sudokus with the given parameters.
 * @param filter
 * @param projection
 * @param limit
 * @returns A promise. Resolves to an array of JSON objects matching the query.
 */
const findSudokus = async (filter, projection, limit) => {
    const query = Sudoku.find(filter)
        .select(projection)
        .limit(limit)
    return query.exec()
}

/**
 * Updates a given sudoku with new parameters.
 * @param _id
 * @param puzzle_unsolved
 * @param puzzle_solved
 * @returns A promise. Resolves to the number of documents modified.
 */
const replaceSudoku = async (_id, puzzle_unsolved, puzzle_solved) => {
    const result = await Sudoku.replaceOne({ _id: _id },
        { puzzle_unsolved: puzzle_unsolved, puzzle_solved: puzzle_solved }, {runValidators: true})
    return result.modifiedCount
}

/**
 * Delete the sudoku with provided id value
 * @param _id
 * @returns A promise. Resolves to the count of deleted documents.
 */
const deleteById = async (_id) => {
    const result = await Sudoku.deleteOne({ _id: _id })
    // Return the count of deleted documents. Since we called deleteOne, this will be either 0 or 1.
    return result.deletedCount
}

export { createSudoku, findSudokus, replaceSudoku, deleteById }