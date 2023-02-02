import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";

// mongodb+srv://codesamee:<password>@cluster0.eyydmtq.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://codesamee:8378825832@cluster0.eyydmtq.mongodb.net/tour_db?retryWrites=true&w=majority

// mongodb+srv://samee:8378825832@cluster0.b1uqbmt.mongodb.net/?retryWrites=true&w=majority


//define port 5000 so our backend will run o 5000 port
const port = 5000;

// let initialize express server
const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); //   http://localhost:5000/users/signup
app.use("/tour", tourRouter); //   http://localhost:5000/tour

const MONGODB_URL =
  "mongodb+srv://samee:8378825832@cluster0.b1uqbmt.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Live Server Running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
