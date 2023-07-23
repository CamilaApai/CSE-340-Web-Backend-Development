// Week 5, Update Inventory item (Step 2) 

const form = document.querySelector("form")
    form.addEventListener("change", function () {
      const updateBtn = document.querySelector("#submit")
      updateBtn.removeAttribute("disabled")
    })