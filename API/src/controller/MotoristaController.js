const MotoristaModel = require('../model/MotoristaModel');

class MotoristaController {
    
    async create(req,res){
        const motorista = new MotoristaModel(req.body);
        await motorista
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async update(req,res){
        await MotoristaModel.findByIdAndUpdate({'_id' : req.params.id}, req.body)
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });  
    }

    async getMotoristaById(req, res){
        await MotoristaModel.find({'_id' : req.params.id}, req.body)
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async getAll(req, res){
        await MotoristaModel.find({})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }


    async getById(req, res){
        await MotoristaModel.findById({'_id' : req.params.id}, req.body)
        .then(response =>{
            return res.status(200).json(response);
        }
        )
        .catch(error => {
            return res.status(500).json(error);
        });  
    }
}

module.exports = new MotoristaController();