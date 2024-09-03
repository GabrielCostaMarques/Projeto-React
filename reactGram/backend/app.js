require("dotenv").config()


const express = require("express")

//utilizar aonde vai ser determinado o diretório das imagens
const path = require("path")

//para acessar o projeto da aplicação front
const cors = require("cors")
const { resourceUsage } = require("process")

//porta
const port = process.env.PORT;


const app=express()

//config json and form data response

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Solve CORS - quando executamos requisições pelo mesmo domínio
app.use(cors({credentials:true,origin:"http://localhost:3000"}))


//Upload Directory

app.use("/uploads", express.static(path.join(__dirname,"/uploads")))
 

//DB Connection
require("./config/db.js")

//routes

const router=require("./routes/Routes")
app.use(router)


//test router

router.get("/",(req,res)=>{
    res.send("API Working!")
})

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`);
    
})



// Pacotes npm para o reactGram



// bcryptjs - Serve para poder manipular as senhas dos usuários 

// cors - recebimento de requisição da mesma origem

// dotenv - para variáveis de ambiente

// express - framework nodejs

// express-validator - ele é um midle que age entre as requisições para validar os dados 

// jsonwetoken - serve para autenticação e verificar os tokens de usuários

// mongoose - ferramenta do banco de dados para o node

// multer - serve para trabalhar com upload de imagens


