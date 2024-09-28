import User from "../model/Usermodel.js";

export const create = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const { mosqueBalance} = newUser;

        // const userExit = await User.findOne({mosqueBalance});
        // if (userExit) {
        //     return res.status(400).json({ message: "User already Exists "});
        // }

        const savedData = await newUser.save();
        //res.status(200).json(savedData);
        res.status(200).json({ message: "User created Succewssfully!"});
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
};

// get all user from MongoDB

export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find();
        if(!userData || userData.length ===0) {
            return res.status(404).json({ message: "User data not found"});
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

// getUserById

export const getUserById = async(req, res) => {
    try {
       const id = req.params.id;
       const userExit = await User.findById(id);
       if(!userExit) {
        return res.status(404).json({ message: "User not found"});
       }
    } catch (error) {
     res.status(500).json({ errorMessage: error.message}); 
    }
};

// findByIdAndUpdate

export const update = async (req, res) => {
    try {
        const id = req.params.id;
       const userExit = await User.findById(id);
       if(!userExit) {
        return res.status(404).json({ message: "User not found"});
       } 
      const updatedData =  await User.findByIdAndUpdate(id, req.body, {
        new: true
       });

      // res.status(200).json(updatedData);
      res.status(200).json({ message: "User Updated Succewssfully!"});
    } catch (error) {
      res.status(500).json({ errorMessage: error.message});  
    }
};

// delete User

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExit = await User.findById(id);
        if(!userExit) {
         return res.status(404).json({ message: "yr jab tum ne delete kar dia he tw user kion search kar rahe hu "});
        } 
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User has been deleted and finished"});
    } catch (error) {
        res.status(500).json({ errorMessage: error.message});
    }
};

