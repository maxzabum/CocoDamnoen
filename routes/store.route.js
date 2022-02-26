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
let storeSchema = require("../models/Store");

// Create store
router
  .route("/create-store")
  .post(upload.single("image"), auth, (req, res, next) => {
    const store = new storeSchema({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      image: req.file.path,
      type: req.body.type,
      create_date: Date.now(),
    });
    storeSchema.create(store, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(store);
        res.json(store);
      }
    });
  });

// Read store
router.route("/").get((req, res) => {
  storeSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single store
router.route("/edit-store/:id").get((req, res) => {
  storeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update store
router
  .route("/update-store/:id")
  .put(upload.single("image"), auth, (req, res, next) => {
    storeSchema.findByIdAndUpdate(
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
          console.log("Store updated successfully");
        }
      }
    );
  });

// Delete store
router.route("/delete-store/:id").delete(auth, (req, res, next) => {
  storeSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
