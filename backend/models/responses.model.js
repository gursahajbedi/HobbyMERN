const mongoose=require('mongoose')

const Responses = mongoose.model('Responses',mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    hobbies:{
        type:String,
        required:true
    }
}))

module.exports=Responses