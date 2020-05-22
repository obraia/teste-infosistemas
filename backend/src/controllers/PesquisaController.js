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
            return response.status(404).json({ error: 'id do veículo não encontrado' });
        }
    },
}

module.exports = VeiculoController;