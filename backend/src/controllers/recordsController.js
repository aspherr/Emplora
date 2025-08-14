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
        console.error("Error in GET records controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
 
export async function createRecord(req, res) {
    try {

        const {name, email, phone, gender, dob, address, department, role, manager, status, isManager} = req.body;
        const newRecord = new Record({name, email, phone, gender, dob, address, department, role, manager, status, isManager})
        await newRecord.save();
        res.status(201).json(newRecord);

    } catch (error) {
        console.error("Error in POST records controller: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function editRecord(req, res) {
    try {
        const {name, email, phone, department, title, managerID, status} = req.body;
        const updatedRecord = await Record.findByIdAndUpdate(req.params.id, {name, email, phone, department, title, managerID, status});
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

