import mongoose from "mongoose";

const expensSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, 
        sparse: true, 
    },

    imamSalary: {
        type: Number,
        default: 0
    },
    muazzinSalary: {
        type: Number,
        default: 0
    },
    qariSalary: {
        type: Number,
        default: 0
    },
    electricBill: {
        type: Number,
        default: 0
    },
    jummaCollection: {
        type: Number,
        default: 0
    },
    mosqueBalance: {
        type: Number,
        default: 0
    },
})
export default mongoose.model("Users", expensSchema);