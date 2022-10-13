const Profile = require('../models/profile')

module.exports={
    edit,
    update
}



function edit(req,res) {
    Profile.findOne({'product._id': req.params.id}, function(err, profile){
        const product = profile.product.id(req.params.id)
        console.log(product)
        res.render('products/edit', {
            title:'Edit Product', profile: profile, product: product
        })
    })
}

function update(req,res){
    console.log(req.params.id)
    Profile.findOne({'product._id': req.params.id}, function(err, profile){
        const product = profile.product.id(req.params.id)
        product.productType = req.body.productType
        product.brand = req.body.brand
        product.usage = req.body.usage
        product.completed = !!req.body.completed
        profile.save(req.body, function(err){
            console.log(err)
            res.redirect('/profiles')
        })
    })
}

