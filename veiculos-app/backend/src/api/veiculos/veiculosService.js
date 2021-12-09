const Veiculo = require('./veiculos')
const moment = require('moment')

Veiculo.methods(['get', 'post', 'put', 'delete'])
Veiculo.updateOptions({ new: true, runValidators: true })

Veiculo.route('naoVendidos', (req, res, next) => {
    Veiculo.count({ vendido: false }, (error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })

        }
    })
})

Veiculo.route('porMarca', (req, res, next) => {
    Veiculo.aggregate(
        {
            $group: { _id: "$marca", count: { $sum: 1 } }
        },
        {
            $sort: { _id: 1 }
        },
        (error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                res.json(result || { count: 0 })
            }
        }

    )
})

Veiculo.route('ultimaSemana', (req, res, next) => {
    Veiculo.find({ created: {$gte: moment().subtract(7, 'days')} }, 
    (error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })

        }
    })
})

module.exports = Veiculo