////Week 4, Learning Activity

// Needed Resources 
const regValidate = require('../utilities/account-validation')
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")

// Deliver Login View
router.get("/login", utilities.handleErrors(accountController.buildLogin))

// Deliver register View
router.get("/register", utilities.handleErrors(accountController.buildRegister));

// Deliver Account Management View
// Week 5, Individual Activity done in Group
//router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagement))

// Process the login request
//router.post(
//  "/login",
//  regValidate.loginRules(),
//  regValidate.checkLoginData,
//  utilities.handleErrors(accountController.accountLogin)
//)
//
//// Process the registration data
//router.post(
//    "/register",
//    regValidate.registrationRules(),
//    regValidate.checkRegData,
//    utilities.handleErrors(accountController.registerAccount)
//  )

module.exports = router
  