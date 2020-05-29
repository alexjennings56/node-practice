const DbService = require('../Services/DbServices');
const ToDoService = require('../Services/ToDoService');

const getToDo = (req, res) => {
    DbService((db) => {
        ToDoService.getAllToDo(db, (documents) => {
            res.json(documents);
        })
    })
};

const addToDo = (req, res) => {
    const name = req.body.name;
    DbService((db) => {
        ToDoService.addToDo(db, name, (documents) => {
            res.json(documents);
        })
    })
};

const completedToDo = (req, res) => {
    DbService((db) => {
        ToDoService.getCompletedToDo(db, (documents) => {
            res.json(documents);
        })
    })
};

const uncompletedToDo = (req, res) => {
    DbService((db) => {
        ToDoService.getUncompletedToDo(db, (documents) => {
            res.json(documents);
        })
    })
};

const updateToCompleted = (req, res) => {
    DbService((db) => {
        ToDoService.updateToCompleted(db, (documents) => {
            res.json(documents);
        })
    })
};

module.exports.getToDo = getToDo;
module.exports.addToDo = addToDo;
module.exports.completedToDo = completedToDo;
module.exports.uncompletedToDo = uncompletedToDo;
module.exports.updateToCompleted = updateToCompleted;