const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

describe('Veiculos', () => {

    describe('/GET veiculos', () => {
        it('Testando listagem de todos os veículos', (done) => {
            chai.request('http://localhost:3333')
                .get('/veiculos')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        })
    });

    describe('/POST veiculos', () => {
        it('Testando adição de um novo veículo', (done) => {

            const veiculo = {
                id: -1,
                placa: "GSR-2944",
                chassi: "5YA 6K72A6 Eg 7d0482",
                renavam: "99858477768",
                modelo: "A6 4.2 Quattro Tiptronic",
                marca: "Audi",
                ano: 2000
            }

            chai.request('http://localhost:3333')
                .post('/veiculos')
                .send(veiculo)
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                })
        })
    });

    describe('/PUT veiculos', () => {
        it('Testando edição de um veículo', (done) => {

            const veiculo = {
                id: -1,
                placa: "GSR-2944",
                chassi: "5YA 6K72A6 Eg 7d0482",
                renavam: "99858477768",
                modelo: "A6 4.2 Quattro Tiptronic",
                marca: "Audi",
                ano: 2000
            }

            chai.request('http://localhost:3333')
                .put('/veiculos')
                .send(veiculo)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })
    });

    describe('/GET/:id veiculos', () => {
        it('Testando pesquisa por id', (done) => {

            const id = -1;

            chai.request('http://localhost:3333')
                .get('/pesquisa/?id=' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(id);
                    res.body.should.have.property('placa');
                    res.body.should.have.property('chassi');
                    res.body.should.have.property('renavam');
                    res.body.should.have.property('modelo');
                    res.body.should.have.property('marca');
                    res.body.should.have.property('ano');
                    done();
                })
        })
    });

    describe('/DELETE veiculos', () => {
        it('Testando delete de um veículo', (done) => {

            const id = -1;

            chai.request('http://localhost:3333')
                .delete('/veiculos/?id=' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })
    });
});