const express = require('express')
const cors = require('cors')
require("express-async-errors")
const morgan = require('morgan')
const { errorHandler } = require('./middleware/error')
require('./db')
const userRouter = require('./routes/user')
const { handleNotFound } = require('./utils/helper')
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use('/api/user', userRouter)
app.use('/*', handleNotFound )
app.use(errorHandler)


// app.post(
//     "/sign-in",
//     (req, res, next) => {
//         const { email, password} = req.body;
//         if(!email || !password) return res.json({error: "email/password is missing!"})
//      next()   
//     },
//     (req, res) => {
//         res.send("hello I am")
//     }
    
// )



app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})