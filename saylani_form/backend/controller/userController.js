import User from "../model/userModel.js"

export const create = async (req, res) => {
    try {
       const newUser = new User(req.body); 
       const {email } = newUser;

       const userExist = await User.findOne({ email});
       if ( userExist) {
        return res.status(400).json({ message: "Your User Already Exist."});
       }
     const savedData = await newUser.save();
     res.status(200).json(savedData);
    }catch (error) {
    res.status(500).json({ errormessage: error.message})
    }
}

// second level getAllUsers

export const getAllUsers = async (req, res) => {
  try {
    const userData  = await User.find();
    if(!userData || userData.length === 0){
      return res.status(404).json({ message: "User data not found."});
    }
    res.status(200).json(userData);

  }catch (error) {
    res.status(500).json({ errormessage: error.message})
  }
}
// third level getUserById

export const getUserById = async (req, res) => {
  try {
const id = req.params.id;
const userExist = await User.findById(id);
if (!userExist) {
  return res.status(404).json({ message: "Here User  not found!."});
}
res.status(200).json(userExist);

  }catch (error) {
    res.status(500).json({ errormessage: error.message})
  }
}

// fourth level Updated

export const update =  async (req, res) => {
  try {

    const id = req.params.id;
const userExist = await User.findById(id);
if (!userExist) {
  return res.status(404).json({ message: "Here User  not found!."});
}
const updatedData = await User.findByIdAndUpdate(id, req.body, {
  new:true
})
res.status(200).json(updatedData );
  }catch (error) {
    res.status(500).json({ errormessage: error.message})
  }
}

// fifth level Deleted

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "Finally User has been deleted."});
    }

   await User.findByIdAndDelete(id);
   res.status(200).json({message: "User Deleted by Id" }); 
  }catch (error) {
    res.status(500).json({ errormessage: error.message})
  }
}

