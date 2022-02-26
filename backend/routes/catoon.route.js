let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student model
let cartoonSchema = require("../models/Cartoon");

// Create cartoon
router.route("/create-cartoon").post((req, res, next) => {
  cartoonSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Read cartoon
router.route("/").get((req, res) => {
  cartoonSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single cartoon
router.route("/edit-cartoon/:id").get((req, res) => {
  cartoonSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update cartoon
router.route("/update-cartoon/:id").put((req, res, next) => {
  cartoonSchema.findByIdAndUpdate(
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
        console.log("Cartoon updated successfully");
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
