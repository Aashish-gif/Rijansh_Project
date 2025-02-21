import express from "express";
import { createEvent, allEvents, yourEvents, editEvent, deleteEvent, eventDetailPage } from "../Controllers/Events.js";
import { checkAuth } from "../middleware/auth.js";  // ✅ Middleware Import

const router = express.Router();

router.post("/createEvent", checkAuth, createEvent); // ✅ Only Authenticated Users
router.get("/allEvents",checkAuth,allEvents); // ✅ Public Access
router.get("/yourEvents", checkAuth, yourEvents);
router.put("/editEvent/:id", checkAuth, editEvent);
router.delete("deleteEvent/:id", checkAuth, deleteEvent);
router.get("/eventDetail/:id",checkAuth,eventDetailPage)

export default router;
