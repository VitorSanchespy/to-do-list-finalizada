const taskSchema = require('../models/db');

const addTask = (req, res)=>{
    try{
        taskSchema.create({
            nomeT: req.body.nomeT,
            conclusao: false
        }).then(()=>{
            res.status(201).redirect('/');
        })
    }
    catch{(erro)=>{
        res.send('Houve um erro '+erro);
    }}
}

module.exports = addTask