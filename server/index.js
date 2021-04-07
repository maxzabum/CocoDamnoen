import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from 'morgan'
import Users from "./routes/users.js";
//Router
const app = express();
// app.use("/users", Users);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true }));
app.use(cors());
app.use(morgan('dev') )
app.use("/users", Users);

//MongoDB
const CONNECTION_URL =
  "mongodb+srv://maxzabum:maxzabum123@assetmentdb.22hfh.mongodb.net/CocoDamnoenDB?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.messages));
mongoose.set("useFindAndModify", false);
