import User from "../../models/user/index.js";
const getUsers = async (req, res) => {
    try {
        const users = await User.findOne({
            username: "Zubair ali",     
        });
        res.status(200).send({ status: 200, users})
    } catch (err) {
        res.status(500).send({ status: 500, err})
    }      
}
export default getUsers;