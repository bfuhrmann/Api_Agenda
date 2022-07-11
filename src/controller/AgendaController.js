const { response } = require('express');
const AgendaModel = require('../model/AgendaModel');
const { startOfMonth, endOfMonth } = require('date-fns');
const current = new Date();

class AgendaController{
   async create(req, res){
        const agenda = new AgendaModel(req.body);
        await agenda
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
   }

   async update(req, res){
       await AgendaModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
       .then(response => {
            return res.status(200).json(response);
       })
       .catch(error => {
           return res.status(500).json(error);
       });
   }

   async all(req, res){
       await AgendaModel.find({},req.body)
       .sort('when')
       .then(response =>{
           return res.status(200).json(response);
       })
       .catch(error =>{
           return res.status(500).json(error);
       });
   }

   async show(req, res){
       await AgendaModel.findById(req.params.id)
       .then(response =>{
            if(response){
                return res.status(200).json(response);
            }else{
                return res.status(404).json({error: 'Gira não encontrada.'});
            }
       })
       .catch(erro =>{
            return res.status(500).json(error);
       });
   }

   async delete(req, res){
       await AgendaModel.deleteOne({'_id': req.params.id})
       .then(response =>{
           return res.status(200).json(response);
       })
       .catch(error =>{
           return res.status(500).json(error);
       });
   }

   async month(req, res){
       await AgendaModel
       .find({
           'when':{'$gte': startOfMonth(current), '$lte': endOfMonth(current)}
       }, req.body)
       .sort('when')
       .then(response =>{
           return res.status(200).json(response);
       })
       .catch(error =>{
           return res.status(500).json(error);
       });
   }

}

module.exports = new AgendaController();