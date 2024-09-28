import User from "../models/User.js";

const getAll = async () => await User.find();

const addData = (data) => 
    new User(data).save().then((user) => user.toObject());

export {
    getAll,
    addData
}
