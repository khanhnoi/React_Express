var Products = require("../model/product.model");

module.exports.index =(req,res,next)=>{
    Products.find({},(err,docs)=>{
        console.log(docs);
    }).then((products)=>{
        console.log(products);
        res.render('product',{})
    })
}
module.exports.api =(req,res,next)=>{
    Products.find({},(err,docs)=>{
    }).then((products)=>{
        
        res.send(products);
    })
}