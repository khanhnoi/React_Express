var express =require("express");
var router =  express.Router();
var productControl = require('../control/product.control');


router.get('/',productControl.index);
router.get('/api',productControl.api);

module.exports = router;
