
import express from "express";
import { addShipment, allShipments, deleteShipment, updateShipment } from "../controllers/Shipment";



const router = express.Router()
router.post("/addShipment" , addShipment);
router.put("/updateShipment/:shipmentId" , updateShipment);
router.delete("/deleteShipment/:shipmentId" , deleteShipment);
router.get("/allShipments" , allShipments);


export default router;