const express = require("express");

const app = express();

// app config
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

//

const PORT = 5000;

if (process.env.NODE_ENV !== "production") {
  const cors = require("cors");
  app.use(cors("*"));
}

// SET ROUTERS
const StudentController = require("./controller/StudentController");

app.use("/api/studentapi/", StudentController);

//

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT :: ${PORT} ::`);
});

// DB CONNECTION

const mongoose = require("mongoose");

const URI =
  "mongodb+srv://ouhell:konoDIOda@main.vidlyxx.mongodb.net/main?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then(() => {
    console.log("MONGODB CONNECTED ::");
  })
  .catch((err) => {
    console.log(err);
  });
