import express from "express";
import { createEvent, allEvents, yourEvents, editEvent, deleteEvent, eventDetailPage,searchEvents  } from "../Controllers/Events.js";
import { registerForEvent, getRegisteredUsers } from "../Controllers/RegistrationController.js";
import { checkAuth } from "../middleware/auth.js";  // ✅ Middleware Import

const router = express.Router();

router.post("/createEvent", checkAuth, createEvent); // ✅ Only Authenticated Users
router.get("/allEvents",checkAuth,allEvents); // ✅ Public Access
router.get("/yourEvents", checkAuth, yourEvents);
router.put("/editEvent/:id", checkAuth, editEvent);
router.delete("/deleteEvent/:id", checkAuth, deleteEvent);
router.get("/eventDetail/:id",checkAuth,eventDetailPage);
router.post("/registerEvent", registerForEvent);
router.get("/registeredUsers/:eventId", getRegisteredUsers);
router.get("/searchEvents", searchEvents); // ✅ Search API

export default router;
