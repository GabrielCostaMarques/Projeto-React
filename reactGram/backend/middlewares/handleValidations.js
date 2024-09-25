const {validationResult}= require("express-validator")

const validate=(req,res,next)=>{
    //usando a função de validação de requisição do express
    const errors=validationResult(req)
    
    //Verificando se o erro veio vazio
    if (errors.isEmpty()) {
        return next()
    }
    
    //criando uma lista de erros
    const extractedErrors=[]
    
    //transformando os erros vindos em um array e mapeando cada um para colocar no extractedErrors
    errors.array().map((err)=>extractedErrors.push(err.msg))

    //colocando status 422 para definir que a requisição nao foi bem sucedida
    //e mostrando o erro para o usuário
    return res.status(422).json({
        error:extractedErrors
    })
}


module.exports=validate