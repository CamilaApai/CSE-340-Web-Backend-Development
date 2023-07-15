const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 *  Build inventory detail view by inventory view
 * ************************** */
invCont.buildByInventoryId = async function (req, res, next) {
  const inv_id = req.params.invId
  const data = await invModel.getInventoryByInventoryId(inv_id)
  const detail = await utilities.buildInventoryDetail(data)
  let nav = await utilities.getNav()
  const className = data[0].inv_year + " " + data[0].inv_make + " " + data[0].inv_model
  res.render("./inventory/inventory", {
    title: className,
    nav,
    detail,
  })
}


/* ***************************
 *  Build Management View
 *  Unit 4, Individual Activity
 * ************************** */
invCont.buildManagement = async function (req, res, next) {
  let nav = await utilities.getNav()
  res.render("./inventory/management", {
    title: "Vehicle Management",
    nav,
    errors: null,
  })
}

/* ***************************
 *  Build Add New Classification View
 *  Unit 4, Individual Activity
 * ************************** */
invCont.buildAddClassification = async function (req, res, next) {
  let nav = await utilities.getNav()
  res.render("./inventory/add-classification", {
    title: "Add New Classification",
    nav,
    errors: null,
  })
}

///* ***************************
// *  Build Add New Inventory View
// *  Unit 4, Individual Activity
// * ************************** */
invCont.buildAddInventory = async function (req, res, next) {
  let nav = await utilities.getNav()
  let options =  await utilities.buildClassificationOptions()
  res.render("./inventory/add-inventory", {
    title: "Add New inventory",
    nav,
    options,
    errors: null,
  })
}


///* ****************************************
// *  Process Add New Classification Request
//    Unit 4, Individual Activity
// * ************************************ */
invCont.addClassification = async function (req, res) {
  let nav = await utilities.getNav()
  const { classification_name } = req.body
  const classificationResult = await invModel.addClassification(
    classification_name
  )

  if (classificationResult) {
    nav = await utilities.getNav()
    req.flash(
      "notice",
      `The ${classification_name} was successfully added.`
    )
    res.status(201).render("inventory/management", {
      title: "Vehicle Management",
      nav,
      errors: null,
    })
  } else {
    req.flash("notice", "Sorry, the add a new classification failed.")
    res.status(501).render("inventory/add-classification", {
      title: "Add Classification",
      nav,
    })
  }
}

///* ****************************************
// *  Process Add New Inventory Request
//    Unit 4, Individual Activity
// * ************************************ */
  invCont.addInventory = async function (req, res) {
    let nav = await utilities.getNav()
    const { classification_id, inv_make, inv_model, inv_description, inv_image, inv_thumbnail, inv_price, inv_year, inv_miles, inv_color } = req.body
    const inventoryResult = await invModel.addInventory(
      classification_id,
      inv_make,
      inv_model, 
      inv_description, 
      inv_image, 
      inv_thumbnail, 
      inv_price, 
      inv_year, 
      inv_miles, 
      inv_color,
    )
  
    if (inventoryResult) {
      req.flash(
        "notice",
        `The ${inv_make} ${inv_model} was successfully added.`
      )
      res.status(201).render("inventory/management", {
        title: "Vehicle Management",
        nav,
        errors: null,
      })
    } else {
      req.flash("notice", "Sorry, the add a new vehicle failed.")
      res.status(501).render("inventory/add-inventory", {
        title: "Add Vehicle",
        nav,
      })
    }
  }

module.exports = invCont