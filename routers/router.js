const express = require("express");
const storeOwnerController = require("../controllers/storeOwnerController")
const inventoryController = require("../controllers/inventoryController")
const itemController = require("../controllers/itemController")
const app = express();
app.use(express.json());
const router = express.Router()

const {createItem, getItem, deleteItem} = itemController
router.route("/item").post(createItem).get(getItem).delete(deleteItem)

const {createInventory, getInventory} = inventoryController 
router.route("/inventory").post(createInventory).get(getInventory) 

const {createStoreOwner, getStoreOwners, updateStoreOwner, deleteStoreOwner} = storeOwnerController 
router.route("/storeOwner").post(createStoreOwner).get(getStoreOwners).put(updateStoreOwner).delete(deleteStoreOwner)

const{storeOwnerLogin} = storeOwnerController
router.route("/storeOwner/login").post(storeOwnerLogin)

module.exports = router



