const mongoose=require('mongoose')

const Custsch= new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Mobile:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("Customer",Custsch)