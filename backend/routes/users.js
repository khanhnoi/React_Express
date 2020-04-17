var express = require('express');
var router = express.Router();
var userControl = require('../control/user.control')

/* GET users listing. */
router.get('/',
userControl.index
);
router.get('/api',
userControl.api
);
router.get('/edit',function(req,res,next){
    res.render('edit',{})   
}
);
router.get('/add',function(req,res,next){
    res.render('edit',{})   
}
);
router.get('/delete',(req,res,next)=>{
    res.render('delete')
})
router.post('/delete',
userControl.delete)
router.post('/edit',
userControl.edit
);
router.post('/add',
userControl.add 
)

module.exports = router;
