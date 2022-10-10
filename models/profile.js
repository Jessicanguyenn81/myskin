const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const typeSchema = new Schema({
    skinType: {
        type: String,
        enum: ['Oily', 'Dry', 'Normal', 'Sensitive', 'Combination']
      },
    age: {
        type: Number
     },
    skinConcerns: {
        type: String, 
        enum: ['Acne', 'Pores', 'Redness', 'Dark Spots', 'Wrinkles', 'Aging']
    }

})

const profileSchema = new Schema ({
    skinType: typeSchema,
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})

module.exports = mongoose.model('Profile', profileSchema)