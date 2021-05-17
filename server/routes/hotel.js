import express from "express";
import { requireSignin, hotelOwner } from "../middleware/index";
import {
  create,
  hotels,
  image,
  sellerHotels,
  remove,
  read,
  update,
  userHotelsBookings,
  isAlreadyBooked
} from "../controllers/hotel";
import formidable from "express-formidable";
const router = express.Router();

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);
router.get("/seller-hotels", requireSignin, sellerHotels);
router.delete("/delete-hotel/:hotelId", requireSignin, hotelOwner, remove);
router.get("/hotel/:hotelId", read);
router.put(
  "/update-hotel/:hotelId",
  requireSignin,
  hotelOwner,
  formidable(),
  update
);

//orders
router.get("/user-hotel-bookings",requireSignin,userHotelsBookings);
router.get("/is-already-booked",requireSignin,isAlreadyBooked)
module.exports = router;
