// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")
const validate = require('../utilities/inventory-validation')

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

// Route to build inventory detail view
router.get("/detail/:invId", utilities.handleErrors(invController.buildByInventoryId));

// Route to build management view, Unit 4 Individual Activity
router.get("/", utilities.handleErrors(invController.buildManagement));

// Route to build add classification detail view, Unit 4 Individual Activity
router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification));

// Route to build add inventory detail view, Unit 4 Individual Activity
router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory));


// Process the Add Classification data, Unit 4 Individual Activity
router.post(
    "/add-classification",
    validate.classificationRules(),
    validate.checkClassificationData,
    utilities.handleErrors(invController.addClassification)
  )
  

//// Process the Add Inventory data, Unit 4 Individual Activity
  router.post(
    "/add-inventory",
    validate.inventoryRules(),
    validate.checkInventoryData,
    utilities.handleErrors(invController.addInventory)
  )

module.exports = router;