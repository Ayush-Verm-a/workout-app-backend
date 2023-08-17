const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../midddleware/requireAuth')

const router = express.Router()

// require auth for all workouts
router.use(requireAuth)

// Get all workouts
router.get('/', getWorkouts)

// Get a single workout (:id is route parameter)
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// Delete a single workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router 