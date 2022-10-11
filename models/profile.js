const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const typeSchema = new Schema({
    skinType: {
        type: String,
        enum: ['Oily', 'Dry', 'Normal', 'Sensitive', 'Combination']
      },
    age: {
        type: Number,
        required: true
     },
    skinConcerns: {
        type: String, 
        enum: ['Acne', 'Pores', 'Redness', 'Dark Spots', 'Wrinkles', 'Aging']
    }
})

const productSchema = new Schema ({
    productType: {
        type: String,
        enum: ['Cleanser', 'Toner', 'Moisturizer', 'Serum', 'Sunscreen']
    },
    brand: {
        type: String, required: true
    },
    usage: {
        type: String,
        enum:['day', 'night', 'day and night']
    },
    completed:{ type: Boolean, default: false
    }   
})

const profileSchema = new Schema ({
    skinType: typeSchema,
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    product: [productSchema]
})

module.exports = mongoose.model('Profile', profileSchema)