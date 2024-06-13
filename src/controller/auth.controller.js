import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { SECRET_JWT } from "../config.js";

export const signupHandler = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    const userFound = await User.findOne({ email: email });
    if (userFound) return res.status(400).json({ message: "The email already exists" });

    // creando un nuevo usuario
    const newUser = new User({
      name,
      lastName,
      email,
      password,
    });      



    // guardando el usuario en la base de datos
    const savedUser = await newUser.save();
    console.log(savedUser);
    // creando un token de autenticacion
    const token = jwt.sign({ id: savedUser._id }, SECRET_JWT, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

export const signinHandler = async (req, res) => {
  try {
    // buscando el usuario en la base de datos
    const userFound = await User.findOne({ email: req.body.email });

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound._id }, SECRET_JWT, {
      expiresIn: 86400, // 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
