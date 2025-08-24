import express from "express"
import { createRecord, getRecordById, getManagerNames, deleteRecord, editRecord, getRecords } from "../controllers/recordsController.js";

const router = express.Router();

router.get("/", getRecords);
router.get("/managers", getManagerNames);
router.get("/:id", getRecordById);
router.post("/", createRecord);
router.patch("/:id", editRecord);
router.delete("/:id", deleteRecord);

export default router
