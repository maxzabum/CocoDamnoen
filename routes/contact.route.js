let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

const auth = require("../middleware/auth");
// Student model
let contactSchema = require("../models/Contact");

// Create contact
router.route("/create-contact").post(auth, (req, res, next) => {
  const contact = new contactSchema({
    _id: new mongoose.Types.ObjectId(),
    address: req.body.address,
    phone: req.body.phone,
    mail: req.body.mail,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    line: req.body.line,
    instagram: req.body.instagram,
    create_date: Date.now(),
  });

  contactSchema.create(contact, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(contact);
      res.json(contact);
    }
  });
});

// Read contact
router.route("/").get((req, res) => {
  contactSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single contact
router.route("/edit-contact/:id").get((req, res) => {
  contactSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update contact
router.route("/update-contact/:id").put(auth, (req, res, next) => {
  contactSchema.findByIdAndUpdate(
    req.params.id,
    {
      address: req.body.address,
      phone: req.body.phone,
      mail: req.body.mail,
      facebook: req.body.facebook,
      twitter: req.body.twitter,
      line: req.body.line,
      instagram: req.body.instagram,
      modify_date: Date.now(),
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Contact updated successfully");
      }
    }
  );
});

// Delete contact
router.route("/delete-contact/:id").delete(auth, (req, res, next) => {
  contactSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
