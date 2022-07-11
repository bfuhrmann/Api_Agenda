const AgendaModel = require('../model/AgendaModel');
//const {  } = require('date-fns');
const AgendaValidation = async (req, res, next)=>{

    const { Titulo, Descricao, ImagemGira, when } = req.body;
    if(!Titulo){
        return res.status(400).json({ error: 'Título é obrigatório.'});
    }else if(!Descricao){
        return res.status(400).json({ error: 'Descrição é obrigatória.'});
    }else if(!ImagemGira){
        return res.status(400).json({ error: 'Imagem é obrigatória.'});
    }else if(!when){
        return res.status(400).json({ error: 'Data e Hora são obrigatórios.'});
    }else{
        next();    
    }
}

module.exports = AgendaValidation;