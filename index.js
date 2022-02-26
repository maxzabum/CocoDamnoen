let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser");
dbConfig = require("./database/db");

path = require("path");

// Express Route
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route");
const newsRoute = require("./routes/news.route");
const contactRoute = require("./routes/contact.route");
const storeRoute = require("./routes/store.route");

// Connecting MongDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://maxzabum:maxzabum123@assetmentdb.22hfh.mongodb.net/CocoDamnoenDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      // useUnifiedTopology: true
    }
  )
  .then(
    () => {
      console.log(`Database successfully connected`);
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
app.use("/product", productRoute);
app.use("/user", userRoute);
app.use("/news", newsRoute);
app.use("/contact", contactRoute);
app.use("/store", storeRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
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
