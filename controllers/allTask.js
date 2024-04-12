const taskModel = require('../models/db');

const allTask = async (req, res) => {
    try {
        const allTasks = await taskModel.find({});
        res.render('form', { allTasks: allTasks });
    } catch (error) {
        res.status(500).send('Erro ao buscar as tarefas');
    }
};

module.exports = allTask;
