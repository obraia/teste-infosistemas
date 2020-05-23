require('dotenv');

const Arquivo = require('../utils/Arquivo');

const VeiculoController = {
    async index(request, response) {
        const { id } = request.query;

        const veiculo = await Arquivo.pesquisarVeiculoId(id);

        if (veiculo) {
            return response.status(200).json(veiculo);
        }
        else {
            const veiculoNaoEncontrado = {
                "id": -1,
                "placa": "ERR-404", 
                "chassi": "000 000000 00 000000", 
                "renavam": "00000000000", 
                "modelo": "Veículo não encontrado",
                "marca": "Null", 
                "ano": 0000
            }
            return response.status(404).json({ message: 'id do veículo não encontrado', data: veiculoNaoEncontrado });
        }
    },
}

module.exports = VeiculoController;