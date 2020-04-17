var Users =require('../model/user.model')

module.exports.index = function(req,res,next){
    Users.find({},(err,res)=>{

    }).then((users)=>{
        console.log(users); // kiem tra co nhan dc conllection user tu bang1 tu data1 ko?
        res.render('user',{users:users})

    })
   // next();
}
module.exports.api =(req,res,next)=>{
    // Add headers

    // // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    Users.find({},(err,res)=>{
    }).then((users)=>{
        //console.log(users); // lay dc du lieu
        res.send(users)
       // res.render('user',{users:users})

    })
}
module.exports.edit =(req,res,next)=>{
    // lay tu body
    const id= req.body.id;
    const name= req.body.name;
    const address= req.body.address;
    console.log(id);
    Users.findByIdAndUpdate(id,{name:name,address:address},{new:true},(docs)=>{
        console.log(docs);
        res.send('editDone')
    })
    //.then(()=>{res.send('editDone')}); 
}
module.exports.add =(req,res,next)=>{
    //lay tu body
    const name= req.body.name;
    const address= req.body.address;
     var arr = [{ name,address }];
     Users.insertMany(arr, (error,docs)=> {
         console.log('da add '+ docs);
         res.send('addDone')
     })
}
module.exports.delete =(req,res,next)=>{
    //lay id tu body
    const id= req.body.id;
    //console.log(id);
    Users.deleteOne({ _id:id }, function (err) {}).then(()=>{res.send('deleteDone')}); ;
}