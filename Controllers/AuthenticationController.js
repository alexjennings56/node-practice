const jwt = require('jsonwebtoken');

const users = [
    {id:1, username: "admin", password: "admin"},
    {id:2, username: "guest", password: "guest"}
];

const loginController = (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.send('Access Denied!');
        return;
    };

    const user = users.find((u) => {
        return u.username === req.body.username && u.password === req.body.password;
    });

    if(!user) {
        res.send('Seriously get lost!');
        return;
    };

    const token = jwt.sign({
        sub: user.id,
        username: user.username
    }, 'secretkey', {expiresIn: "3 hours"});

    res.json({access_token: token});
};


module.exports.loginController = loginController;
