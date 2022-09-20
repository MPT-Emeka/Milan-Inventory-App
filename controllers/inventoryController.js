const inventory = require("../Entities/inventoryModel")
const express = require("express");

exports.createinventory = async (request, response) => {
    const {id} = request.headers
    const findinventory = await inventory.findById(id)
    const {dateOfEntry, description, stockQuantity, batchNo} = request.body
    if (findinventory){
    const createNewinventory = new inventory({dateOfEntry, description, stockQuantity, batchNo});
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
            message: "Be like say u be bot"
        })
    }
}

exports.updateBlog = async (request, response) => {
    const {id} = request.headers
    const findBlog = await blogModel.findById(id);
     findBlog.title = request.body.title
     findBlog.article = request.body.article
     await findBlog.save()
      return response.status(201).send({
        status: true,
        message: "Blog has been updated successfully",
        updatedBlog: findBlog})
  }

  exports.deleteBlog = async (request, response) => {
    const {id} = request.query
    const findBlog = await blogModel.findByIdAndDelete(id);
    if (findBlog) {
      return response.status(201).send({
        status: true,
        message: "Blog deleted successfully"
      });
    } else {
      return response.status(409).send({
        status: false,
        message: "blog post not found",
      });
    }
  }

exports.getBlog = async (request, response) => {
    const findAllBlogs = await blogModel.find();
    return response.status(200).send({
      status: true,
      message: "All blogs created",
      AllBlogs: findAllBlogs,
    });
  }











