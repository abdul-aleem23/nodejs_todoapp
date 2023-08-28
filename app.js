import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/tasks.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";


export const app = express();

config({
    path: "./data/config.env"
});


//Middle-ware
app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true })); // For parsing form data.
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL], // the main domain name
    methods:["GET", "POST", "PUT", "DELETE"], // al the methods that are allowed
    credentials: true,
}));


// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);



// Api
app.get("/", (req, res) => {
    res.send("Site Up")
});

//using Error Middle-ware
app.use(errorMiddleware);