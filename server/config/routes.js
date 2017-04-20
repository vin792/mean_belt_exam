var users = require('../controllers/users')

module.exports = function(app){
    app.post('/checkuser', users.index)
}