const products = require("../models/products")

// this fun will render the page
const adminLoginPage = (req, res) => {
    return res.render('adminlogin', {message: ''})
}



const adminLoginFun = async (req, res)=>{
    //email valiadation
    const accountExist = await userModel.findOne({email : 'admin@gmail.com'})
    if(accountExist){
        //password validation
        const correct = await bcrypt.compare(req.body.password, accountExist.password)
        if(correct){
            //  start the session
            req.session.admin = req.body.email
            
            // render add_products apge
            return res.render('add_products', {msg : ''})
        }
        return res.render('adminlogin', {message: "Invalid Password !!" })
    }
    else{
        return res.render('adminlogin', {message : "Invalid Email !!"})
    }
    //start the session

    //index view
}


const adding_product = async (req, res) => {
    await products.create({
        p_name : req.body.p_name,
        p_des : req.body.p_des,
        price : req.body.price,
        image : req//path_to_the_saved_imagea
    })

}

module.exports = {adminLoginPage, adminLoginFun, adding_product}