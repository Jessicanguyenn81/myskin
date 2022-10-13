const Profile = require('../models/profile')


module.exports = {
    create,
    delete: deleteReview
}

function create(req, res){
    Profile.findOne({'product._id': req.params.id}, function(err, profile){
        const product = profile.product.id(req.params.id)
        req.body.user = req.user._id
        product.reviews.push(req.body)
        profile.save(function(err){
            res.redirect('/profiles')
        })
    })
}


function deleteReview(req, res){
    Profile.findOne({
        'products.review._id': req.params._id, 'products._id': req.user.id
    }, function(err, profile) {
        const product = profile.product.id(req.params.id)
        req.body.user = req.user._id
        console.log(product.reviews)
        product.reviews.remove(req.params.id);
        profile.save(function(err){
            res.redirect('/profiles')
        })
    })
}


