require('dotenv');

const Arquivo = require('../utils/Arquivo');


const VeiculoController = {
    async index(request, response) {

        const veiculos = await Arquivo.lerArquivo();

        return response.status(200).json(veiculos);
    },

    async store(request, response) {
        const veiculo = request.body;

        const veiculoPesquisa = await Arquivo.pesquisarVeiculoId(veiculo.id);

        if (veiculoPesquisa) {
            return response.status(409).send({ error: `esse veículo já foi cadastrado` });
        }

        await Arquivo.inserirVeiculo(veiculo);

        return response.status(201).send({ message: `${veiculo.placa} cadastrado com sucesso` });
    },

    async update(request, response) {
        const veiculo = request.body;

        const veiculoPesquisa = await Arquivo.pesquisarVeiculoId(veiculo.id);

        if (!veiculoPesquisa) {
            return response.status(404).send({ error: `id do veículo não encontrado` });
        }

        await Arquivo.editarVeiculo(veiculo);

        return response.status(200).send({ message: 'veículo editado com sucesso' });
    },

    async delete(request, response) {
        const { id } = request.query;

        const veiculoPesquisa = await Arquivo.pesquisarVeiculoId(id);

        if (!veiculoPesquisa) {
            return response.status(404).send({ error: `id do veículo não encontrado` });
        }

        await Arquivo.deletarVeiculo(id);

        return response.status(200).send({ message: `${veiculoPesquisa.placa} deletado com sucesso` });
    }
}

module.exports = VeiculoController;