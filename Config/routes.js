const ToDoController = require('../Controllers/ToDoController');

const routes = (app) => {
    app.get('/todo', ToDoController.getToDo);
    app.post('/todo', ToDoController.addToDo);
    app.get('/uncompleted', ToDoController.uncompletedToDo);
    app.get('/completed', ToDoController.completedToDo);
    app.put('/todo', ToDoController.updateToCompleted);
};

module.exports = routes;