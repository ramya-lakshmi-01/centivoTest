import express from "express";
import dotenv from "dotenv";

import users from './routes/users.js';

import connectDB from './config/dbConfig.js'
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/users/", users);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
