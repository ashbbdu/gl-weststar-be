import express, { Request, Response } from "express";
import { connectDB } from "./config/database";
import authRoutes from "./routes/Auth";
import shipmentRoutes from "./routes/Shipment";
require("dotenv").config();

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 8000;

app.listen(PORT , () => {
    console.log(`App is listening on PORT ${PORT}`);
})

connectDB();


app.use("/api/v1/auth" , authRoutes)
app.use("/api/v1/shipment" , shipmentRoutes)

app.get("/" , (req : Request , res : Response) => {
    res.send("App is up and running")
})