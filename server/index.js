import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import Users from "./routes/users.js";
//Router
const app = express();
app.use("/users", Users);
// app.use("/users", Users);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

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
