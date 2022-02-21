const mongoose = require('mongoose');
const slugify = require('slugify');

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
        },
        startDate: {
            type: Date,
            required: true,
        },
        text: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    });

//generate slug
projectSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

module.exports = mongoose.model('Project', projectSchema);