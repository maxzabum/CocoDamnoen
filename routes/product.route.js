let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
const auth = require("../middleware/auth");
// upload image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toDateString().replace(/\s/g, "") + file.originalname);
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
  .post(upload.single("image"), auth, (req, res, next) => {
    const product = new productSchema({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      image: req.file.path.replace(/\s/g, ""),
      type: req.body.type,
      create_date: Date.now(),
    });
    // res.json(product);
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
router
  .route("/update-product/:id")
  .put(upload.single("image"), auth, (req, res, next) => {
    try {
      productSchema.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          description: req.body.description,
          image: req.file.path,
          type: req.body.type,
          modify_date: Date.now(),
        },
        (error, data) => {
          if (error) {
            return next(error);
            console.log(error);
          } else {
            res.json(data);
            console.log("dds" + data);
            console.log("product  successfully");
          }
        }
      );
    } catch (error) {
      productSchema.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          description: req.body.description,
          type: req.body.type,
          modify_date: Date.now(),
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
    }
  });

// Delete student
router.route("/delete-product/:id").delete(auth, (req, res, next) => {
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
