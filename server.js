require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors(corsOptions))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)  // It is asynchronous and returns a promise
    .then(() => {
        console.log('Connected to DB')
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Server listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
