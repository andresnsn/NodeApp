const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose

const portfolioSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function(){return slug(this.title)}
    },
    image: {
        type: String,
        required: true
    },
    technologies: [
        {
            label: String,
            icon: String,
            iconType: String
        }
    ],
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('portfolio', portfolioSchema)
