const router = require("express").Router();
const { registerUser, authorization } = require("../controllers/user");
const auth = require("../middlewares/auth");

router.post("/signin", authorization);
router.post("/signup", registerUser);

router.use("/users", auth, require("./user"));
router.use("/items", require("./clothingItem"));

module.exports = router;
