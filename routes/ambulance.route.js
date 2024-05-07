import express from "express";
import ambulanceServiceController from "../controller/ambulance.controller.js";

const router = express.Router();

router.get('/emergency-call', ambulanceServiceController.callAmbulance);
router.post('/on-service', ambulanceServiceController.addActiveAmbulance);

export default router;