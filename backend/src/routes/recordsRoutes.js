import express from "express"
import { createRecord, getRecordById, deleteRecord, editRecord, getRecords } from "../controllers/recordsController.js";

const router = express.Router();

router.get("/", getRecords);
router.get("/:id", getRecordById);
router.post("/", createRecord)
router.put("/:id", editRecord)
router.delete("/:id", deleteRecord)

export default router
