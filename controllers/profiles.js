const profile = require('../models/profile')
const Profile = require('../models/profile')

module.exports = {
    new: newProfile,
    create,
    index,
    newProduct,
    createProduct
}

function newProfile(req, res) {
    res.render('profiles/new', {title: 'New Profile'})
}

function create (req, res) {
    const profile = new Profile({
        skinType: req.body,
        user: req.user._id
    })
    profile.save(function(err){
        console.log(err)
        if(err) return res.redirect('/profiles/new')
        console.log(profile)
        res.redirect('/profiles')
    })
}

function index(req, res) {
    Profile.find({user: req.user._id}, 
        function(err, profiles){
            console.log(profiles)
        res.render('profiles/index', {
            title: 'My Skin', profiles
        })
    })
}

function newProduct(req, res) {
    Profile.findById(req.params.id, function(err, profile){
        res.render('products/new', {
            title:'Add Product', profile
        })
    })
}

function createProduct(req, res){
    Profile.findById(req.params.id, function(err, profile){
        req.body.completed = !!req.body.completed
        profile.product.push(req.body)
        profile.save(function(err){
            console.log(err)
            res.redirect('/profiles')
        })
    })

}