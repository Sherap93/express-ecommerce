const express = require('express')
const {home, about, loginPage, registerPage} = require('./controllers/pages')
const {register, login, logout} = require('./controllers/user')
const {adminLoginPage, adminLoginFun, adding_product} = require('./controllers/admin')
const route = express.Router()

route.get('/', home) //route for home page
route.get('/about', about) 
route.get('/login', loginPage)
route.get('/register', registerPage)

route.post('/register', register) // creating account
route.post('/login', login) // starting a session

route.get('/logout', logout) // starting a session


route.get('/adminlogin', adminLoginPage)// login page of admin
route.post('/adminlogin', adminLoginFun)// login functionality of admin


route.post('/addproduct', adding_product)

module.exports = route