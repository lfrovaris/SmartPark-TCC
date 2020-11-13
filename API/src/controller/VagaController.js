const VagaModel = require('../model/VagaModel');

class VagaController {
    
   async create(req,res){
        const vaga = new VagaModel (req.body);
        await vaga
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
   };

   async getAll(req, res){
        await VagaModel.find({})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async changeStatus(req, res){
        await VagaModel.findOneAndUpdate({'macAddress' : req.body.macAddress}, req.body)
        .then(response =>{
            return res.status(200).json(response);
        }
        )
        .catch(error => {
            return res.status(500).json(error);
        });  
    }

    async getById(req, res){
        await VagaModel.findById({'_id' : req.params.id}, req.body)
        .then(response =>{
            return res.status(200).json(response);
        }
        )
        .catch(error => {
            return res.status(500).json(error);
        });  
    }

    async getMyFavorites(req, res){
        if(!req.query.ids)
           return res.status(200).json([]);
        const ids = req.query.ids.split(",");
        VagaModel.find().where('_id').in(ids).exec((error, response) => {
            if(error){
                return res.status(500).json(error);
            }
            return res.status(200).json(response);
        });
    }
}

module.exports = new VagaController ();