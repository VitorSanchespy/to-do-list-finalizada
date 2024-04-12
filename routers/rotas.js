const {Router} = require('express');
const alltask = require('../controllers/allTask');
const addTask = require('../controllers/addTask');
const delTask = require('../controllers/deleteTask');
const comTask = require('../controllers/complete')
const rota = Router()

//Rotas
rota.get('/', alltask);
rota.post('/add', addTask)
rota.post('/del', delTask)
rota.post('/complete', comTask)
module.exports = rota