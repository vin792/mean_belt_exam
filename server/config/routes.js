var users = require('../controllers/users')
var products = require('../controllers/products')
var path = require('path')

module.exports = function(app){
    app.post('/login', users.index)
    app.get('/logout', users.logout)
    app.get('/checklogin', users.checkLogin)
    app.get('/getproducts', products.getProducts)
    app.post('/submitbid', products.submitBid)
    app.get('/restartbids', products.restartBids)
    app.get('*', function (req, res) {
        res.sendFile(path.resolve('belt-exam-app/dist/index.html'));
    })
}