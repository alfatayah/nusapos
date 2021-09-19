const router = require('express').Router();
const adminController = require('../controllers/adminController');
const productController = require('../controllers/productController')
const { uploadSingle, uploadMultiple } = require('../middleware/multer');
const auth = require('../middleware/auth');
const transactionController = require('../controllers/transactionController');
const discountController = require('../controllers/discountController');
const merkController = require('../controllers/merkController');
const typeController = require('../controllers/typeController');

/**
 *  @name viewsigninRoutes  
 *  @route {POST} /v1/file
 */
router.get("/signin", adminController.viewSignIn);
router.post("/signin", adminController.actionSignin);
router.use(auth);
router.get("/logout", adminController.actionLogout);

// ketika login succes akan mengarahkan ke screen view dashboard
router.get("/dashboard", adminController.viewDashboard);
router.post("/dashboard/addBook", adminController.addBook);
router.post("/transaction/addTrans", adminController.addTrans);



router.get("/transaction", transactionController.viewTransaction);
router.get("/transaction/kasbon", transactionController.viewTransactionKasbon);
router.post("/transaction" , transactionController.cancelTransaction)
router.get("/transaction/detail/:id", transactionController.showDetailTransaction);
router.get("/transaction/print_transaction/:id", transactionController.showPrintTransaction);
router.post("/transaction/payment_cash", transactionController.paymentCash);
router.post ("/transaction/payment_transfer" , transactionController.paymentTransfer);
router.post("/transaction/payment_kasbon" , transactionController.paymentKasbon);
router.post("/transaction/payment_dp" , transactionController.paymentDP);

router.get("/discount", adminController.viewDiscount);
router.post("/discount", discountController.addDiscount);
router.put("/discount", discountController.editDiscount);
router.delete('/discount/:id', discountController.deleteDiscount);


router.get("/product", adminController.viewProduct);
router.post("/product", uploadSingle, productController.addProduct);
router.put("/product", uploadSingle, productController.editProduct);
router.delete('/product/:id', productController.deleteProduct);


router.get("/merk", adminController.viewMerk);
router.post("/merk", merkController.addMerk);
router.put("/merk", merkController.editMerk);
router.delete('/merk/:id', merkController.deleteMerk);

router.get("/type", adminController.viewType);
router.post("/type", typeController.addType);
router.put("/type", typeController.editType);
router.delete('/type/:id', typeController.deleteType);

router.get("/member", adminController.viewMember);
router.get("/documentation", adminController.viewDoc);

module.exports = router;