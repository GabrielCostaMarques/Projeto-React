const mongoose= require("mongoose")

const {Schema}=mongoose

//carregando o schema da model do usuário
const userSchema=new Schema({
    name:String,
    email:String,
    password:String,
    profileImage: String,
    bio:String
},
{
    //marcando hórario e dia que foi criado
    timestamps:true
}
)

const User = mongoose.model("User",userSchema)
module.exports=User
