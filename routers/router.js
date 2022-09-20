const express = require("express");
const storeOwnerController = require("./controllers/storeOwnerController")
const inventoryController = require("./controllers/inventoryController")
const app = express();
app.use(express.json());
const router = express.Router()

const {createinventory, getinventory, deleteinventory} = inventoryController 
router.route("/inventory").post(createinventory).get(getinventory).delete(deleteinventory)

const {createstoreOwner, getstoreOwners, updateStoreOwner, deletestoreOwner} = storeOwnerController 
router.route("/storeOwner").post(createstoreOwner).get(getstoreOwners).put(updateStoreOwner).delete(deletestoreOwner)

const{storeOwnerLogin} = storeOwnerController
router.route("/storeOwner/:id").post(storeOwnerLogin)

module.exports = router



