import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("user", UsersSchema);
export default User;
