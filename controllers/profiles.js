const Profile = require('../models/profile')
module.exports = {
    new: newProfile,
    create,
    index,
    newProduct,
    createProduct,
    editProduct,
    updateProduct
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

function editProduct(req,res) {
    console.log('----')
    Profile.findOne({'product._id': req.params.id}, function(err, profile){
        const product = profile.product.id(req.params.id)
        console.log(product)
        res.render('products/edit', {
            title:'Edit Product', profile: profile, product: product
        })
    })
}

function updateProduct(req,res){
    console.log('////', req.params.productid)
    console.log('-----', req.body)
    Profile.updateOne({'product._id': req.params.productid}, {$set:req.body}, {
        new: true
    })
    res.redirect('/profiles')
}

