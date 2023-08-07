const userModel = require("../models/models")
const products = require("../models/products")


// it will render HOME page
const home = async (req, res) => {
    const allPros = await products.find({})

    if(req.session.email){
        const userObj = await userModel.findOne({email : req.session.email})
        // index page with fname and logout
        return res.render('index', {userdata : userObj, allproducts: allPros})
    }
    else{
        //index page with sign in and register button
        return res.render('index', {userdata : false, allproducts: allPros})
    }

}

const about =async (req, res) => {
    if(req.session.email){
        const userObj = await userModel.findOne({email : req.session.email})
        // index page with fname and logout
        return res.render('about', {userdata : userObj})
    }
    else{
        //index page with sign in and register button
        return res.render('about', {userdata : false})
    }
}

const loginPage = (req, res) => {
    return res.render('login', {message: ''})
}

const registerPage = (req, res) => {
    return res.render('register', {msg : ""})
}



module.exports = {home, about, loginPage, registerPage}