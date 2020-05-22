const { Router } = require('express');

const VeiculoController = require('./controllers/VeiculoController');
const PesquisaController = require('./controllers/PesquisaController');

const routes = Router();

routes.get('/veiculos', VeiculoController.index);
routes.post('/veiculos', VeiculoController.store);
routes.put('/veiculos', VeiculoController.update);
routes.delete('/veiculos', VeiculoController.delete);

routes.get('/pesquisa', PesquisaController.index);

module.exports = routes;