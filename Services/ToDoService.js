const getAllToDo = (db, callback) => {
    let collection = db.collection('ToDo');
    collection.find({}).toArray((err, documents) => {
        callback(documents);
    });
};

const getCompletedToDo = (db, callback) => {
    let collection = db.collection('ToDo');
    collection.find({completed: true}).toArray((err, documents) => {
        callback(documents);
    });
};

const getUncompletedToDo = (db, callback) => {
    let collection = db.collection('ToDo');
    collection.find({completed: false}).toArray((err, documents) => {
        callback(documents);
    });
};

const addToDo = (db, name) => {
    let collection = db.collection('ToDo');
    collection.insertOne({name: name, completed: false});
};

const updateToCompleted = (db, changeCompleted, completed) => {
    let collection = db.collection('ToDo');
    collection.updateOne({name: changeCompleted}, {$set: {completed: completed}});
};

module.exports.getAllToDo = getAllToDo;
module.exports.addToDo = addToDo;
module.exports.getCompletedToDo = getCompletedToDo;
module.exports.getUncompletedToDo = getUncompletedToDo;
module.exports.updateToCompleted = updateToCompleted;

