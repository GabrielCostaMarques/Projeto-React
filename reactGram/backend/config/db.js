const mongoose= require("mongoose")

const dbUSer=process.env.DB_USER
const dbPassword=process.env.DB_PASSWORD


const conn =async()=>{
try {
    const dbConn= await mongoose.connect(`ongodb+srv://${dbUSer}:${dbPassword}@cluster0.gcv0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log("Conectou ao banco");

    return dbConn
    
} catch (error) {
    console.log(error);
    
}


conn()
module.exports=conn
}