require("dotenv").config();
const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  cors = require("cors"),
  fileUpload = require("express-fileupload");

// middleware config
app.use(express.json());
app.use(fileUpload());
app.use(cors());

// route
const userRouter = require("./router/user.router");

app.use("/api/v1/user", userRouter);

// fallback route
app.get("*", (req, res, next) => {
  res.status(300).json({ con: false, msg: "this route is not valid" });
});

// global error handle
app.use((err, req, res, next) => {
  res.status(500).json({ cor: false, error: err.message });
});

// Database connection
mongoose
  .connect(process.env.DB_URL)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`server was running in http:127.0.0.1:${process.env.PORT}`);
    })
  )
  .catch((e) => {
    console.log(e);
  });
