const inventory = require("../Entities/inventoryModel")
const express = require("express");

exports.createInventory = async (request, response) => {
    const inventoryBody = request.body.batchNo
    const findinventory = await inventory.findOne(inventoryBody)
    const {dateOfEntry, description, stockQuantity, batchNo, item} = request.body
    if (!findinventory){
    const createNewinventory = new inventory({dateOfEntry, description, stockQuantity, batchNo, item});
        console.log({dateOfEntry, description, stockQuantity, batchNo})
    await createNewinventory.save();
      return response.status(201).send({
        status: true,
        message: "inventory has been succesfully posted",
        newInventory: createNewinventory
      })
    }else {
        return response.status(401).send({
            status: false,
            message: "Inventory already exists"
        })
    }
}




exports.getInventory = async (request, response) => {
    try {
      const findAllInventory = await inventory.find();
    return response.status(200).send({
      status: true,
      message: "All Inventories",
      inventoryTobeReturned: findAllInventory,
    })  
    } catch (error) {
        return response.status(404).send({
            status: false,
            message: "Not found"
        })
    }
  }











