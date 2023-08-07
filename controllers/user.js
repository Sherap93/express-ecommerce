const userModel = require("../models/models")
const bcrypt = require('bcrypt')

const register = async (req, res) => {

    const userexits = await userModel.findOne({email : req.body.email})

    if(userexits){
        return res.render('register', {msg : "User with this email already exists!!"})
    }
    
    if(req.body.password == req.body.cpassword){
        // finally we can create an entry
        const hashPass = await bcrypt.hash(req.body.password, 10)

        // we are creating an entry
        userModel.create({fullname : req.body.fullname,
             email : req.body.email,
              password : hashPass})

        return res.render('register', {msg : "Account Successfully Created!!!"})
            
    }
    else{
        return res.render('register', {msg : "Both passwords do not Match!!!"}) 
    }

    
    
    req.body.password
    req.body.cpassword


}




module.exports = {register, login}