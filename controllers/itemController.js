const Item = require('../Entities/itemModel')


exports.createItem = async (request, response) => {
    const requestBody = request.body
    const itemSerialNo = await Item.findOne(request.body.serialNo)
    if (!itemSerialNo) {
        const createNewItem = new Item(requestBody)
        await createNewItem.save()
        return response.status(201).send({
            status: true,
            message: "Item created successfully",
            itemToReturn: createNewItem
        })
    }
    else {
        return response.status(400).send({
            status: false,
            message: "Item serial number already exists"
        })
    }
}

exports.getItem = async (request, response) => {
    const id = request.params.id
    const findItem = await Item.findById(id)
    if(findItem) {
        return response.status(200).send({
                status: true,
                message: "Item returned",
                ItemFound: findItem
            })
    } 
    else {
        return response.status(404).send({
            status: false,
            message: "Not found"
        })
    }
}

exports.deleteItem = async (request, response) => {
    const {id} = request.query
    const findItem = await Item.findByIdAndDelete(id);
    console.log(findItem) // check test
    if (findItem) {
      return response.status(200).send({
        status: true,
        message: "Item deleted successfully"
      });
    } else {
      return response.status(404).send({
        status: false,
        message: "Item post not found",
      });
    }
  }