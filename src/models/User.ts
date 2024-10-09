import mongoose from "mongoose";

// interface IUser extends Document {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     createdAt?: Date;
//     updatedAt?: Date;
// }

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true, 
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
