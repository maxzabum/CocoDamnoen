let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// User model
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let userSchema = require("../models/User");
const auth = require("../middleware/auth");

// Create User
router.route("/create-user").post(async (req, res, next) => {
  try {
    const { username, password, name, lastname, role, phone } = req.body;
    if (!(username && password && name && lastname && role && phone)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await userSchema.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User already exist. Please login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);
    const user = await userSchema.create({
      username: req.body.username,
      password: encryptedPassword,
      name: req.body.name,
      lastname: req.body.lastname,
      role: req.body.role,
      phone: req.body.phone,
      // create_date: Date.now(),
    });
    const token = jwt.sign({ user_id: user._id, username }, "qwertyuiop", {
      expiresIn: "2h",
    });
    user.token = token;

    const _user = {
      user,
      token,
    };
    res.status(201).json(_user);
  } catch (err) {
    console.log(err);
  }
  //   const user = new userSchema({
  //     _id: new mongoose.Types.ObjectId(),
  //     username: req.body.username,
  //     password: req.body.password,
  //     name: req.body.name,
  //     lastname: req.body.lastname,
  //     role: req.body.role,
  //     phone: req.body.phone,
  //     create_date: Date.now(),
  //   });

  //   userSchema.create(user, (error, data) => {
  //     if (error) {
  //       return next(error);
  //     } else {
  //       console.log(user);
  //       res.json(user);
  //     }
  //   });
});

router.route("/login").post(async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username, password)) {
      res.status(400).send("All input is required");
    }
    const user = await userSchema.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ user_id: user._id, username }, "qwertyuiop", {
        expiresIn: "2h",
      });
      user.token = token;
      const _user = user.token;

      res.status(200).json(_user);
    }
  } catch (err) {
    console.log(err);
  }
});

// Read User
router.route("/").get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(data);
    }
  });
});

// Get single User
router.route("/edit-user/:id").get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update User
router.route("/update-user/:id").put((req, res, next) => {
  userSchema.findByIdAndUpdate(
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
        console.log("User updated successfully");
      }
    }
  );
});

// Delete User
router.route("/delete-user/:id").delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

router.route("/welcome").post(auth, (req, res) => {
  res.status(200).send("welcome");
});

module.exports = router;
