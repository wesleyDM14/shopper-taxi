import { Router } from "express";

import RideController from "../controllers/rideController";

const router = Router();
const rideController = new RideController();

router.post('/estimate', rideController.estimateRide.bind(rideController));
router.patch('/confirm', rideController.confirmRide.bind(rideController));
router.get('/:customer_id', rideController.getRidesByCustomer.bind(rideController));

export default router;