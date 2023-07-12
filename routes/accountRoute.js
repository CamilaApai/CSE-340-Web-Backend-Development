// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require('../utilities/account-validation')

// Deliver Login View
router.get("/login", utilities.handleErrors(accountController.buildLogin))

// Deliver register View
router.get("/register", utilities.handleErrors(accountController.buildRegister));

// Deliver Account Management View
// Week 5, Individual Activity done in Group
//router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagement))

// Process the login attempt
//router.post(
//    "/login",
//    (req, res) => {
//      res.status(200).send('login process')
//    }
//  )


// Process the registration data, Unit 4 server-side activity
router.post(
  "/register",
  regValidate.registrationRules(),
  regValidate.checkRegData,
  utilities.handleErrors(accountController.registerAccount)
)

//Process the login request, Unit 4 server-side activity
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLoginData,
  utilities.handleErrors(accountController.accountLogin)
)

//router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildAccountManagement))

module.exports = router
  