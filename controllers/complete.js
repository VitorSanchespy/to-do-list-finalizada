const taskSchema = require('../models/db');

const comTask = (req, res)=>{
    try{
        taskSchema.updateOne({
            _id: req.body.taskId
        }, {conclusao:true}).then(()=>{
            res.status(201).redirect('/');
        })
    }
    catch{(erro)=>{
        res.send('Houve um erro '+erro);
    }}
}

module.exports = comTask
