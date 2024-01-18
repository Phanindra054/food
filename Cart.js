const mongoose=require('mongoose')

const cartsch= new mongoose.Schema({
    Customer:{
        type:String,
        required:true
    },
    Item:{
        type:String,
        required:true
    },
    Cost:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("Cart",cartsch)