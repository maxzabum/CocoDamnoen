let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student model
let studentSchema = require("../models/Student");

// Create Student
router.route("/create-student").post((req, res, next) => {
  const student = new studentSchema({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    rollno: req.body.rollno,
    create_date: Date.now(),
  });

  studentSchema.create(student, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(student);
      res.json(student);
    }
  });
});

// Read students
router.route("/").get((req, res) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single student
router.route("/edit-student/:id").get((req, res) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update student
router.route("/update-student/:id").put((req, res, next) => {
  studentSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Student updated successfully");
      }
    }
  );
});

// Delete student
router.route("/delete-student/:id").delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
