let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser");
dbConfig = require("./database/db");

path = require("path");

// Express Route
const studentRoute = require("./routes/student.route");
const cartoonRoute = require("./routes/catoon.route");
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route");

// Connecting MongDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("Database successfully connected");
    },
    (error) => {
      console.log("Could not connect to database: " + error);
    }
  );

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use("/students", studentRoute);
app.use("/cartoon", cartoonRoute);
app.use("/product", productRoute);
app.use("/user", userRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });
}

// PORT
// const port = process.env.PORT || 4000;

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Connected to port ");
});