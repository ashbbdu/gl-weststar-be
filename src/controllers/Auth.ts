

import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";



export const signup = async (req: Request, res: Response) => {
    try {
        const { email, firstName, lastName, password, } = req.body;
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(411).json({
                success: false,
                msg: "User already exist"
            })
        }
        if (!email || !firstName || !lastName || !password) {
                return res.status(411).json({
                    success: false,
                    msg: "Please fill the required fields"
                })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const userCreation = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })
        userCreation.password = "";
        return res.status(200).json({
            msg: "User created successfully !",
            user: userCreation
        })

    } catch (e) {
        console.log(e);
        return res.status(404).json({
            success: false,
            msg: "Something went wrong !",
        })
    }
}

export const signin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(413).json({
                message: "User with this email does not exist !",
            })
        }


        const payload = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            id: user._id
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
              payload,
              process.env.JWT_SECRET as string,
              {
                expiresIn: "24h",
              }
              
            )
            user.password = ""
            return res.status(200).json({
                message: "Logged in successfully !",
                user,
                token
            })

      
    }
    } catch (e) {
        console.log(e);

    }
}


// export const getallusers = async (req: Request, res: Response) => {
//     try {
//         const users = await User.find({ userType: "Customer" }).populate("products").exec();
//         res.status(200).json({
//             message: "Users fetched successfully !",
//             users
//         })

//     } catch (e) {
//         console.log(e);

//     }
// }
