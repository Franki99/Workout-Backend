const express = require('express')
require('dotenv').config()
const mongoose =require('mongoose')
const workoutRoutes= require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()

//middleware
app.use (express.json())
// app.use((req, res, next) => {
//     console.log(req.path, reqmethod)
//     next()
// })

//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

//DB connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {//listen for requests
    app.listen(process.env.PORT, () => {
        console.log('listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})