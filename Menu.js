const mongoose= require('mongoose')

const menu=new mongoose.Schema({
    Restaurant:{
        type:String,
        required:true
    },
    Food:{
        type:String,
        required:true
    },
    Ingredients:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Menu",menu)