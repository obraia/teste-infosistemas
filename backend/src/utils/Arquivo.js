const fs = require('fs');

const caminhoArquivo = './src/database/veiculos.txt';

let idAtual = 0;

const Arquivo = {
    async lerArquivo() {
        const veiculos = Array();

        const dados = fs.readFileSync(caminhoArquivo, 'utf8');

        const linhas = dados.split(/\r?\n/);

        linhas.forEach(linha => {
            if (linha) {
                const [id, placa, chassi, renavam, modelo, marca, ano] = linha.split(';');

                const veiculo = {
                    id: parseInt(id),
                    placa,
                    chassi,
                    renavam: parseInt(renavam),
                    modelo,
                    marca,
                    ano: parseInt(ano)
                };

                veiculos.push(veiculo);
            }
        });

        idAtual = veiculos.length;

        return veiculos;
    },

    async inserirVeiculo(veiculo) {
        const { id = ++idAtual, placa, chassi, renavam, modelo, marca, ano } = veiculo;

        const novaLinha = `${id};${placa};${chassi};${renavam};${modelo};${marca};${ano}\n`;

        fs.appendFileSync(caminhoArquivo, novaLinha, (error) => { });
    },

    async editarVeiculo(veiculo) {
        const veiculos = await this.lerArquivo();

        const index = veiculos.findIndex(v => v.id == veiculo.id);

        if (index >= 0) {
            veiculos[index] = veiculo;
            this.salvarArquivo(veiculos);
        } else {
            console.log('[Arquivo] id não encontrado');
        }
    },

    async deletarVeiculo(id) {
        const veiculos = await this.lerArquivo();

        const index = veiculos.findIndex(v => v.id == id);

        if (index >= 0) {
            veiculos.splice(index, 1);
            this.salvarArquivo(veiculos);
        } else {
            console.log('[Arquivo] id não encontrado');
        }
    },

    async pesquisarVeiculoId(id) {
        const veiculos = await this.lerArquivo();

        return veiculos.find(veiculo => veiculo.id == id);
    },

    async salvarArquivo(veiculos) {

        fs.truncateSync(caminhoArquivo, 0);

        veiculos.forEach(veiculo => {
            const { id, placa, chassi, renavam, modelo, marca, ano } = veiculo;
            const linha = `${id};${placa};${chassi};${renavam};${modelo};${marca};${ano}\n`;

            fs.appendFileSync(caminhoArquivo, linha, (error) => { });
        });
    }
}

module.exports = Arquivo;