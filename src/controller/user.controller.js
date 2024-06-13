import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Error retrieving user" });
  }
};

export const updateUserById = async (req, res) => {
  const { userId } = req.params;
  const {password}=req.body
  const updateUser = await User.findByIdAndUpdate(userId,  {password:password}, {
      new: true,
    }
  );
  const savedUser = await updateUser.save();
  return res.status(200).json({savedUser});
};
