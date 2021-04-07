import express from "express";
import { getUsers } from "../controllers/users.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/insert", (req, res) => {
    console.log(req.body);
  });
export default router;
