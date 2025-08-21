import mongoose from "mongoose";

const encodeID = (id, isManager) => {
    const tail = id.toString().slice(-6).toUpperCase();
    return (isManager ? 'MNGR-' : 'EMP-') + tail;
}

const recordSchema = new mongoose.Schema({
    empCode: {
        type: String,
        unique: true,
        index: true
    },

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

    manager: {
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

recordSchema.pre('validate', function(next) {
    if (!this.empCode && this._id) {
        this.empCode = encodeID(this._id, this.isManager);
    };
    next();
})

const Record = mongoose.model("Record", recordSchema);

export default Record;
