import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    dob: {
        type: Date,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    managerID: {
        type: String,
        required: false
    },

    status: {
        type: String,
        required: true
    },

    isManager: {
        type: Boolean,
        required: true
    }

}, { timestamps: true} );

const Record = mongoose.model("Record", recordSchema);

export default Record;
