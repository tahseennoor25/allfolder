import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", 
        required: true,
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", 
        required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
        type: String, enum: ["pending", "approved", "cancelled"],
        default: "pending"
    },
});
module.exports = mongoose.model("Appointment", appointmentSchema);