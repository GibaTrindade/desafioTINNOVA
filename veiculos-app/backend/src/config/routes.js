const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    const veiculosService = require('../api/veiculos/veiculosService')
    veiculosService.register(router, '/veiculos')
}