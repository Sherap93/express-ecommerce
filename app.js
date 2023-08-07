const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const app = express()
const route = require('./routes')

mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(() => {
    console.log('DB connected!!')
})

//middlewares for session management
app.use(cookieParser())
const sessionVar = {secret : "we know nothing"}
app.use(session(sessionVar))


//middlewares for FORMS
app.use(express.json())
app.use(express.urlencoded({extended : true}))


// for views (html files)
app.set('view engine', 'ejs')
app.set('views', 'views')

//for static files
app.use(express.static(path.join(__dirname, 'static')))


app.use(route)


app.listen(3000)