const taskSchema = require('../models/db');

const delTask = (req, res)=>{
    try{
        taskSchema.deleteOne({
            _id: req.body.taskId
        }).then(()=>{
            res.status(201).redirect('/');
        })
    }
    catch{(erro)=>{
        res.send('Houve um erro '+erro);
    }}
}

module.exports = delTask
