import Record from "../models/record.js"

export async function getRecords(_, res) {
    try {
        const records = await Record.find().sort({createdAt: -1});
        res.status(200).json(records);

    } catch (error) {
        console.error("Error in GET records controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getRecordById(req, res) {
    try {
        const record = await Record.findById(req.params.id);
        if (!record) {
            return res.status(404).json({ message: "Error: record could not be found" });
        };
        res.status(200).json(record);

    } catch (error) {
        console.error("Error in GET record ID controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getManagerNames(_, res) {
    try {
        const managers = await Record.find({ empCode: { $regex: /^MNGR-/ } });
        if (!managers) {
            return res.status(404).json({ message: "Error: No managers can be found" });
        };
        res.status(200).json(managers);

    } catch (error) {
        console.error("Error in GET managers controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
 
export async function createRecord(req, res) {
    try {
        if (Array.isArray(req.body)) {
            const docs = await Record.create(req.body);
            return res.status(201).json({ count: docs.length, records: docs });
        }

        const {empCode, name, email, phone, gender, dob, address, department, role, manager, status, isManager} = req.body;
        const newRecord = new Record({empCode, name, email, phone, gender, dob, address, department, role, manager, status, isManager})
        await newRecord.save();
        res.status(201).json(newRecord);

    } catch (error) {
        console.error("Error in POST records controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function editRecord(req, res) {
    try {
        const {name, email, phone, gender, dob, address, department, role, manager, status} = req.body;
        const updatedRecord = await Record.findByIdAndUpdate(
            req.params.id, {name, email, phone, gender, dob, address, department, role, manager, status},
            { new: true, runValidators: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: "Error: record could not be found" });
        };
        res.status(200).json({ message: "record updated successfully" });

    } catch (error) {
        console.error("Error in PUT records controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteRecord(req, res) {
    try {
        const toBeDeleted = await Record.findByIdAndDelete(req.params.id);
        if (!toBeDeleted) {
            return res.status(404).json({ message: "Error: record could not be found" });
        };
        res.status(200).json({ message: "record deleted successfully" });

    } catch (error) {
        console.error("Error in DELETE records controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

