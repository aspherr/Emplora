export async function getRecords(req, res) {
    try {
        res.status(200).send("records were found sucessfully");

    } catch (error) {
        console.error("Error in GET records request: ", error)
    }
}

export async function createRecord(req, res) {
    try {
        res.status(201).json({ message: "record created successfully" });

    } catch (error) {
        console.error("Error in POST records request: ", error)
    }
}

export async function editRecord(req, res) {
    try {
        res.status(200).json({ message: "record updated successfully" });

    } catch (error) {
        console.error("Error in PUT records request: ", error)
    }
}

export async function deleteRecord(req, res) {
    try {
        res.status(200).json({ message: "record deleted successfully" });

    } catch (error) {
        console.error("Error in DELETE records request: ", error)
    }
}

