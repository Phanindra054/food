const mongoose=require('mongoose')
const reastsch=new mongoose.Schema({
    Restaurant_Name:{
        type:String,
        required:true
    },
    Owner_Name:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true
    },
    Email:{
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
module.exports= mongoose.model("Restaurants",reastsch)