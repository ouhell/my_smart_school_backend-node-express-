const express = require("express");
const path = require("path");
const UserModel = require("../schema/UserModal");

const StudentRouter = express.Router();

StudentRouter.get("/student/", async (req, res) => {
  const allStudents = await UserModel.where("role")
    .equals("STUDENT")
    .or([{ grade: "4em lyce" }]);

  res.status(200).json(allStudents).end();
});

StudentRouter.put("/student/", async (req, res) => {
  const student = {
    firstName: "idir",
    lastName: "ait mebarek",
    birthDate: new Date(),
    isEnabled: true,
    role: "STUDENT",
  };

  const newStudent = await UserModel.create(student);

  res.status(200).json(newStudent).end();
});

module.exports = StudentRouter;
