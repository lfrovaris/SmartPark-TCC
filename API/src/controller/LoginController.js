const MotoristaModel = require('../model/MotoristaModel');
const nodemailer = require('nodemailer');

class LoginController {
 
    async login(req, res){

        const email = req.body.email;
        const password = req.body.password;
        
        await MotoristaModel.findOne({email: email, password: password} )
        .then(response =>{
            console.log(response);
            if(response == null)
                return res.status(404).json(response);
                
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }
    
    async recoverPassword(req,res){

        req.body.password = 'senhaTemporaria';

        await  MotoristaModel.findOneAndUpdate({email: req.params.email}, req.body)
        .then(response => {
            if(response == null)
                return res.status(404).json(response);
   
            let sender = nodemailer.createTransport({
                //host: 'smtp.gmail.com',
                service: 'Gmail',
               // port: 587,
               // secure: true,
                auth: {
                    user: 'rovarisleokot@gmail.com',
                    pass: 'SmartParkTCC' 
                }
            });

            let resetPasswordEmailToSend = {
                    from: 'rovarisleokot@gmail.com',
                    to: req.params.email,
                    subject: 'Redefinição de senha',
                    text: 'Esqueceu sua senha? \n \n Não tem problema. Sua senha atual é: senhaTemporaria. \n \n Para alterar, faça login e troque sua senha. \n \n SmartPark - TCC Unisinos'
            };

            sender.sendMail(resetPasswordEmailToSend, function(error){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email enviado com sucesso');
                }
            });

            return res.status(200).json(response);
            
        }).catch(erro =>{
            //caso de erro
            console.log("Erro ao tentar trocar a senha:", erro);
            return res.status(500).json(erro);
        });
    } 

}

module.exports = new LoginController();
