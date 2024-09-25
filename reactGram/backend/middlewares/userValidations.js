const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage("O Nome é obrigatório")
            .isLength({ min: 3 }).withMessage("O nome precisa ter no mínimo 3 caracteres"),
        body("email")
            .isString().withMessage("O e-mail é obrigatório")
            .isEmail().withMessage("O e-mail é inválido"),
        body("password")
            .isString().withMessage("A senha é obrigatório")
            .isLength({ min: 5 }).withMessage("A senha precisa ter no mínimo 5 caracteres"),
        body("confirm-password")
            .isString().withMessage("A confirmação de senha é obrigatória")
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("As senhas não são iguais");
                }
                return true; // Retorna true se a validação for bem-sucedida
            })
    ];
};


module.exports = {
    userCreateValidation,
}