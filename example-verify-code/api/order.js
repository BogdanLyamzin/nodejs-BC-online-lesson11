const expresss = require("express");
const router = express.Router();

const {getAllOrders, addOrder} = require("../controllers");

router.get("/", getAllOrders);

router.post("/", addOrder);

router.get("/:code", verifyCode);

module.exports = router;