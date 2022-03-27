const messageSchema = require("../models/messageSchema");

exports.sendMessage = async(req,res,next)=>{
        const {message,sender} = req.body;
         if(!message || !sender){
            return next("message and sender are required")
         }
        const msg = await messageSchema.create({message,sender});
        res.set('Access-Control-Allow-Origin', '*');
        res.status(201).json({
            sucess:true,
            msg,
        })

}