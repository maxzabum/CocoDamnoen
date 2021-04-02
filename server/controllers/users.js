import Users from "../models/users.js";
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    console.log(users, "sds");
    res.send(users);
    // res.status(200).json(users);
  } catch (err) {
    //  res.status(404).json({ messages: err.messages });
    console.log(err.messages);
  }
};
