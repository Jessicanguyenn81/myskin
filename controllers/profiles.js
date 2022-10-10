const Profile = require('../models/profile')

module.exports = {
    new: newProfile,
    create
}

function newProfile(req, res) {
    res.render('profiles/new')
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
        res.redirect('/profiles/new')
    })
}