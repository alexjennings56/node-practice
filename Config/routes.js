const ToDoController = require('../Controllers/ToDoController');
const AuthenticationController = require('../Controllers/AuthenticationController');

const expressjwt = require('express-jwt');

const jwtCheck = expressjwt({
    secret: 'secretkey'
});

const routes = (app) => {
    app.get('/todo', ToDoController.getToDo);
    app.post('/todo', jwtCheck, ToDoController.addToDo);
    app.get('/uncompleted', ToDoController.uncompletedToDo);
    app.get('/completed', ToDoController.completedToDo);
    app.put('/todo', jwtCheck, ToDoController.updateToCompleted);
    app.post('/login', AuthenticationController.loginController);
    app.delete('/todo', jwtCheck, ToDoController.deleteToDo);
};

module.exports = routes;