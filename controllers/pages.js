

// it will render HOME page
const home = (req, res) => {
    return res.render('index')
}

const about = (req, res) => {
    return res.render('about')
}

const loginPage = (req, res) => {
    return res.render('login')
}

const registerPage = (req, res) => {
    return res.render('register', {msg : ""})
}


module.exports = {home, about, loginPage, registerPage}