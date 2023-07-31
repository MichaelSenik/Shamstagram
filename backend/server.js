const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const app = express();
//require("dotenv").config();

app.use(cors());
app.use(express.json());

MONGO_URL="mongodb+srv://MaximSenik:MaximSenik123@cluster0.jejle79.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    strictQuery: false,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });


app.use("/api/auth", authRoutes);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

