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
let newsSchema = require("../models/News");

// Create news
router
  .route("/create-news")
  .post(upload.single("image"), auth, (req, res, next) => {
    const news = new newsSchema({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      image: req.file.path.replace(/\s/g, ""),
      type: req.body.type,
      create_date: Date.now(),
    });
    newsSchema.create(news, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(news);
        res.json(news);
      }
    });
  });

// Read news
router.route("/").get((req, res) => {
  newsSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single news
router.route("/edit-news/:id").get((req, res) => {
  newsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update news
router
  .route("/update-news/:id")
  .put(upload.single("image"), auth, (req, res, next) => {
    newsSchema.findByIdAndUpdate(
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
          console.log("product updated successfully");
        }
      }
    );
  });

// Delete news
router.route("/delete-news/:id").delete(auth, (req, res, next) => {
  newsSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
