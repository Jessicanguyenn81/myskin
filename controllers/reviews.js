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
    Profile.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(profile) {
        if (!profile) return res.redirect('/profiles')
        let review
        profile.product.forEach(function(prod){
            if (prod.reviews.id(req.params.id)) review = prod.reviews.id(req.params.id)
        })
        if(!review.user.equals(req.user._id)) return res.redirect('/profiles')
        review.remove(req.params.id)
        profile.save().then(function() {
          res.redirect('/profiles')
        }).catch(function(err) {
          return next(err)
        //   res.redirect('/profiles')
        })
      })
    }

