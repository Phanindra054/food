const mongoose= require('mongoose')

const broughtsch=new mongoose.Schema({
    Restaurant:{
        type:String,
        required:true
    },
    Item:{
        type:String,
        required:true
    },
    Customer:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("Purchase",broughtsch)