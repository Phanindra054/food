const mongoose=require('mongoose')

const sch=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        Required:true
    }
})
module.exports=mongoose.model("AdminData",sch)