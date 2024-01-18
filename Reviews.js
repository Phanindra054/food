const mongoose=require('mongoose')

const revsch= new mongoose.Schema({
    Restaurant:{
        type:String,
        required:true
    },
    Dish:{
        type:String,
        required:true
    },
    Rating:{
        type:String,
        required:true
    },
    Comments:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("Reviews",revsch)