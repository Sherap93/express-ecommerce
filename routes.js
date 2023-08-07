const express = require('express')
const {home, about, loginPage, registerPage} = require('./controllers/pages')
const {register, login} = require('./controllers/user')
const route = express.Router()

route.get('/', home) //route for home page
route.get('/about', about) 
route.get('/login', loginPage)
route.get('/register', registerPage)

route.post('/register', register) // creating account
route.post('/login', login) // starting a session






module.exports = route