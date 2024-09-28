import mongoose from "mongoose";

const EmpolyeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber:{
        type: String,
        required: true
    },
    campus:{
        type: String,
        required: true
    },
    trainerName:{
        type: String,
        required: true
    },
    html:{
        type: String,
        required: true
    },
    css:{
        type: String,
        required: true
    },
    bootstrap:{
        type: String,
        required: true
    },
    responsive:{
        type: String,
        required: true
    },
    github:{
        type: String,
        required: true
    },
    remark:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
})
const EmpolyeeModel = mongoose.model("Empolyees", EmpolyeeSchema)
export default  EmpolyeeModel;