var mongoose = require('mongoose')
var Product = mongoose.model('Product')

module.exports = {
    getProducts: function(req, res) {
        Product.find({}, function(err, products){
            if(err){
                console.log("error", err)
                res.json(false);
            } else {
                if(products.length > 0) {
                    res.json(products)
                } else {
                    var newProduct1 = new Product({name: "product1", highBid: {username: "", bid: 0}, bids: []})
                    var newProduct2 = new Product({name: "product2", highBid: {username: "", bid: 0}, bids: []})
                    var newProduct3 = new Product({name: "product3", highBid: {username: "", bid: 0}, bids: []})

                    newProduct1.save(function(err){
                        if(err){
                            console.log("1", err)
                            res.json(false);
                        } else {
                            newProduct2.save(function(err){
                                if(err){
                                    console.log("2", err)
                                    res.json(false);
                                } else {
                                    newProduct3.save(function(err){
                                        if(err) {
                                            console.log("3", err)
                                            res.json(false);
                                        } else {
                                            Product.find({}, function(err, newProducts){
                                                if(err){
                                                    console.log("err2", err)
                                                } else {
                                                    console.log("success", newProducts)
                                                    res.json(newProducts);
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            }
        })
    },
    submitBid: function(req, res){
        if(req.body.bid <= 0){
            res.json({status: false, message: "bid must be greater than 0"})
        } else {
            Product.findOne({_id: req.body.productID}, function(err, product){
                if(err){
                    console.log(err);
                    res.json({status: false, message: "error with posting bid"});
                } else {
                    if(req.body.bid <= product.highBid.bid) {
                        res.json({status: false, message: "bid must be greater than current highest bid"})
                    } else {
                        product.highBid.username = req.body.username
                        product.highBid.bid = req.body.bid
                        product.bids.push({username: req.body.username, bid: req.body.bid})
                        product.save(function(err){
                            if(err){
                                console.log(err)
                                res.json({status: false, message: "error with posting bid"})
                            } else {
                                res.json({status: true, message: "bid submitted successfully"})
                            }
                        })
                    }
                }
            })
        }  
    },
    restartBids: function(req, res){
        Product.remove({}, function(err){
            if(err){
                console.log(err)
            }
            res.json(true);
        })
    }
}