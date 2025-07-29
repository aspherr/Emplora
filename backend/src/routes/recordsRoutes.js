import express from "express"
import { createRecord, deleteRecord, editRecord, getRecords } from "../controllers/recordsController";

const router = express.Router();

router.get("/", getRecords);
router.post("/", createRecord)
router.put("/:id", editRecord)
router.delete("/:id", deleteRecord)

export default router
