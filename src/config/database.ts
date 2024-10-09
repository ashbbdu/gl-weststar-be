
require("dotenv").config();


import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Failed");
        console.error(error);
        process.exit(1); 
    }
};

