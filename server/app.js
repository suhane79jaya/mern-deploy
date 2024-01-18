import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "https://mern-deploy-frontend-tm47.onrender.com",
};
// Middleware for parsing request body
app.use(express.json());
app.use(cors(corsOptions));
app.get("/", cors(), (request, response) => {
  console.log(request);
  return response
    .status(201)
    .json({ message: "Welcome To MERN Stack Book library " });
});

let con = process.env.mongoDBURL;
mongoose
  .connect(con)
  .then(() => {
    const PORT = process.env.PORT || 8000;
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
