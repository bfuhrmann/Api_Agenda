const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const AgendaSchema = new Schema({
    Titulo: { type: String, require: true },
    Descricao: { type: String, requerid: true },
    ImagemGira: { type: String, requerid: true },
    when: { type: Date, requerid: true },
    criado: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Agenda', AgendaSchema);