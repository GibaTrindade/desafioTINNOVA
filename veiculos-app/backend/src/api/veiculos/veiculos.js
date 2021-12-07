const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    veiculo: { type: String, required: false },
    marca: { type: String, required: false },
    ano: { type: Number, required: false },
    descricao: { type: String, required: false },
    vendido: { type: Boolean, default: false },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }

})

module.exports = restful.model('Veiculo', todoSchema)