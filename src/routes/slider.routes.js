import { Router } from "express";
import * as sliderCtrl from "../controllers/slider.controller"
const router = Router();

router.get("/",sliderCtrl.findAllSliders)
router.get("/:id",sliderCtrl.findOneSlider)
router.post("/",sliderCtrl.createSlider)
router.delete("/:id",sliderCtrl.delateSlider)
router.put("/:id",sliderCtrl.updateSlider)

export default router;
