const router = require("express").Router();
const apiController = require("../controllers/apiController");
const { uploadSingle, uploadMultiple } = require('../middleware/multer');

router.get("/product", apiController.getProduct);
router.get("/transaction/filter_date/:startDate:endDate" , apiController.filterbyDate);
router.post("/login", apiController.loginMember);
router.post("/register", apiController.registerMember);
router.post("/booking", apiController.addBooking);
router.get("/report", apiController.getReport);

module.exports = router;
