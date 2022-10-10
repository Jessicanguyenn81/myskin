const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const typeSchema = new Schema({
    skinType: {
        type: String,
        enum: ['Oily', 'Dry', 'Normal', 'Sensitive', 'Combination']
      },
      description: String
})


module.exports = mongoose.model('Types', typeSchema)