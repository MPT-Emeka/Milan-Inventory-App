const storeOwner = require("../Entities/storeOwnerModel")

exports.createStoreOwner = async (request, response) => {
    const requestBody = request.body;
    try {
        const findEmail = await storeOwner.findOne({ email: requestBody.email });
        if (findEmail) {
              return response.status(409).send({
                status: false,
                message: "Email already exists",
              });
            } else {
              const createNewStoreOwner = new storeOwner(requestBody);
              await createNewStoreOwner.save();
              return response.status(201).send({
                status: true,
                message: "Account has been  created successfully",
                newStoreOwner: createNewStoreOwner,
              });
            }
    }catch (error) {
      return response.status(404).send({
          status: false,
          message: "invalid email"
      })   
    }
}

exports.updateStoreOwner = async (request, response) => {
    const findstoreOwner = await storeOwner.findById(request.body.Id);
     findstoreOwner.email = request.body.email
     findstoreOwner.password = request.body.password
     await findstoreOwner.save()
      return response.status(200).send({
        status: true,
        message: "Account has been updated successfully",
        updatedstoreOwner: findstoreOwner})
}


exports.storeOwnerLogin = async (request, response) => 
{
    const id = request.params.id;
    const findStoreOwner = storeOwner.findById(id)
    if (findStoreOwner){
       return response.status(200).send({
            status: true,
            message: "Successful login",
            storeOwnerSignin: findStoreOwner})
    }else {
        return response.status(404).send({
            status: false,
            message: "store owner not found"
        })
    }
}

exports.getstoreOwners = async (request, response) => {
    const findAllstoreOwners = await storeOwner.find();
    return response.status(200).send({
      status: true,
      message: "All accounts created",
      AllstoreOwners: findAllstoreOwners,
    });
}

exports.deletestoreOwner = async (request, response) => {
    const {id} = request.query
    console.log(id)
    const findstoreOwner = await User.findByIdAndDelete(id);
    if (findstoreOwner) {
      return response.status(200).send({
        status: true,
        message: "User deleted successfully",
        deletedstoreOwner: findstoreOwner,
      });
    } else {
      return response.status(404).send({
        status: false,
        message: "User not found",
      });
    }
}







