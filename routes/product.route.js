let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// upload image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toDateString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
// Student model
let productSchema = require("../models/Product");

// Create product
router
  .route("/create-product")
  .post(upload.single("image"), (req, res, next) => {
    const product = new productSchema({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      image: req.file.path,
    });
    productSchema.create(product, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(product);
        res.json(product);
      }
    });
  });

// Read product
router.route("/").get((req, res) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single product
router.route("/edit-product/:id").get((req, res) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update product
router.route("/update-product/:id").put((req, res, next) => {
  productSchema.findByIdAndUpdate(
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
        console.log("product updated successfully");
      }
    }
  );
});

// Delete student
router.route("/delete-product/:id").delete((req, res, next) => {
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
