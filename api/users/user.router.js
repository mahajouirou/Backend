const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

const {
  createUser,
  login,
  getUserByUserId,
 
  getUsers,
  updateUsers,
  deleteUser,
  
} = require("./user.controller");
router.get("/", getUsers);
router.post("/register", createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login,checkToken);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);


module.exports = router;